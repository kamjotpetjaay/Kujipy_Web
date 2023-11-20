import "./events.css"
import eventoDiciembre2023 from '../assets/eventoDiciembre2023.jpg';

const Events = () => {

    const newEvents = () =>{
        return (
            <div>
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
        )
    }
    const eventsPast = () =>{
        return (
            <div>
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