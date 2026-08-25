export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // 🔑 role ke hisaab se cookie name
  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE) || 7;

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      httpOnly: true,
      secure: false,        // ⚠️ localhost ke liye FALSE
      sameSite: "Lax",      // ⚠️ localhost ke liye Lax
      maxAge: cookieExpireDays * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
