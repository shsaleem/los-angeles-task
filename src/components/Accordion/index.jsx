import React, { useState } from "react";
import "./styles.css";

const Accordion = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="tab-content">
          <h1 className="schedule">Schedule {id}</h1>
          {content.map((schedule) => {
            return (
              <div key={schedule.id} className="schedule-detail">
                <p>{schedule.date}</p>
                <p>{schedule.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
