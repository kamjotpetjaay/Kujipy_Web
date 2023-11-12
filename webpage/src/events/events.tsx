import "./events.css"

const Events = () => {

    const newEvents = () =>{
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
                    <b>Lugar:</b> Bar Konko, abajo de la cancha municipal de Santa María Tlahuitoltepec Mixe, Oaxaca
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
                    <div className="Events-new">
                        {newEvents()}
                    </div>
                    <div className="Events-past"></div>
                </div>
            </div>
        </div>
    )
}

export default Events