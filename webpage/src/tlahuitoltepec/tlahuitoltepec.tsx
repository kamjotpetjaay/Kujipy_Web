import "./tlahuitoltepec.css"
import zempoal1 from "../assets/tlahui-zempoal.jpg"
import semilleros1 from "../assets/semilleros1.jpg"

const Tlahuitoltepec = () => {
    return (
        <div className='Content'>
            <div className="Title">
                <center><h1>SANTA MARIA TLAHUITOLTEPEC MIXE OAXACA</h1></center>
            </div>
            <div className="Text">
                <h2 className='Description'>Descubre Tlahuitoltepec: Un Centro Cultural Vibrante</h2>
                <h3 className='TextDescription'>
                    Tlahuitoltepec, ubicado en el corazón de Oaxaca, México, es un tesoro de rica herencia indígena y una impresionante belleza natural. Este encantador pueblo, situado en medio de las impresionantes montañas de la Sierra Mixe, es reconocido por su cultura vibrante, artes tradicionales y hospitalidad cálida.
                </h3>

                <h2 className='Description'>Tapiz Cultural:</h2>
                    
                <h3 className='TextDescription'>
                    <img src={semilleros1} id={"semilleros1"} alt={"semilleros creativos"} width={"100%"} ></img>
                    Tlahuitoltepec está habitado principalmente por los indígenas Mixe, conocidos por su idioma único, costumbres, artesanías y tradiciones. El pueblo es un centro de creatividad, con una próspera escena artística que incluye música tradicional, danzas y artesanías. Los visitantes pueden sumergirse en el colorido tapiz de festividades, donde los trajes tradicionales, la música animada y las elaboradas danzas se combinan para mostrar la rica cultura Mixe.
                </h3>
                <h2 className='Description'>Paisajes Asombrosos:</h2>
                
                <h3 className='TextDescription'>
                    <img src={zempoal1} id={"zempoal1"} alt={"cerro del zempatepetl, cempoatepetl, zempoal"} width={"100%"} ></img>
                    Los amantes de la naturaleza encontrarán en Tlahuitoltepec un auténtico deleite. Rodeado de exuberantes montañas y valles verdes, el pueblo ofrece vistas impresionantes y oportunidades para hacer senderismo que permiten explorar la impresionante naturaleza. La región también es conocida por su diversa flora y fauna, brindando una experiencia única de ecoturismo.
                </h3>
                <h2 className='Description'>Espíritu Comunitario:</h2>
                <h3 className='TextDescription'>
                    Tlahuitoltepec se enorgullece de su comunidad unida y su espíritu acogedor. Los visitantes pueden interactuar con los lugareños, aprender sobre sus tradiciones y probar la auténtica cocina Mixe, que refleja los sabores de la región y la importancia cultural de cada platillo.
                </h3>
                <h2 className='Description'>Preservación del Patrimonio:</h2>
                <h3 className='TextDescription'>
                    Los esfuerzos por preservar y promover la herencia indígena de Tlahuitoltepec son evidentes en las iniciativas comunitarias y los centros culturales. Estos esfuerzos buscan asegurar que las antiguas tradiciones y sabiduría de los Mixe continúen prosperando y cautivando a las generaciones futuras.
                </h3>
                <h2 className='Description'>Planifica tu Visita:</h2>
                <h3 className='TextDescription'>
                    Si buscas un destino donde la cultura vibrante se encuentre con la belleza natural, Tlahuitoltepec es una visita obligada. Ya sea que te fascinen las artes, estés ansioso por explorar la naturaleza o simplemente desees una auténtica experiencia cultural, Tlahuitoltepec lo ofrece todo.
                </h3>
                <h3 className='TextDescription'>
                    Descubre la magia de Tlahuitoltepec y permite que su belleza y cultura dejen una huella indeleble en tu alma.                
                </h3>
                <h2 className='Description'>UBICACION</h2>
                <h3 className='TextDescription'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7627.044424849848!2d-96.06205530000001!3d17.0960079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c0e756c8b64ad3%3A0x86b39adaeb5670cc!2sMunicipio%20de%20Santa%20Mar%C3%ADa%20Tlahuitoltepec%20Mixe%20Oaxaca!5e0!3m2!1ses-419!2sde!4v1695656906088!5m2!1ses-419!2sde" width="600" height="450" style={{ border: '0;'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>           
                </h3>
                </div>
        </div>
    )
}

export default Tlahuitoltepec