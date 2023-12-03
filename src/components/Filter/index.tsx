import React, { useState } from "react";
import "@styles/filter.scss";

interface FilterProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
  options?: string[];
}

export function Filter({ title, isChecked, onToggle, options }: FilterProps) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`filter ${isExpanded ? "expanded" : ""}`}>
      <div className="filter-header" onClick={toggleAccordion}>
        <label className="filter-title">{title}</label>
        <div className="arrow-icon">{isExpanded ? "▼" : "▶"}</div>
      </div>
      {isExpanded && (
        <div className="filter-options">
          {options?.map((option) => (
            <div className="option">
              
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    checked={isChecked}
                    onChange={onToggle}
                  />
                  <label className="filter-title">{option}</label>
                
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
