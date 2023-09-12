
import ImageSlider, { Imagen } from '../components/ImageSlider/ImageSlider';
import imagen1 from '../assets/banda.jpg';
import imagen2 from '../assets/tiptsy2.jpg';





const Inicio = () =>{

    const galeriaImagenes: Imagen[] = [
        { url: imagen1, name: "banda"},
        { url: imagen2, name: "tiptsy2"}
      ]


    return (
        <div className='Content'>
            {/* <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Reproducir': 'Detener'}</button> */}
            <header className="App-header">
            <h1>
                Explorando la Música de Kujipy: El Sonido de Tlahuitoltepec Mixe, Oaxaca
            </h1>
            </header>

            <div className='Galery-main'>
                <ImageSlider galeriaImagenes={ galeriaImagenes} />
            </div>
        </div>
    )
}

export default Inicio
