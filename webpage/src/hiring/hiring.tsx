import "./hiring.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faSpotify,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Hiring = () => {

    const contact = () =>{
        return (
            <div>
                <h2>
                    Contacto
                </h2>
                <p>
                    <b>Correo:</b> kujipy.suun@gmail.com
                </p>
                <p>
                    <b>Whatsapp:</b> +52 283 116 9385
                </p>
                <p>
                    <b>Whatsapp 2:</b> +52 221 441 8649
                </p>
                
                <div className="social-container">
                    <h3>Síguenos en nuestras redes sociales:</h3>
                    <a href="https://www.youtube.com/@kujipyoficial8421"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/kujipy"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://open.spotify.com/intl-es/artist/3tDuuuTkPprgYHtL7QsvXs?si=3TNj5zmNSXmqsO4mMHPwiQ" className="spotify social">
                        <FontAwesomeIcon icon={faSpotify} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/kujipy"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            
                <h5>
                    ¡No olvides dejar tu like en nuestra página de facebook!
                </h5>
            </div>
        )
    }
    return (
        <div className='Content'>
            <div className="Events-new">
                {contact()}
            </div>
        </div>
    )
}

export default Hiring