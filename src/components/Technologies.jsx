import { Cpu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Technologies() {
    const [titleText, setTitleText] = useState("");
    const [columns, setColumns] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const fullTitle = "Tecnologías";

    const technologies = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ];

    // Intersection Observer para activar typing y animación al entrar en vista
    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]);

    // efecto typing del título (solo cuando es visible)
    useEffect(() => {
        if (!isVisible) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullTitle.length) setTitleText(fullTitle.slice(0, i++));
            else clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [isVisible]);

    // distribución tipo Tetris con rebote
    useEffect(() => {
        if (!isVisible) return;

        const colsCount = 5;
        const cols = Array.from({ length: colsCount }, () => []);
        const heights = Array(colsCount).fill(0);
        const iconSize = 60;

        technologies.forEach((tech, i) => {
            const col = Math.floor(Math.random() * colsCount);
            const delay = Math.random() * 2;
            const duration = 2 + Math.random() * 1; // Reducido de 3.5-5.5s a 2-3s

            const top = heights[col];
            heights[col] += iconSize + 10; // sumo espacio en el stack

            cols[col].push({
                ...tech,
                id: `${col}-${i}`,
                size: iconSize,
                delay,
                duration,
                top,
            });
        });

        setColumns(cols);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    return (
        <section ref={sectionRef} id="technologies" className="min-h-screen flex flex-col justify-center py-12 md:py-24 px-8 bg-primary">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* IZQUIERDA — efecto Tetris */}
                    <div className="relative h-[400px] flex justify-center items-center overflow-hidden">
                        {columns.map((col, i) => (
                            <div key={i} className="relative w-[18%] h-full flex flex-col justify-end items-center">
                                {col.map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="absolute flex justify-center items-center matrix-fall"
                                        style={{
                                            width: `${tech.size}px`,
                                            height: `${tech.size}px`,
                                            animationDelay: `${tech.delay}s`,
                                            animationDuration: `${tech.duration}s`,
                                            bottom: `${tech.top}px`,
                                        }}
                                        title={tech.name}
                                    >
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="w-4/5 h-4/5 object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.25)] hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* DERECHA — texto */}
                    <div className="flex flex-col items-center">
                        <div className="relative text-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-accent flex justify-center items-center gap-4">
                                <Cpu className="w-12 h-12 md:w-14 md:h-14" />
                                <span className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent animate-wave font-[Inter]">
                                    {titleText}
                                    <span className="animate-pulse text-accent">|</span>
                                </span>
                            </h3>

                            <p className="mt-8 text-gray-300 leading-relaxed text-lg font-light max-w-md font-[Inter] text-center">
                                Como desarrollador Full Stack,{" "}
                                <span className="text-accent font-medium">
                                    combino tecnologías del frontend y backend{" "}
                                </span>
                                para crear aplicaciones eficientes y escalables.
                                Trabajo con React, Next.js y TailwindCSS en el frontend, y con Node.js, Express, Python y C# en el backend.
                                Manejo PostgreSQL, MongoDB y MySQL, e integro Docker, Git y GitHub en entornos CI/CD.
                            </p>
                        </div>
                    </div>
                </div>

                {/* estilos */}
                <style jsx>{`
        @keyframes fallWithBounce {
            0% {
                transform: translateY(-250px);
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: translateY(20px);
            }
            70% {
                transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .matrix-fall {
            animation: fallWithBounce ease-out forwards;
          }

          @keyframes wave {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-wave {
            background-size: 200% auto;
            animation: wave 3s ease-in-out infinite;
          }
        `}</style>
            </div>
        </section>
    );
}
