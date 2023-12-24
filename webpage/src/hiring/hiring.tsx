import "./hiring.css"

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
                <p>
                    <b>Facebook:</b> <a href="https://www.facebook.com/kujipy" target="_blank" >kujipy</a>
                </p>

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