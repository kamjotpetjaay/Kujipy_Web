import { ReactNode, useEffect, useState } from "react";
import { ImagenType } from "../components/Slider/Slider";
import cerrarImg from '../assets/cerrar.png';
import flechaIzquierda from '../assets/fhecha-izquierda.png';
import flechaDerecha from '../assets/fhecha-derecha.png';


interface ModalImageProps {
    image ?: ImagenType
    images ?: Array<ImagenType>
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    closeModal: () => void;
}

const ModalImage = ({isOpen, toggle, image, images, children, closeModal}: ModalImageProps) =>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [actualImage, setActualImage] = useState<ImagenType>()

    useEffect(() => {
        if(image)
        setActualImage(image)
        if(images && image)
            setCurrentIndex(images.indexOf(image))
      },[]); 

     useEffect(() => {
        setActualImage(image)
        if(images && image)
        setCurrentIndex(images.indexOf(image))
      },[image]); 
      
    const nextSlide = () => {
        if(images){
            setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1
                ? 0 :
                prevIndex + 1
            );
            setActualImage(images[currentIndex])
        }
    };

    const prevSlide = () => {
        if(images)
        {  
            setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? images.length - 1
                : prevIndex - 1
            );
            setActualImage(images[currentIndex])
        }
        
    };

    return (
        <div>
            {isOpen && (
            <div className="modal-overlay" onClick={closeModal} >
                <div onClick={(e) => e.stopPropagation()} className="modal-box">
                    <div className="modal-container">
                        <div className="cerrar-button">
                                <img src={cerrarImg} alt="cerrar" className="img-cerrar" onClick={closeModal}></img>
                        </div>
                        <div className="carrousel-container">
                            <div className="lateral-barra-left">
                                <img className="flecha-izquierda" src={flechaIzquierda} alt="flechaIzquierda" onClick={prevSlide}></img>
                            </div>
                            <div className="img-container">
                                <img
                                className="img-contain"
                                src={actualImage?.src}
                                alt={actualImage?.text}></img>
                            </div>
                            <div className="lateral-barra-right">
                                <img className="flecha-derecha" src={flechaDerecha} alt="flechaDerecha" onClick={nextSlide}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
    );
}

export default ModalImage;
