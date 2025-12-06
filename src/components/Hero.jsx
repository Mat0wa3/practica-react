export default function Hero() {
    return (
        <>
            <main>
                <section className="flex flex-col gap-2 mt-2">
                    <h1 className="font-bold text-xl">Experiencia Profesional</h1>
                    <hr />
                    <div className="flex flex-col gap-6 p-2">
                        <article>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-lg">Freelance Developer - Nails-top</h2>
                                <p className="underline">Abril de 2023 - febrero de 2024</p>
                            </div>
                            <p>Sistema de agendamiento de citas para un spa de uñas</p>
                            <ul className="ml-5 list-disc">
                                <li>
                                    Diseño e implementación del sistema de reservas online accesible para sus clientes con el uso de AstroJs y mongoDB, se logró con el sistema un flujo del 40% más veloz en el agendamiento de una cita y ejecución de la misma.
                                </li>
                                <li>
                                    Automatización de varios procesos que anteriormente se gestionaban a lápiz y papel o documentos escritos.
                                </li>
                            </ul>
                        </article>
                        <article>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-lg">Freelance Developer - RPGConstrulivianas SAS</h2>
                                <p className="underline">Febrero de 2024 – Marzo de 2025</p>
                            </div>
                            <p>Landing page y portafolio corporativo</p>
                            <ul className="ml-5 list-disc">
                                <li>
                                    Desarrollo desde cero con HTML5, CSS3 y JavaScript vanilla.
                                </li>
                                <li>
                                    Diseño minimalista y accesible que mejoró exponencialmente el alcance de la empresa llegando a nuevos clientes.
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
                <section className="flex flex-col mt-2">
                    <h2 className="font-bold text-xl">Educación</h2>
                    <hr />
                    <div className="flex flex-col gap-4 p-2">
                        <article>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-lg">Servicio nacional de aprendizaje - SENA</h2>
                                <p className="flex flex-col items-end"><strong className="underline">Medellín, Colombia </strong><span>Diciembre 2022</span></p>
                            </div>
                            <h3 className="font-bold">Técnica en programación</h3>
                            <p>
                                Reconocimiento de honor por la resolución de problemas con código, reconocimiento por liderazgo de equipos de trabajo y excelencia académica.
                            </p>
                        </article>
                        <article>
                            <div className="flex justify-between">
                                <h2 className="font-bold text-lg">Servicio nacional de aprendizaje - SENA</h2>
                                <p className="flex flex-col items-end"><strong className="underline">Medellín, Colombia </strong><span>En proceso</span></p>
                            </div>
                            <h3 className="font-bold">Tecnología en Análisis y Desarrollo de Software</h3>
                            <p>
                                Reconocimiento por gran desempeño académico, sentido de pertenencia y compañerismo
                            </p>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}