import React, { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import "./style.scss"

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className="maeztra-carousel">
      <FaAngleLeft onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        )
      })}
      <FaAngleRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <div className="maeztra-carousel-content">
        <h1>Promoções de Outono</h1>
        <p>Confiras os melhores looks para combinar com você nesse Outono</p>
        <button className="maeztra-btn">Conferir</button>
      </div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}

export default Carousel