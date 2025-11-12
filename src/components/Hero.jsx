import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [userName, setUserName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleTypingComplete, setTitleTypingComplete] = useState(false);

  const fullTitle = 'Nico Rolon';

  const codeSnippets = [
    {
      language: 'JavaScript',
      code: (name) => `function greet(name) {
  console.log(\`Hola ${name || 'visitante'}, ¿cómo estás?\`);
  return true;
}`
    },
    {
      language: 'Python',
      code: (name) => `def greet(name):
    print(f"Hola ${name || 'visitante'}, ¿cómo estás?")
    return True`
    },
    {
      language: 'C#',
      code: (name) => `public bool Greet(string name)
{
    Console.WriteLine($"Hola ${name || 'visitante'}, ¿cómo estás?");
    return true;
}`
    }
  ];

  // Efecto typing para el título
  useEffect(() => {
    let currentChar = 0;
    const typingInterval = setInterval(() => {
      if (currentChar <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentChar));
        currentChar++;
      } else {
        setTitleTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Efecto typing para el código
  useEffect(() => {
    const currentSnippet = codeSnippets[currentCodeIndex];
    const codeText = currentSnippet.code(userName);
    let currentChar = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentChar <= codeText.length) {
          setDisplayedCode(codeText.slice(0, currentChar));
          currentChar++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCodeIndex, isTyping, userName]);

  return (
    <section className='flex flex-col md:flex-row justify-center items-center min-h-screen px-4 md:px-8 lg:px-16 gap-8 py-8'>
      {/* Consola - Lado Izquierdo */}
      <div className='w-full md:w-1/2 max-w-2xl'>
        {/* Input para el nombre */}
        <div className='mb-4'>
          <input
            type='text'
            placeholder='¿Cómo te llamás?'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-mono text-sm'
          />
        </div>

        <div className='bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700'>
          {/* Header de la consola */}
          <div className='bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <span className='ml-3 text-gray-400 text-xs md:text-sm font-mono'>
              {codeSnippets[currentCodeIndex].language}
            </span>
          </div>
          {/* Contenido de la consola */}
          <div className='p-3 md:p-6 h-56 md:h-80 lg:h-96 overflow-auto'>
            <pre className='text-green-400 font-mono text-xs md:text-sm lg:text-base whitespace-pre-wrap break-words' style={{ fontFamily: "'Source Code Pro', monospace" }}>
              <code>{displayedCode}<span className='animate-pulse'>|</span></code>
            </pre>
          </div>
        </div>
      </div>

      {/* Información Personal - Lado Derecho */}
      <div className='w-full md:w-1/2 text-center md:text-right'>
        <h1 className='text-5xl md:text-7xl font-bold mb-4 relative'>
          {/* Efecto de gradiente animado wave */}
          <span className='inline-block animated-gradient-text'>
            {displayedTitle}
            {!titleTypingComplete && <span className='animate-pulse'>|</span>}
          </span>
        </h1>
        <h2 className='text-2xl md:text-3xl font-medium mb-6 animated-gradient-text'>
          Hago páginas web y aplicaciones
        </h2>
        <p className='text-lg mb-8 max-w-xl leading-relaxed font-light md:ml-auto animated-gradient-text'>
          Soy un apasionado por crear soluciones para personas y comercios. Trabajo con distintos lenguajes de programación.
          Convierto tus ideas, en realidad.
        </p>
        <a href='#projects' className='inline-block bg-accent text-black px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all hover:scale-105'>
          Ver proyectos
        </a>
      </div>

      {/* Estilos para el gradiente animado */}
      <style jsx>{`
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
