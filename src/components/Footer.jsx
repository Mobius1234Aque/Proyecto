import logo from '../img/logo.png'
import { Link } from "react-router-dom";

export function Footer (){

    return(
        <section className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo de la empresa" />
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Si tienes alguna pregunta, ponte en 
                        contacto con nosotros
                    </p>
                    <p>
                        <strong>Correo electrónico</strong>
                        : zona012huazalingo@gmail.com
                    </p>
                    <p>
                        <strong>Teléfono</strong>
                        : +52 771-191-3179
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Enlaces útiles</h3>
                    <p >
                        <Link style={{ color:'white',textDecoration:'none'}} to={"/Terminos"}> - Términos y condiciones</Link>
                    </p>
                    <p >
                        <Link style={{ color:'white',textDecoration:'none'}} to={"/Politicas"}> - Política de privacidad</Link>
                    </p>
                    <p >
                        <Link style={{ color:'white',textDecoration:'none'}} to={"/Cookies"}>- Política de Cookies</Link>
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Síguenos en redes sociales</h3>
                    <p >
                        <Link style={{ color:'white',textDecoration:'none'}} to={"https://www.facebook.com/reynadelosangele/"}>Facebook</Link><br></br>
                        <Link style={{ color:'white',textDecoration:'none'}} to={"/"}>Twitter</Link>
                    </p>

                </div>
    
                <div className="footer-section">
                    <h3>Nuestra Ubicación</h3>
                    <p><strong>Dirección</strong>: Calle Numero 7 Colonia Magisterial, San lucas, Huazalingo</p>
                </div>
            </div>
        </section>
    )
}