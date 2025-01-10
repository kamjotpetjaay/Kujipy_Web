import React, { useEffect, useState } from 'react';
import './ImageSlider.css'

export interface Imagen {
   url: string,
   name: string
 }

interface ImageSliderProps {
   galeriaImagenes: Imagen[]
}

const ImageSlider = ({galeriaImagenes}: ImageSliderProps) => {
   let slideIndex = 0
   let timeoutId:any = null;
   const [slides, setSlides] = useState<any>()
   const [dots, setDots] = useState<any>()

   useEffect(() => {
      setSlides(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>)
      setDots(document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>)
      if(slides)
         showSlides();
    },[slides]); 

   const currentSlide = (index: number) => {
      slideIndex = index
      showSlides()
   }
   
   const plusSlides = (step: number) =>{
      if(step < 0) {
         slideIndex -= 2
         
         if(slideIndex < 0) {
            slideIndex = slides.length - 1
         }
      }
      showSlides();
   }
   
   const showSlides = () => {
      if(slides && slides[0]){
         for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none" ;
            dots[i].classList.remove('active');
         }
         slideIndex++
         if(slideIndex > slides.length) {
            slideIndex = 1
         }
         slides[slideIndex - 1].style.display = "block";
         dots[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
         timeoutId = setTimeout(showSlides, 20000); // Change image every 20 seconds
      }
      
   }
   
   

   const getImages = (galeriaImagenes: Imagen[]): JSX.Element => {
      const images: any = []
      let delay = 0
      let skip = 4
      
      galeriaImagenes.forEach((imagen, index) => {
         images.push(
            <div className='mySlides' key={'slides'+index}>
               <img src={imagen.url} id={imagen.name} alt={imagen.name} style={{
                  animationDelay: delay+"s"
                  }}/>
            </div>
         )
         delay = delay+skip;
      }) 
      return images
   }

   const getDots = (galeriaImagenes:Imagen []) => {
      const dots: any = []
      galeriaImagenes.forEach((imagen, index) => {
         dots.push(<span className="dot" key={"dot"+index} onClick={() => currentSlide(index)}></span>)
      }) 
      return dots
   }


   return (
      <div className='slider-container'>
         {getImages(galeriaImagenes)}
         <div style={{textAlign: "center"}}>
             {getDots(galeriaImagenes)}  
         </div>
      </div>
   )
   
}

export default ImageSlider;
