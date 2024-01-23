import logo from '../img/logo.png'
import { Link } from "react-router-dom";
import { FaUpload, FaEdit } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";


import { Subtitulo, Titulo, Contenido } from '../components/Titulos';
export function Header() {
    return(
        <div className="barNav">
            <div className="barNav-logo">
                <img src = {logo} alt="Logo para pagina web zona escolar 012" title="Zona escolar 012"/>
            </div>



            <ul className="barNav-menu">


            <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/"}>
                        <Contenido conTit={"Inicio"} />
                        </Link>
                    </span>
                </li>


                <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/Registro"}>
                        <Contenido conTit={"Registro"} />
                        </Link>
                    </span>
                </li>

                
            <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/Login"}>
                         
                        <Contenido conTit={"Login"} />
                        </Link>
                    </span>
                </li>


                 
                
                <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/Preguntas"}>
                        <Contenido conTit={" Preguntas frecuentas"} />
                        </Link>
                    </span>
                </li>
                <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/Quien"}> 
                        <Contenido conTit={"¿Quiénes somos?"} />
                      
                        </Link>
                    </span>
                </li>
               
                <li className="barNav-menu-element">
                    <span className='barNav-text'>
                        <Link className='barNav-text' to={"/Formulario"}>
                        <Contenido conTit={"Formulario"}/>
                        </Link>
                    </span>
                </li>

            </ul>
            
        </div>
    )
    
}