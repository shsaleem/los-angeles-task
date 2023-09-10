import React from "react";
import Carousel from "../Carousel";
import "./styles.css";

const History = () => {
  return (
    <section className="history" id="history">
      <div className="history-content">
        <div className="history-detail">
          <div>
            <p>
              <span className="digit">01</span>
            </p>
          </div>
          <div className="history-title">
            <span className="history-text">HISTORY</span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="history-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
          cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
          blanditiis dolorem modi! Officiis accusamus ducimus ugit illo ea totam
          atque quia explicabo sequi nostrum in pariatur delectus error minima,
          saepe cumque. Rem at suscipit, rerum laborum eligendi omnis nam amet.
        </div>
      </div>
      <div className="carousel-section">
        <Carousel />
      </div>
    </section>
  );
};

export default History;
