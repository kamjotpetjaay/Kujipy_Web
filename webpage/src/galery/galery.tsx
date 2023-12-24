import Sound from 'react-sound';
import baltipstySound from '../assets/fondoKujipy.mp3';
import { useEffect, useState } from 'react';
import kujipy from '../assets/kujipy.jpg';
import tiptsy from '../assets/tiptsy.jpg';
import tiptsy2 from '../assets/tiptsy2.jpg';
import grupo1 from '../assets/grupo1.jpg';
import banda2 from '../assets/banda2.jpg';
import musicos from '../assets/musicos.jpg';
import tiptsy3 from '../assets/tiptsy3.jpg';
import tiptsy4 from '../assets/tiptsy4.jpg';
import tiptsy5 from '../assets/tiptsy5.jpg';
import tiptsy6 from '../assets/tiptsy6.jpg';
import tiptsy7 from '../assets/tiptsy7.jpg';
import musicos2 from '../assets/musicos2.jpg';
import musicos3 from '../assets/musicos3.jpg';
import musicos4 from '../assets/musicos4.jpg';
import musicos5 from '../assets/musicos5.jpg';
import musicos6 from '../assets/musicos6.jpg';
import musicos7 from '../assets/musicos7.jpg';

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
                    <div className='image-container'><img className='img-vertical' src={kujipy} id={"kujipyimg"} alt={"kujipy"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-horizontal' src={tiptsy} id={"tiptsy"} alt={"tiptsy"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={tiptsy2} id={"tiptsy2"} alt={"tiptsy2"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-horizontal' src={grupo1} id={"grupo1"} alt={"grupo1"} onClick={openFullscreen}></img></div>
                </div>
                
                <div className='galeria-row'>
                    <div className='image-container'><img className='img-vertical' src={tiptsy3} id={"tiptsy3"} alt={"tiptsy3"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-horizontal' src={tiptsy4} id={"tiptsy4"} alt={"tiptsy4"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={tiptsy5} id={"tiptsy5"} alt={"tiptsy5"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={tiptsy6} id={"tiptsy6"} alt={"tiptsy6"} onClick={openFullscreen}></img></div>
                </div>
                <div className='galeria-row'>
                    <div className='image-container'><img className='img-vertical' src={musicos} id={"musicos"} alt={"musicos"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={musicos2} id={"musicos2"} alt={"musicos2"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={musicos3} id={"musicos3"} alt={"musicos3"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-horizontal' src={musicos4} id={"musicos4"} alt={"musicos4"} onClick={openFullscreen}></img></div>
                </div>
                <div className='galeria-row'>
                    <div className='image-container'><img className='img-vertical' src={musicos5} id={"musicos5"} alt={"musicos5"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={musicos6} id={"musicos6"} alt={"musicos6"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={musicos7} id={"musicos7"} alt={"musicos7"} onClick={openFullscreen}></img></div>
                    <div className='image-container'><img className='img-vertical' src={tiptsy7} id={"tiptsy7"} alt={"tiptsy7"} onClick={openFullscreen}></img></div>
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