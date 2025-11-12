import { Lightbulb, Code, Zap, Target } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [titleText, setTitleText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const fullTitle = 'Sobre mí';

  // Intersection Observer para activar typing al entrar en vista
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

  // Efecto de typing para el título (solo cuando es visible)
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id='about' className='min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 bg-secondary'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Lado Izquierdo - Título "Sobre mí" */}
          <div className='flex flex-col items-center'>
            <div className='relative'>
              <h3 className='text-4xl md:text-5xl font-bold flex flex-col items-center gap-4'>
                <Lightbulb className="w-12 h-12 md:w-14 md:h-14 text-accent" />
                <span className='animated-gradient-text font-[Inter] text-center'>
                  {titleText}<span className="animate-pulse text-accent">|</span>
                </span>
              </h3>

              {/* Iconos decorativos */}
              <div className='mt-8 flex gap-6 justify-center'>
                <div className='p-4 bg-primary/50 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-110 cursor-pointer'>
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <div className='p-4 bg-primary/50 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-110 cursor-pointer'>
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div className='p-4 bg-primary/50 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-110 cursor-pointer'>
                  <Target className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Descripción */}
          <div className='space-y-6'>
            <p className='text-gray-300 leading-relaxed text-lg font-light font-[Inter] text-center md:text-left'>
              Soy un <span className='text-accent font-medium'>desarrollador full stack</span> con experiencia en la creación de aplicaciones web modernas y escalables. Me especializo en transformar ideas en soluciones digitales funcionales y elegantes.
            </p>

            <p className='text-gray-300 leading-relaxed text-lg font-light font-[Inter] text-center md:text-left'>
              Trabajo con tecnologías como <span className='text-accent font-medium'>React, Node.js, Python y C#</span>, siempre enfocándome en escribir código limpio, eficiente y mantenible.
            </p>

            <p className='text-gray-300 leading-relaxed text-lg font-light font-[Inter] text-center md:text-left'>
              Me apasiona construir interfaces intuitivas, optimizar procesos y aprender constantemente nuevas tecnologías para ofrecer las mejores soluciones a cada proyecto.
            </p>

            <div className='pt-4 grid grid-cols-2 gap-4'>
              <div className='p-4 bg-primary/30 rounded-lg border border-gray-700'>
                <p className='text-3xl font-bold text-accent mb-1 font-[Inter]'>3+</p>
                <p className='text-sm text-gray-400 font-light font-[Inter]'>Años de experiencia</p>
              </div>
              <div className='p-4 bg-primary/30 rounded-lg border border-gray-700'>
                <p className='text-3xl font-bold text-accent mb-1 font-[Inter]'>10+</p>
                <p className='text-sm text-gray-400 font-light font-[Inter]'>Proyectos completados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            var(--color-gradient1),
            var(--color-accent),
            var(--color-gradient2),
            var(--color-accent),
            var(--color-gradient1)
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-wave 4s ease-in-out infinite;
        }

        @keyframes gradient-wave {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
