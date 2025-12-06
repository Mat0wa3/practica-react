"use client"

import { useState } from "react"

export default function ResumePage() {
  const [newSkill, setNewSkill] = useState("")
  const [skills, setSkills] = useState([
    "Java",
    "Kotlin",
    "Angular",
    "CSS3",
    "ExpressJS",
    "Git",
    "Trabajo en equipo",
    "Ingles B2+",
    "SpringBoot",
    "AstroJS",
    "React",
    "JavaScript",
    "Hono",
    "Github",
    "Resolución de problemas",
    "JavaWeb",
    "VueJS",
    "HTML5",
    "NodeJS",
    "TailwindCSS",
    "Git Flow",
    "Liderazgo",
  ])

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-8 py-12">
        {/* Header */}
        <header className="border-b border-gray-900 pb-6">
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">Mateo López Muñoz</h1>
          <p className="text-center text-sm text-gray-700">
            Bello, Colombia ·{" "}
            <a href="https://mat-porfolio.netlify.app" className="text-blue-600 hover:underline">
              mat-porfolio.netlify.app
            </a>{" "}
            · +573042333522 ·{" "}
            <a href="mailto:mmateo1804@gmail.com" className="text-blue-600 hover:underline">
              mmateo1804@gmail.com
            </a>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mt-8">
          <p className="text-sm leading-relaxed text-gray-800">
            Desarrollador web con formación en Análisis y Desarrollo de Software, con experiencia liderando equipos de
            desarrollo freelance. Me motiva la resolución de problemas mediante código, la creación de interfaces
            accesibles y con impacto visual. Busco un balance entre mi parte técnica y creativa para aportar soluciones
            accesibles, eficientes, escalables y en equipo.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-900 pb-2">Experiencia Profesional</h2>

          {/* Job 1 */}
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-bold text-gray-900">Freelance Developer - Nails-top</h3>
              <span className="text-sm text-gray-700 whitespace-nowrap">Abril de 2023 - febrero de 2024</span>
            </div>
            <p className="mt-2 text-sm text-gray-800">Sistema de agendamiento de citas para un spa de uñas</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-gray-800">
              <li>
                Diseño e implementación del sistema de reservas online accesible para sus clientes con el uso de AstroJS
                y mongoDB, se logró con el sistema un flujo del 40% más veloz en el agendamiento de una cita y ejecución
                de la misma.
              </li>
              <li>
                Automatización de varios procesos que anteriormente se gestionaban a lápiz y papel o documentos
                escritos.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-bold text-gray-900">Freelance Developer - RPGConstruivianas SAS</h3>
              <span className="text-sm text-gray-700 whitespace-nowrap">Febrero de 2024 – Marzo de 2025</span>
            </div>
            <p className="mt-2 text-sm text-gray-800">Landing page y portafolio corporativo</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-gray-800">
              <li>Desarrollo desde cero con HTML5, CSS3 y JavaScript vanilla.</li>
              <li>
                Diseño minimalista y accesible que mejoró exponencialmente el alcance de la empresa llegando a nuevos
                clientes.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-900 pb-2">Educación</h2>

          {/* Education 1 */}
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-bold text-gray-900">Servicio nacional de aprendizaje - SENA</h3>
              <span className="text-sm text-gray-700 whitespace-nowrap">Medellin, Colombia</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">Técnica en programación</p>
            <p className="text-sm text-gray-700 text-right">Diciembre 2022</p>
            <p className="mt-2 text-sm text-gray-800">
              Reconocimiento de honor por la resolución de problemas con código, reconocimiento por liderazgo de equipos
              de trabajo y excelencia académica.
            </p>
          </div>

          {/* Education 2 */}
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-bold text-gray-900">Servicio nacional de aprendizaje - SENA</h3>
              <span className="text-sm text-gray-700 whitespace-nowrap">Medellin, Colombia</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">Tecnología en Análisis y Desarrollo de Software</p>
            <p className="text-sm text-gray-700 text-right">En proceso</p>
            <p className="mt-2 text-sm text-gray-800">
              Reconocimiento por gran desempeño académico, sentido de pertenencia y compañerismo
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-900 pb-2">Habilidades</h2>

          {/* Add Skill Input */}
          <div className="mt-6 flex items-center gap-3">
            <input
              type="text"
              placeholder="Nueva habilidad"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddSkill()
                }
              }}
              className="max-w-xs border-gray-300 p-2 border rounded-md"
            />
            <button className="flex h-5 w-5 items-center justify-center rounded bg-green-50 cursor-pointer" onClick={handleAddSkill}>
              ✅
            </button>
          </div>

          {/* Skills List */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm text-gray-900">{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                  aria-label={`Remove ${skill}`}
                  title="Borrar habilidad"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
