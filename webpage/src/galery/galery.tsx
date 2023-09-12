import Sound from 'react-sound';
import baltipstySound from '../assets/fondoKujipy.mp3';
import { useEffect, useState } from 'react';
import kujipy from '../assets/kujipy.jpg';
import tiptsy from '../assets/tiptsy.jpg';
import tiptsy2 from '../assets/tiptsy2.jpg';
import grupo1 from '../assets/grupo1.jpg';
import casaFrijol from '../assets/casa_frijol.jpg';
import patioArenal from '../assets/patio_arenal.jpg';
import './galery.css'

enum SOUNDSTATUS {
    PLAYING = 'PLAYING',
    STOPPED = 'STOPPED',
    PAUSED = 'PAUSED'
}

const Galery = () =>{

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    useEffect(() => {
        setIsPlaying(true)
      },[]); 

    const openFullscreen =  (event: any) =>{
        event.target.requestFullscreen()
    }

    return (
        <div className='Content'>
            <div className='galeria'>
                <h2>Galería Kujipy</h2>
                <div className='galeria-row'>
                    <div className='image-container'><img src={kujipy} id={"kujipyimg"} alt={"kujipy"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img src={tiptsy} id={"tiptsy"} alt={"tiptsy"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img src={tiptsy2} id={"tiptsy2"} alt={"tiptsy2"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img src={grupo1} id={"grupo1"} alt={"grupo1"} onClick={openFullscreen}></img></div>
                </div>
                <div className='galeria-row'>
                    <div className='image-container'><img src={casaFrijol} id={"casaFrijol"} alt={"casaFrijol"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img src={patioArenal} id={"patioArenal"} alt={"patioArenal"} onClick={openFullscreen}></img></div>
                </div>
                
                
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