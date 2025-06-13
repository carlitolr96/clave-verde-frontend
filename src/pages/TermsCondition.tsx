import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import TitleSection from '../components/TitleSection';
import Breadcrumb from '../components/Breadcrumb';

export default function TerminosCondiciones() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    }, [controls]);

    const sections = [
        { id: 'uso-servicio', label: 'Uso del Servicio y Edad Mínima' },
        { id: 'condiciones-generales', label: 'Condiciones Generales' },
        { id: 'precision-informacion', label: 'Precisión de la Información' },
        { id: 'modificaciones-precios', label: 'Modificaciones y Precios' },
        { id: 'productos-servicios', label: 'Productos y Servicios' },
        { id: 'facturacion-cuenta', label: 'Facturación y Cuenta' },
        { id: 'herramientas-terceros', label: 'Herramientas y Enlaces de Terceros' },
        { id: 'comentarios-usuario', label: 'Comentarios de Usuario' },
        { id: 'errores-omisiones', label: 'Errores y Omisiones' },
        { id: 'usos-prohibidos', label: 'Usos Prohibidos' },
        { id: 'exclusion-garantias', label: 'Exclusión de Garantías y Limitación de Responsabilidad' },
        { id: 'indemnizacion', label: 'Indemnización' },
        { id: 'ley-aplicable', label: 'Ley Aplicable' },
        { id: 'cambios-terminos', label: 'Cambios en los Términos de Servicio' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-20 md:pt-20 px-4 md:px-16 lg:px-28 gap-8 mb-12">
                <motion.div
                    className="w-full lg:max-w-[60%] text-gray-800 leading-relaxed space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                >
                    <Breadcrumb />
                    <TitleSection
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                        title="Términos y Condiciones"
                        subTitle="Por favor lee atentamente los términos que rigen el uso de nuestro sitio."
                    />

                    <section id="uso-servicio">
                        <h2 className="text-xl font-semibold">Uso del Servicio y Edad Mínima</h2>
                        <p>Debes tener la mayoría de edad en tu estado o provincia de residencia para usar este sitio, o tener la mayoría de edad y dar consentimiento para que tus dependientes menores lo usen.</p>
                        <p>No puedes usar los productos o el servicio para fines ilegales o no autorizados, ni violar ninguna ley en tu jurisdicción (incluyendo derechos de autor).</p>
                        <p>Está prohibido transmitir virus o código destructivo.</p>
                        <p>El incumplimiento de estos términos resultará en la terminación inmediata de tus servicios.</p>
                    </section>

                    <section id="condiciones-generales">
                        <h2 className="text-xl font-semibold">Condiciones Generales</h2>
                        <p>Nos reservamos el derecho de rechazar el servicio a cualquier persona, por cualquier motivo y en cualquier momento.</p>
                        <p>Tu contenido (excepto la información de tarjeta de crédito) puede ser transferido sin encriptar, pero la información de tarjetas de crédito siempre se encripta.</p>
                        <p>No puedes reproducir, duplicar, copiar, vender o explotar ninguna parte del servicio sin nuestro permiso explícito por escrito.</p>
                    </section>

                    <section id="precision-informacion">
                        <h2 className="text-xl font-semibold">Precisión de la Información</h2>
                        <p>No nos hacemos responsables si la información en el sitio no es exacta, completa o actual. La información es para referencia general y no debe ser la única base para tomar decisiones.</p>
                        <p>La información histórica no es necesariamente actual. Nos reservamos el derecho de modificar el contenido del sitio en cualquier momento, y es tu responsabilidad monitorear los cambios.</p>
                    </section>

                    <section id="modificaciones-precios">
                        <h2 className="text-xl font-semibold">Modificaciones y Precios</h2>
                        <p>Los precios de los productos están sujetos a cambios sin previo aviso.</p>
                        <p>Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso y no seremos responsables por ello.</p>
                    </section>

                    <section id="productos-servicios">
                        <h2 className="text-xl font-semibold">Productos y Servicios</h2>
                        <p>Ciertos productos o servicios pueden estar disponibles exclusivamente en línea y pueden tener cantidades limitadas.</p>
                        <p>Hacemos lo posible por mostrar los colores de los productos con precisión, pero no podemos garantizar la exactitud de tu monitor.</p>
                        <p>Nos reservamos el derecho de limitar la venta de productos o servicios a cualquier persona, región o jurisdicción, y de limitar las cantidades.</p>
                        <p>Todas las descripciones y precios de productos están sujetos a cambios sin previo aviso, y podemos descontinuar cualquier producto en cualquier momento.</p>
                        <p>No garantizamos que la calidad de los productos o servicios cumpla tus expectativas, ni que los errores en el servicio serán corregidos.</p>
                    </section>

                    <section id="facturacion-cuenta">
                        <h2 className="text-xl font-semibold">Facturación y Cuenta</h2>
                        <p>Nos reservamos el derecho de rechazar o cancelar cualquier pedido a nuestra discreción.</p>
                        <p>Te comprometes a proporcionar información de compra y cuenta actual, completa y precisa, y a actualizarla rápidamente.</p>
                    </section>

                    <section id="herramientas-terceros">
                        <h2 className="text-xl font-semibold">Herramientas y Enlaces de Terceros</h2>
                        <p>Podemos proporcionar acceso a herramientas de terceros "tal cual" y "según disponibilidad", sin garantías ni respaldo. Su uso es bajo tu propio riesgo.</p>
                        <p>Los enlaces a sitios web de terceros no están afiliados con nosotros, y no somos responsables de su contenido, exactitud o cualquier daño relacionado con transacciones con ellos.</p>
                    </section>

                    <section id="comentarios-usuario">
                        <h2 className="text-xl font-semibold">Comentarios de Usuario</h2>
                        <p>Cualquier comentario, sugerencia o material que nos envíes puede ser editado, copiado, publicado, distribuido o utilizado por nosotros sin restricción y sin obligación de confidencialidad o compensación.</p>
                        <p>Podemos monitorear, editar o remover contenido que consideremos ilegítimo, ofensivo, o que viole la propiedad intelectual o estos Términos de Servicio.</p>
                        <p>Eres el único responsable de tus comentarios y su precisión.</p>
                    </section>

                    <section id="errores-omisiones">
                        <h2 className="text-xl font-semibold">Errores y Omisiones</h2>
                        <p>Puede haber errores tipográficos, inexactitudes u omisiones en el sitio. Nos reservamos el derecho de corregirlos y cambiar o actualizar la información o cancelar pedidos sin previo aviso.</p>
                    </section>

                    <section id="usos-prohibidos">
                        <h2 className="text-xl font-semibold">Usos Prohibidos</h2>
                        <p>Se prohíbe el uso del sitio o su contenido para fines ilegales, infringir derechos de propiedad intelectual, acosar, presentar información falsa, cargar virus, recopilar información personal de otros, generar spam, o interferir con la seguridad del servicio. El incumplimiento puede llevar a la suspensión de tu uso del servicio.</p>
                    </section>

                    <section id="exclusion-garantias">
                        <h2 className="text-xl font-semibold">Exclusión de Garantías y Limitación de Responsabilidad</h2>
                        <p>No garantizamos que el uso del servicio será ininterrumpido, puntual, seguro o libre de errores, ni que los resultados serán exactos o confiables.</p>
                        <p>El servicio y los productos se proporcionan "tal cual" y "según esté disponible", sin garantías de ningún tipo.</p>
                        <p>Clave Verde, sus directores, empleados, afiliados, etc., no serán responsables por daños, pérdidas o reclamos directos, indirectos o consecuentes derivados del uso del servicio o productos.</p>
                    </section>

                    <section id="indemnizacion">
                        <h2 className="text-xl font-semibold">Indemnización</h2>
                        <p>Aceptas indemnizar y eximir de responsabilidad a Clave Verde por cualquier reclamo o demanda, incluyendo honorarios de abogados, debido a tu incumplimiento de los Términos de Servicio o violación de cualquier ley o derechos de terceros.</p>
                    </section>

                    <section id="ley-aplicable">
                        <h2 className="text-xl font-semibold">Ley Aplicable</h2>
                        <p>Estos Términos de Servicio se regirán e interpretarán de conformidad con las leyes de la República Dominicana.</p>
                    </section>

                    <section id="cambios-terminos">
                        <h2 className="text-xl font-semibold">Cambios en los Términos de Servicio</h2>
                        <p>Nos reservamos el derecho de actualizar, modificar o reemplazar cualquier parte de estos Términos mediante la publicación de los cambios en nuestro sitio web. Es tu responsabilidad revisar el sitio periódicamente.</p>
                    </section>

                    <section id="contacto">
                        <h2 className="text-xl font-semibold">Contacto</h2>
                        <p>Las preguntas sobre los Términos de Servicio deben enviarse a Clave Verde por correo.</p>
                    </section>
                </motion.div>

                <aside className="bg-white w-full lg:w-80 border border-gray-300 text-gray-600 rounded-lg shadow-lg p-6
                        sticky top-24
                        h-max
                        max-lg:static max-lg:mt-8 max-lg:w-full">
                    <h3 className="text-lg font-medium mb-4">Contenido</h3>
                    <ul className="space-y-2 text-sm">
                        {sections.map(({ id, label }) => (
                            <li key={id} className="cursor-pointer hover:text-green-600 transition-colors duration-200">
                                <ScrollLink
                                    to={id}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    activeClass="text-green-700 font-semibold"
                                >
                                    {label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
}
