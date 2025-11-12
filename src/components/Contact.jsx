import { useState, useEffect, useRef } from 'react';
import { Mail, Send, MessageSquare, Linkedin, CheckCircle, XCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [titleText, setTitleText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const fullTitle = 'Contacto';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // 👀 Intersection Observer para animación typing
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

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isVisible]);

  // ✍️ Animación typing del título
  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  // ✉️ Manejar envío con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_bno7efn', // ← reemplazá por tu ID real
        'template_rktfq75', // ← reemplazá por tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'XrdeeFvW5CWoPsYTv' // ← reemplazá por tu Public Key
      )
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error('Error al enviar email:', error);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 bg-secondary"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🧭 Izquierda: Título y links */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-4">
                <Mail className="w-12 h-12 md:w-14 md:h-14 text-accent" />
                <span className="animated-gradient-text font-[Inter] text-center">
                  {titleText}
                  <span className="animate-pulse text-accent">|</span>
                </span>
              </h3>

              <p className="mt-8 text-gray-300 leading-relaxed text-lg font-light max-w-md font-[Inter] text-center">
                ¿Tenés un proyecto en mente? Me encantaría escuchar tus ideas y ver cómo podemos
                trabajar juntos para hacerlas realidad.
              </p>

              <div className="mt-8 flex gap-4 justify-center">
                <a
                  href="mailto:nico9934@gmail.com"
                  className="p-4 bg-primary/50 rounded-lg border border-gray-700 hover:border-accent transition-all hover:scale-110 group"
                >
                  <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5491166809127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/50 rounded-lg border border-gray-700 hover:border-accent transition-all hover:scale-110 group"
                >
                  <MessageSquare className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolas-rolon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/50 rounded-lg border border-gray-700 hover:border-accent transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* 📬 Derecha: Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-light"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-light"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none font-light"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-accent text-black px-6 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-medium flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ¡Mensaje enviado correctamente!
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center font-medium flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Ocurrió un error al enviar el mensaje. Intentá de nuevo.
                </div>
              )}
            </form>
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
