import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./style.scss";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <h2>As Mais Pedidas</h2>
      <div className="maeztra-cards-carousel">
        <FaAngleLeft onClick={prevSlide} className="arrow arrow-left" />
        <div className="cards-container">
          {data.map((item, idx) => (
            <div className={`card ${slide === idx ? "active" : ""}`} key={idx}>
              <img src={item.image} alt="Card" />
              <div className="colors">
                {item.colors.map((color, colorIdx) => (
                  <div className="color" style={{ backgroundColor: color }} key={colorIdx} />
                ))}
              </div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
              <button className="maeztra-btn">Adicionar</button>
            </div>
          ))}
        </div>
        <FaAngleRight onClick={nextSlide} className="arrow arrow-right" />
      </div>
    </>
  );
};

export default Carousel;
