import React, { FC, useEffect, useRef } from 'react';
import { SliderWrapper } from './Slider.styled';

export interface ImagenType {
   src: string
   text: string
}

interface SliderProps {
   images: Array<ImagenType>
}

const Slider = ({images}: SliderProps) => {

   let slideCounter = 0;
   const slideImage = useRef(document.createElement("div"));
   const slideText = useRef(document.createElement("div"));

   useEffect(() => startSlider())
  
   const startSlider =() => {
      slideImage.current.style.backgroundImage = `linear-gradient(
          to right,
          rgba(34, 34, 34, 0.4),
          rgba(68, 68, 68, 0.4)
          ), url(${images[0].src})`;
          slideText.current.innerHTML = images[0].text;
      }
  const handleSlide = (slide: number) => {
      slideImage.current.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ), url(${images[slide - 1].src})`
      slideText.current.innerHTML = images[slide - 1].text
      animateSlide()
    }
    
    const animateSlide = () => {
      slideImage.current.classList.add("fadeIn")
      setTimeout(() => {
        slideImage.current.classList.remove("fadeIn")
      }, 700)
    }
  
    const goToPreviousSlide = () => {
      if (slideCounter === 0) {
        handleSlide(images.length)
        slideCounter = images.length;
      }
    
        handleSlide(slideCounter)
        slideCounter--;
      }
    
    const goToNextSlide = () => {
      if (slideCounter === images.length - 1) {
        startSlider()
        slideCounter = -1;
        animateSlide()
      }
    
     slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
            ),url(${images[slideCounter + 1].src})`;
        slideText.current.innerHTML = images[slideCounter + 1].text;
        slideCounter++;
          animateSlide()
    }

   return (
      <SliderWrapper>
         <div className="slider" ref={slideImage}>
         <div className="slider--content">
         <button onClick={goToPreviousSlide} className="slider__btn-left">
            <i className="fas fa-angle-left"></i>
         </button>
         <div className="slider--feature">
            <h1 className="feature--title">Dreaming</h1>
            <p ref={slideText} className="feature--text"></p>
            <button className="feature__btn">Get started</button>
         </div>
         <button onClick={goToNextSlide} className="slider__btn-right">
            <i className="fas fa-angle-right"></i>
         </button>
         </div>
      </div>
      </SliderWrapper>
   )
}

export default Slider;
