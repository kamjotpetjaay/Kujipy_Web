import "./events.css"
import eventoDiciembre2023 from '../assets/eventoDiciembre2023.jpg';
import eventoAgosto2024 from '../assets/eventoAgosto2024.jpg'
import eventoEnero2025 from '../assets/eventoEnero2025.jpg'

const Events = () => {

    const newEvents = () =>{
        return (
            <div>
                <h2>
                    Kujipy en concierto en Comiteam
                </h2>
                <h3>
                    Oaxaca city
                </h3>
                <h3>Donde?
                    <br></br>
                Primera privada de Guadalupe Victoria #106, Oaxaca. Por el barrio del Exmarquezado en Comitiva Patronal de la Imagen
                </h3>
                <h3>
                    25 de Enero 2025
                </h3>

                <img src={eventoEnero2025} id={"eventoEnero2025"} alt={"eventoEnero2025"} width="100%"></img>
            </div>
        )
    }
    const eventsPast = () =>{
        return (
            <div>
                <div className="past1">
                <h2>
                    Kujipy en el concierto “Niman Axkan (Ahora mismo en náhuatl)”
                </h2>
                <h3>
                Un gran honor ser parte de este concierto que daremos nada más y nada menos que en el Palacio de Bellas Artes, es un concierto en homenaje a la nueva música indígena contemporánea de nuestro país, haciendo particular énfasis en lo que se está creando actualmente y contará con grandes invitados🔥🔥🔥🔥
                </h3>
                <h3>
                Te esperamos el sábado 10 de agosto a las 19 h, en la Sala Principal del Palacio de Bellas Artes
                </h3>

                <img src={eventoAgosto2024} id={"eventoAgosto2024"} alt={"eventoAgosto2024"} width="100%"></img>
            </div>
                <div className="past2">
                    <h2>
                        ¡Festival KOJKP JÄÄ'Y: Celebrando en Honor a la Virgen de Guadalupe en Santa Maria Tlahuitoltepec!
                    </h2>
                    <h2>
                        La comunidad de Santa Maria Tlahuitoltepec se complace en invitarte al emocionante Festival KOJKP JÄÄ'Y, en honor a la Virgen de Guadalupe.
                    </h2>

                    <img src={eventoDiciembre2023} id={"eventoDiciembre2023"} alt={"eventoDiciembre2023"} ></img>

                    <h3>
                        ¡Únete a nosotros para una experiencia musical única con una mezcla de géneros que van desde trap y rap hasta reggae, suun y balkan!
                    </h3>
                    <h2>
                        ¡Prepárate para sumergirte en la magia de la música y la cultura! Este evento es una oportunidad para celebrar la diversidad musical y honrar la tradición.
                    </h2>
                    
                    <h2>
                        ¡Te esperamos para compartir juntos momentos inolvidables!
                    </h2>

                    <h2>
                        #FestivalKojpkJaay #Música #Cultura #VirgenDeGuadalupe #SantaMariaTlahuitoltepec
                    </h2>

                </div>

                <div className="past3">
                    <h2>
                        ¡No te Pierdas el Espectacular Encuentro Musical con Kujipy!
                    </h2>
                    <p>
                        <b>Fecha:</b> 30 de Septiembre de 2023
                    </p>
                    <p>
                        <b>Hora:</b> 19:00
                    </p>
                    <p>
                        <b>Lugar:</b> Bar Konko, San Lucas, en Santa María Tlahuitoltepec Mixe, Oaxaca
                    </p>

                    <h3>
                        ¡Únete a nosotros para una noche mágica llena de música, cultura y tradición! El 30 de septiembre de 2023, la aclamada agrupación Kujipy, orgullosamente originaria de Santa María Tlahuitoltepec Mixe, Oaxaca, estará en concierto en el tradicional bar Konko.
                    </h3>
                </div>
            </div>
        )
    }
    return (
        <div className='Content'>
            <div className="Events-container">
                <div className="Events-buttons"></div>
                <div className="Events-text">
                    <div className="Event-title">EVENTOS NUEVOS:</div>
                    <div className="Events-new">
                        {newEvents()}
                    </div>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                    <div className="Event-title">EVENTOS PASADOS:</div>
                    <div className="Events-past">
                        {eventsPast()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events