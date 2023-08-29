import React from 'react';
import { ImageSliderWrapper } from './ImageSlider.styled';

export interface Imagen {
   url: string,
   name: string
 }

interface ImageSliderProps {
   galeriaImagenes: Imagen[]
}

const getImages = (galeriaImagenes: Imagen[]): JSX.Element => {
   const images: any = []
   galeriaImagenes.forEach(imagen => {
      images.push(
      <ImageSliderWrapper>
         <img src={imagen.url} id={imagen.name} alt={imagen.name} />
      </ImageSliderWrapper>
      )
   }) 
   return images
}


const ImageSlider = ({galeriaImagenes}: ImageSliderProps) => {
   return (
      <div>
         {getImages(galeriaImagenes)}
      </div>
   )
}

export default ImageSlider;
