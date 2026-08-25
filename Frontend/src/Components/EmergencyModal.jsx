import React from "react";

const emergencies = [
  { type: "Accident", icon: "🚑" },
  { type: "Heart Attack", icon: "❤️" },
  { type: "Breathing Issue", icon: "🫁" },
  { type: "Pregnancy Emergency", icon: "🤰" },
  { type: "Other", icon: "⚠️" }
];

const EmergencyModal = ({ onSelect, onClose }) => {
  return (
    <div className="emergency-overlay">
      <div className="emergency-modal">
        <h2>Select Emergency Type</h2>

        <div className="emergency-list">
          {emergencies.map((e) => (
            <button
              key={e.type}
              onClick={() => onSelect(e.type)}
              className="emergency-btn"
            >
              <span>{e.icon}</span> {e.type}
            </button>
          ))}
        </div>

        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmergencyModal;
