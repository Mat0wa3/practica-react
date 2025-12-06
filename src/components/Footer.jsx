import { useState } from "react"

export default function Footer() {
    const [hability, setHability] = useState("");
    const [habilities, setHabilities] = useState([
        { id: 1, text: "Java" },
        { id: 2, text: "SpringBoot" },
        { id: 3, text: "JavaWeb" },
        { id: 4, text: "Kotlin" },
        { id: 5, text: "AstroJS" },
        { id: 6, text: "VueJS" },
        { id: 7, text: "Angular" },
        { id: 8, text: "React" },
        { id: 9, text: "HTML5" },
        { id: 10, text: "CSS3" },
        { id: 11, text: "JavaScript" },
        { id: 12, text: "NodeJS" },
        { id: 13, text: "ExpressJS" },
        { id: 14, text: "Hono" },
        { id: 15, text: "TailwindCSS" },
        { id: 16, text: "Git" },
        { id: 17, text: "Github" },
        { id: 18, text: "Git Flow" },
        { id: 19, text: "Trabajo en equipo" },
        { id: 20, text: "Resolución de problemas" },
        { id: 21, text: "Liderazgo" },
        { id: 22, text: "Ingles B2+" }

    ]);

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            addHability()
        }
    }

    const addHability = () => {
        if (hability.trim() === "") return;

        setHabilities([...habilities, { id: Date.now(), text: hability }]);
        setHability("");
    }

    const deleteHability = (id) => {
        setHabilities(habilities.filter((h) => h.id !== id));
    }
    return (
        <>
            <footer className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Habilidades</h1>
                <hr />
                <div>
                    <input type="text" placeholder="Nueva habilidad" value={hability} onChange={(e) => setHability(e.target.value)} onKeyDown={handleEnter} className="border rounded-md p-2"/>
                    <button onClick={addHability} className="p-2 ml-4 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 hover:shadow-md transition">✅</button>
                    <ul className="p-3 grid grid-cols-3 items-center justify-between w-full list-disc">
                        {habilities.map((h) => (
                            <li key={h.id} className="">
                                {h.text}
                                <button onClick={() => deleteHability(h.id)} className="cursor-pointer hover:scale-110 transition-all hover:shadow-md ml-2" title="Borrar tarea">❌</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
}