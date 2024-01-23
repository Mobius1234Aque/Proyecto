import React from 'react';

import { Header } from '../components/Header';

import { Footer } from "../components/Footer";

import { FloatButton } from 'antd';

import { ScrollToTop } from '../components/ScrollToTop';

import '../css/Terminos.css'

export function Terminos() {
    return(
    
        <>

        <Header></Header>

        <div className="containerrr">
        <ScrollToTop />
            <h2>Términos y Condiciones</h2>

            <h3>Información Relevante</h3>

            <p>La entidad que proporciona los servicios descritos en estos términos </p>


            <table style={{ border: '1px solid #dee2e6' , width: '100%' }} className="table table-bordered">


                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Nombre de la empresa:</td>
                        <td style={{ border: '1px solid #dee2e6' }}>Zona escolar 012 Sector 01</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Giro de la empresa:</td>
                        <td style={{ border: '1px solid #dee2e6' }}>Educativo</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Encargado de la zona:</td>
                        <td style={{ border: '1px solid #dee2e6' }}>Mtro. José Francisco Quijano Acosta </td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Cargo del encargado: </td>
                        <td style={{ border: '1px solid #dee2e6' }}>Supervisor</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Número telefónico: </td>
                        <td style={{ border: '1px solid #dee2e6' }}>+52 1 771 149 9741</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #dee2e6' }}>Dirección: </td>
                        <td style={{ border: '1px solid #dee2e6' }}>Huazalingo Hidalgo</td>
                    </tr>
                </tbody>
            </table>

            <p>Nuestro servicio se enfoca en la implementación de un sistema integral de administración para zonas escolares,
                abordando los desafíos de gestión educativa. A través de un enfoque interdisciplinario que combina diversas
                disciplinas, como matemáticas, desarrollo de proyectos, tecnología de la información, seguridad informática,
                entre otras, nuestro sistema busca mejorar la eficiencia en la administración escolar.</p>
            <p>Facilitamos el acceso a información relevante, mejorando la toma de decisiones y promoviendo la transparencia en
                la gestión de recursos y datos. Más allá de la implementación tecnológica, nuestro servicio fomenta un
                aprendizaje proactivo, brindando conocimientos administrativos y de desarrollo. Preparamos a las instituciones
                educativas para un entorno profesional dinámico y colaborativo, optimizando procesos y beneficiando a toda la
                comunidad educativa.</p>


            <h3>Asignación de riesgos, responsabilidad y descargos de responsabilidad (RNF10)</h3>

            <p>En nuestro compromiso continuo con la transparencia y la claridad, reconocemos la importancia de abordar de
                manera explícita la asignación de riesgos y responsabilidades en el contexto de la prestación de servicios
                educativos. Aunque nuestras políticas actuales no incluyen una sección dedicada a este tema, entendemos la
                relevancia de proporcionar información detallada sobre la limitación de responsabilidad en situaciones
                imprevistas. Nos comprometemos a describir claramente los límites de responsabilidad de nuestra institución
                educativa en casos de eventos imprevistos o situaciones fuera de nuestro control.</p>


            <p>Nuestra plataforma se ha diseñado con el objetivo principal de proporcionar a el personal educativo una
                experiencia integral y efectiva. Describimos cualquier funcionalidad relacionada con el soporte administrativo,
                como procesos de matrícula, gestión de horarios y acceso a información institucional relevante, además de las
                medidas de seguridad implementadas para proteger la privacidad de los datos de estudiantes y padres, asegurando
                un entorno digital seguro y confiable.</p>

            <h3>Información de seguridad</h3>
            <p>En nuestra plataforma educativa, la seguridad y la protección de la privacidad son fundamentales. Hemos
                implementado diversas medidas para garantizar un entorno digital seguro y confiable para todos nuestros
                usuarios. A continuación, proporcionamos detalles sobre las medidas de seguridad y brindamos instrucciones para
                el uso adecuado de nuestros servicios.</p>
            <p>Utilizamos tecnologías avanzadas de protección de datos para salvaguardar la información personal de estudiantes,
                padres y personal educativo. Todos los datos se almacenan de manera segura y se accede a ellos de forma
                controlada. Fomentamos la colaboración de la comunidad educativa al proporcionar un canal claro para informar
                cualquier problema de seguridad que se pueda identificar. Los usuarios pueden utilizar [enlace a la página de
                informes] para notificar cualquier preocupación.</p>
            <p>Nos comprometemos a proporcionar un entorno educativo en línea seguro y enriquecedor para todos nuestros
                usuarios. La transparencia y la colaboración son esenciales para mantener la integridad y la confianza en
                nuestra plataforma educativa.</p>



            <h3>Derechos de uso</h3>
            <p>Ofrecemos un sistema integral de administración para zonas escolares, fusionando disciplinas como matemáticas,
                desarrollo de proyectos, tecnología de la información, y seguridad informática. Nuestra solución mejora la
                eficiencia administrativa, facilita el acceso a información clave, y promueve la transparencia en la gestión
                educativa.</p>
            <p>Al adoptar nuestro servicio, las instituciones educativas obtienen derechos de uso claros y específicos sobre la
                plataforma. Este acceso no solo optimiza la administración escolar, sino que también prepara a los usuarios para
                un entorno profesional dinámico y colaborativo.</p>

            <h3>Propiedad intelectual</h3>
            <p>En cuanto a la propiedad intelectual, todos los derechos sobre la plataforma y sus contenidos pertenecen a la
                Zona 012. La adopción de nuestro servicio otorga a las instituciones educativas el derecho de uso exclusivo,
                optimizando la administración escolar y preparando a los usuarios para un entorno profesional dinámico y
                colaborativo.</p>

            <h3>Marco legal</h3>
            <p>Desde el punto de vista legal, estos servicios se rigen por las leyes y regulaciones vigentes en México. La
                adopción de nuestro sistema no solo optimiza la administración escolar, sino que también asegura un marco legal
                sólido para las instituciones educativas, garantizando la conformidad con las normativas correspondientes.</p>

            <h3>Contacto</h3>
            <p>Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos en:
                zona012huazalingo@gmail.com </p>

        </div>

        <FloatButton.BackTop />

        <Footer></Footer>
        </>
    )
    
}
