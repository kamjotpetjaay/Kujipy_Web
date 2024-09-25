import Sound from 'react-sound';
import baltipstySound from '../assets/fondoKujipy.mp3';
import { useEffect, useState } from 'react';
import Images from './images'
import './galery.css'
import useModal from '../hooks/useModal';
import ModalImage from './modal-image';
import { ImagenType } from '../components/Slider/Slider';


enum SOUNDSTATUS {
    PLAYING = 'PLAYING',
    STOPPED = 'STOPPED',
    PAUSED = 'PAUSED'
}

const Galery = () =>{

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const { isOpen, toggle } = useModal();
    const [actualImage, setActualImage] = useState<ImagenType>()

    useEffect(() => {
        setIsPlaying(true)
      },[]); 

    const openFullscreenModal =  (item: ImagenType) =>{
        console.log("entra en open full screen modal")
        console.log(item)
        setActualImage(item)
        toggle()
    }

    const closeFullScreenModal = () => {
        console.log("close modal")
        setActualImage(undefined)
        toggle()
    }

    return (
        <div className='Content'>
            <div className='galeria'>
                <h2>Galería Kujipy</h2>
                <div className='galeria-container'>
                    <div className='image-container'>
                        {
                            Images.map( item => (
                                <img 
                                className="img-galeria" 
                                src={item.src} id={item.text} alt={item.text} onClick={() => openFullscreenModal(item)}></img>
                            )
                            )
                        }
                        
                    </div>
                </div>
                <ModalImage isOpen={isOpen} toggle={toggle} image={actualImage} images={Images} closeModal={closeFullScreenModal}></ModalImage>
            </div>
            <Sound
                url={baltipstySound}
                playStatus={ isPlaying ? SOUNDSTATUS.PLAYING: SOUNDSTATUS.STOPPED}
                autoLoad={true}
                loop={true}
                volume={50}
            />
        </div>
    )
}

export default Galery