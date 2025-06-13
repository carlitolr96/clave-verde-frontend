import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import TitleSection from '../components/TitleSection';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPolicies() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    }, [controls]);

    const sections = [
        { id: 'responsable', label: 'Responsable' },
        { id: 'recopilacion', label: 'Recopilación de Datos' },
        { id: 'finalidad', label: 'Finalidad' },
        { id: 'enlaces-terceros', label: 'Enlaces a Terceros' },
        { id: 'control', label: 'Control de Información' },
    ];

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-24 px-4 md:px-16 lg:px-28 gap-12 mb-12">
                <motion.div
                    className="w-full max-w-5xl text-gray-800 leading-relaxed space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                >
                    <Breadcrumb />
                    <TitleSection
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                        title="Política de Privacidad"
                        subTitle="Lee cómo protegemos y usamos tus datos personales en Clave Verde."
                    />

                    <section id="responsable">
                        <h2 className="text-xl font-semibold">Responsable</h2>
                        <p>
                            El Responsable del tratamiento de los datos es: <strong>Clave Verde, S.R.L.</strong> Calle Luna, La Barbacoa, Las Terrenas, Samaná, República Dominicana. A 10 minutos de Las Terrenas. <br />
                            <strong>Email:</strong> contacto@claveverde.com <br />
                            <strong>Teléfono:</strong> (+1) 849-205-1146
                        </p>
                    </section>

                    <section id="recopilacion">
                        <h2 className="text-xl font-semibold">De la política de privacidad</h2>
                        <p>
                            Clave Verde se compromete a la seguridad de los datos de sus usuarios. Esta política puede actualizarse, por lo que se recomienda revisarla periódicamente.
                        </p>
                    </section>

                    <section id="finalidad">
                        <h2 className="text-xl font-semibold">Información que es recogida</h2>
                        <p>
                            Podemos recoger información como nombre, email, información demográfica o de contacto, y más si es necesario para pedidos o facturación.
                        </p>
                        <h3 className="mt-4 font-semibold">Uso y finalidad de la información recogida</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Atender consultas y solicitudes.</li>
                            <li>Enviar información y promociones (con consentimiento).</li>
                            <li>Gestionar solicitudes de empleo.</li>
                            <li>Proveer contenido solicitado en chatbot.</li>
                            <li>Permitir la participación en actividades y descargas gratuitas.</li>
                            <li>Comunicar datos a terceros del sector, si el usuario lo acepta.</li>
                        </ul>
                    </section>

                    <section id="enlaces-terceros">
                        <h2 className="text-xl font-semibold">Enlaces a Terceros</h2>
                        <p>
                            Este sitio puede contener enlaces a sitios de terceros. Clave Verde no se hace responsable por el tratamiento de datos fuera de nuestro sitio.
                        </p>
                    </section>

                    <section id="control">
                        <h2 className="text-xl font-semibold">Control de su información personal</h2>
                        <p>
                            Puedes restringir la recopilación o uso de tus datos en cualquier momento. Clave Verde no vende ni comparte tu información sin consentimiento, salvo orden judicial.
                        </p>
                    </section>
                </motion.div>

                {/* Aside contenido de navegación */}
                <aside
                    className="
                        bg-white w-full lg:w-80 border border-gray-300 text-gray-600 rounded-lg shadow-lg p-6
                        sticky top-24
                        h-max
                        max-lg:static max-lg:mt-8 max-lg:w-full
                    "
                >
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
