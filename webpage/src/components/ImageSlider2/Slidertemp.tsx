import { useEffect, useRef } from 'react'

const myRef = useRef(null);

const useSlider = (slideImage: HTMLElement  , slideText: HTMLElement , images: any) => {
 let slideCounter = 0;

 useEffect(() => startSlider())

 const startSlider =() => {
    slideImage.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ), url(${images[0].src})`;
        slideText.innerHTML = images[0].text;
    }
const handleSlide = (slide: number) => {
    slideImage.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ), url(${images[slide - 1].src})`
    slideText.innerHTML = images[slide - 1].text
    animateSlide()
  }
  
  const animateSlide = () => {
    slideImage.classList.add("fadeIn")
    setTimeout(() => {
      slideImage.classList.remove("fadeIn")
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
  
   slideImage.style.backgroundImage = `linear-gradient(
          to right,
          rgba(34, 34, 34, 0.4),
          rgba(68, 68, 68, 0.4)
          ),url(${images[slideCounter + 1].src})`;
      slideText.innerHTML = images[slideCounter + 1].text;
      slideCounter++;
        animateSlide()
  }
  
  return { goToPreviousSlide, goToNextSlide }
}
  
export default useSlider
