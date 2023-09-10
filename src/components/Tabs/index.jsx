import React, { useState } from "react";
import "./styles.css";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-section">
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <h1 className="schedule">Schedule {activeTab + 1}</h1>
        {tabs[activeTab].content.map((schedule) => {
          return (
            <div key={schedule.id} className="schedule-detail">
              <p>{schedule.date}</p>
              <p>{schedule.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
