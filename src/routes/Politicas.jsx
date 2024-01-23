import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatButton } from 'antd';
import '../css/Terminos.css';
import { ScrollToTop } from '../components/ScrollToTop';
import { Link } from 'react-router-dom';

export function Politicas() {
    return (
        <>
            <Header />
            <div className="containerrr">
                <ScrollToTop />
                <h2>Política de privacidad</h2>
                <p>El responsable de la recopilación y procesamiento de sus datos personales es el profesor:
                    José Francisco Quijano Acosta. Nuestra organización se compromete a proteger y respetar su
                    privacidad y a cumplir con todas las leyes y regulaciones aplicables en relación con sus
                    datos personales.</p>

                <h3>Domicilio</h3>
                <p>Calle La cruz, sin número, Ámaxac, Huazalingo, Hidalgo C.P.43075.
                </p>

                <h3>Responsabilidad</h3>
                <p>Las escuelas primarias en la zona 012 reconocen su responsabilidad en la recopilación de datos personales de
                    estudiantes y su uso en el contexto de la gestión de registros. La recopilación de estos datos se realiza con el
                    propósito de mejorar la eficiencia de las operaciones administrativas y académicas en las escuelas y brindar un
                    sólido apoyo a la comunidad educativa.</p>
                <p>El uso de los datos personales se limita estrictamente a los fines educativos y administrativos pertinentes, y se
                    toman medidas adecuadas para proteger la privacidad y la seguridad de la información. Esto incluye salvaguardar
                    los datos contra el acceso no autorizado, la pérdida, la divulgación o la alteración indebida.</p>
                <p>Nos comprometemos a cumplir con todas las leyes y regulaciones aplicables en materia de protección de datos
                    personales y a mantener la confidencialidad y seguridad de la información que recabamos. Los datos personales se
                    utilizarán únicamente para los fines previamente mencionados y no se compartirán con terceros sin su
                    consentimiento expreso. Si tiene alguna pregunta o inquietud relacionada con la recopilación, uso o protección
                    de sus datos personales, no dude en ponerse en contacto con nosotros.</p>


                <h3>¿Con qué fines emplearemos su información personal?</h3>
                <p>Los datos personales que solicitamos los utilizaremos para las siguientes finalidades:</p>


                <table style={{ border: '1px solid #dee2e6', width: '100%' }} className="table table-bordered">
                    {/* Encabezados de columna */}
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ border: '1px solid #dee2e6' }}>Finalidad</th>
                            <th style={{ border: '1px solid #dee2e6' }}>¿Requieren consentimiento del titular?</th>
                        </tr>
                    </thead>
                    {/* Datos de la tabla */}
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #dee2e6' }}>Facilitar la toma de decisiones educativas a nivel escolar o
                                del distrito al ayudar a determinar la prioridad de asignar recursos para abordar problemas
                                específicos y mejorar la gestión educativa.</td>
                            <td style={{ border: '1px solid #dee2e6' }}>No</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #dee2e6' }}>Llevar un registro del progreso académico de los alumnos,
                                incluyendo calificaciones, asistencia, y desempeño en exámenes. Esto permite evaluar el rendimiento
                                estudiantil y proporcionar retroalimentación educativa.</td>
                            <td style={{ border: '1px solid #dee2e6' }}>No</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #dee2e6' }}>Garantizar la seguridad de los alumnos y el personal, para
                                responder adecuadamente en situaciones de emergencia.</td>
                            <td style={{ border: '1px solid #dee2e6' }}>No</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #dee2e6' }}>Identificar a alumnos que puedan necesitar apoyo adicional o
                                programas de tutoría, ayudando así a mejorar el aprendizaje individual.</td>
                            <td style={{ border: '1px solid #dee2e6' }}>Si</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Datos personales que se recaban</h3>
                <p>Datos personales comunes (maestros, alumnos, padres de familia o tutores legales):</p>
                <ol>
                    <li>Nombres y apellidos.</li>
                    <li>Fecha de nacimiento.</li>
                    <li>Domicilio.</li>
                </ol>

                <p>Datos específicos (maestros):</p>
                <ol>
                    <li>Título académico y certificaciones.</li><br></br>
                    <li>Historial de empleo anterior (en algunos casos).</li><br></br>
                    <li>Números de teléfono de contacto.</li><br></br>
                    <li>Direcciones de correo electrónico.</li><br></br>
                </ol>


                <p>Datos específicos (alumnos):</p>
                <ol>
                    <li>Nombres de los padres o tutores legales.</li><br></br>
                    <li>Números de teléfono de contacto de los padres o tutores.</li><br></br>
                    <li>Información médica relevante (alergias, condiciones médicas especiales, medicamentos).</li><br></br>
                    <li>Registros académicos.</li><br></br>
                </ol>


                <p>Datos específicos (padres de familia o tutores legales):</p>
                <ol>
                    <li>Información sobre el alumno (si es relevante para la comunicación con la escuela).</li>

                </ol>
                <p>La recopilación y el uso de estos datos personales se llevan a cabo de conformidad con las leyes y regulaciones
                    de privacidad vigentes, que pueden incluir la Ley Federal de Protección de Datos Personales en Posesión de los
                    Particulares, la Ley General de Protección de Datos Personales en posesión de Sujetos Obligados y otras
                    regulaciones aplicables.</p>

                <p>Nos comprometemos a proteger la confidencialidad y seguridad de sus datos personales, así como a utilizarlos
                    únicamente para los fines educativos y administrativos pertinentes.</p>
                <h3>Su información y sus derechos</h3>
                <p>Los usuarios tienen varios derechos en relación con sus datos personales en una plataforma. En primer lugar,
                    tienen derecho a acceder a sus datos personales y verificar su exactitud. Esto implica que la plataforma debe
                    proporcionar un medio para que los usuarios puedan acceder a sus datos. En segundo lugar, si los usuarios
                    encuentran que sus datos personales son inexactos o incompletos, tienen derecho a solicitar su corrección. La
                    plataforma también debe ofrecer un medio para que los usuarios puedan solicitar la rectificación de sus datos
                    personales. En tercer lugar, los usuarios tienen derecho a solicitar la cancelación de sus datos personales en
                    la plataforma. La plataforma debe proporcionar un medio para que los usuarios puedan solicitar la cancelación de
                    sus datos. Por último, los usuarios tienen derecho a oponerse al tratamiento de sus datos personales en la
                    plataforma. La plataforma debe ofrecer un medio para que los usuarios puedan expresar su oposición al
                    tratamiento de sus datos personales. Estos derechos están respaldados por leyes y regulaciones de protección de
                    datos.</p>

                <h3>Contacto</h3>
                <p>Para llevar a cabo cualquier procedimiento relacionado con los derechos ARCO (Acceso, Rectificación, Cancelación
                    u Oposición de datos personales), ponemos a tu disposición la siguiente información de contacto:</p>
                <ul>
                    <li>Domicilio: Calle La cruz, sin número, Ámaxac, Huazalingo, Hidalgo C.P.43075.</li><br></br>
                    <li>Teléfono: 7711913179</li><br></br>
                    <li>Correo electrónico: zona012huazalingo@mail.com</li><br></br>
                </ul>
                <p>Además, te invitamos a visitar nuestra página de Internet, donde encontrarás más información sobre cómo ejercer
                    tus derechos ARCO y los formularios correspondientes. Nuestra dirección electrónica es:
                    <Link to="/" className="custom-color"> Visitar</Link>
                </p>


                <h3>¿Con quiénes compartiremos su información personal y con qué propósitos lo haremos?</h3>
                <p>La información recopilada, que incluye datos personales de maestros, alumnos y padres de familia o tutores
                    legales, puede ser compartida con el propósito de facilitar la gestión educativa y administrativa de las
                    escuelas primarias bilingües. Los tipos de destinatarios de estas transferencias pueden incluir, pero no se
                    limitan a, personal administrativo, docentes, autoridades escolares y proveedores de servicios educativos. Estas
                    transferencias se llevan a cabo con el objetivo de lograr las siguientes finalidades:</p>

                <ol>
                    <li>Administración académica.</li>
                    <li>Seguimiento de la salud y bienestar de los estudiantes.</li>
                </ol>

                <p>Es importante destacar que, a menos que los interesados manifiesten oposición expresa, los datos personales
                    podrán ser transferidos según lo descrito anteriormente. Los interesados tienen el derecho de oponerse a estas
                    transferencias en cualquier momento, y se respetará y atenderá dichas solicitudes en la medida que lo permita la
                    legislación aplicable y las necesidades operativas.</p>


                <h3>¿Cuáles son las implicaciones o consecuencias si decido no autorizar la transferencia de mi información
                    personal?</h3>
                <p>En caso de que los interesados no autoricen la transferencia de sus datos personales en los términos que señala
                    el presente aviso de privacidad, se compromete a seguir los términos y restricciones establecidos en este aviso
                    de privacidad y a tomar las medidas necesarias para garantizar que los datos personales se manejen de acuerdo
                    con las preferencias expresadas por los interesados.</p>


                <p>Los interesados tienen el derecho de manifestar su consentimiento o su negativa a la transferencia de sus datos
                    personales, y esta preferencia será respetada en cumplimiento con las regulaciones de privacidad aplicables.</p>

                <h3>
                    Autorización de promoción o comunicación
                </h3>

                <p>Si en algún momento los interesados desean dejar de recibir mensajes promocionales o comunicaciones de marketing
                    por parte de la escuela primaria bilingüe, pueden solicitarlo a través de los siguientes medios de contacto:</p>

                <ul>
                    <li>Domicilio: Calle La cruz, sin número, Ámaxac, Huazalingo, Hidalgo C.P.43075.</li><br></br>
                    <li>Teléfono: 7711913179</li><br></br>
                    <li>Correo electrónico: zona012huazalingo@mail.com</li><br></br>
                </ul>
                <p>Se compromete a atender estas solicitudes de manera oportuna y a garantizar que los interesados no reciban
                    futuras comunicaciones promocionales, de acuerdo con sus preferencias.
                </p>

                <h3>Cambios al aviso de privacidad</h3>
                <p>Cualquier modificación a este aviso de privacidad estará disponible para su consulta en
                    <Link to="/" className="custom-color">Visitar</Link>, que puede ser la página web oficial o cualquier
                    otro medio de comunicación oficial de la institución. Se recomienda a los interesados revisar periódicamente
                    este aviso de privacidad para estar al tanto de las actualizaciones y cambios que puedan afectar la gestión de
                    datos personales.
                </p>

                <br></br>
                <p class="derecha">Fecha de última actualización: 14 de noviembre del 2023</p>

            </div>
            <FloatButton.BackTop />
            <Footer />
        </>
    )

}