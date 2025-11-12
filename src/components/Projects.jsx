import { BarChart3, Boxes, GraduationCap, Rocket, Github, ExternalLink, TreePine, BombIcon } from 'lucide-react';

const projects = [
  {
    title: 'CRM Mi Viejo',
    code: 'https://github.com/Nico9934/crm-mi-viejo',
    deploy: null,
    desc: 'Sistema de gestión de clientes y cuentas corrientes con React y PostgreSQL.',
    Icon: BarChart3,
    tech: ['React', 'PostgreSQL', 'Node.js'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Bienfrio IQF',
    code: 'https://github.com/Nico9934/bienfrio-iqf',
    deploy: null,
    desc: 'WebApp para ventas de productos congelados, con dashboard y modo oscuro.',
    Icon: Boxes,
    tech: ['React', 'Dashboard', 'Dark Mode'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Instituto Web 2025',
    code: 'https://github.com/Nico9934/instituto-web',
    deploy: null,
    desc: 'Plataforma educativa con registro de cursadas y asistencia.',
    Icon: GraduationCap,
    tech: ['Web App', 'Education', 'Database'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Memo JST',
    code: 'https://github.com/Nico9934/memo-tst',
    deploy: 'https://memo-tst.vercel.app/',
    desc: 'Un juego hecho con JavaScript para entrenar la memoria visual y mejorar la concentración. Desafía tu mente encontrando pares de cartas en el menor tiempo posible.',
    Icon: GraduationCap,
    tech: ['Web App', 'Game', 'IQ'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Bomberos Voluntarios Project',
    code: 'https://github.com/Nico9934/Bomberos',
    // deploy: 'https://memo-tst.vercel.app/',
    desc: 'Un software de gestión para Bomberos Voluntarios de San Vicente que permite administrar incidentes, recursos y personal de manera eficiente. Facilita la coordinación y respuesta rápida ante emergencias.',
    Icon: BombIcon,
    tech: ['Web App', 'Game', 'IQ'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Canopia Web',
    code: 'https://github.com/Nico9934/canopiaWebRemake',
    deploy: 'https://memo-tst.vercel.app/',
    desc: 'Una landing page moderna y atractiva para Canopía, una empresa dedicada a la venta de productos ecológicos y sustentables. La página destaca sus valores, productos y compromiso con el medio ambiente.',
    Icon: TreePine,
    tech: ['Web App', 'Game', 'IQ'],
    color: 'from-green-500 to-emerald-500'
  },
];

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 bg-primary'>
      <div className='max-w-6xl mx-auto w-full'>
        <h3 className='text-4xl font-bold mb-4 text-accent flex items-center gap-3 justify-center'>
          <Rocket className="w-8 h-8" />
          Proyectos
        </h3>
        <p className='text-gray-400 mb-12 text-lg font-light text-center'>Algunos de mis trabajos más destacados</p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((p, i) => (
            <div
              key={i}
              className='bg-secondary p-6 rounded-xl border border-gray-700 hover:border-accent transition-all duration-300'
            >
              {/* Icono con gradiente */}
              <div className={`bg-gradient-to-br ${p.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg mb-4`}>
                <p.Icon className="w-8 h-8 text-white" />
              </div>

              <h4 className='text-2xl font-bold mb-3 text-white'>{p.title}</h4>
              <p className='text-gray-400 mb-6 leading-relaxed font-light'>{p.desc}</p>

              {/* Tags de tecnologías */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1 bg-primary text-accent text-sm rounded-full border border-accent/30 font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className='flex gap-3'>
                {/* Botón GitHub */}
                {p.code && (
                  <a
                    href={p.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 py-3 bg-primary/80 text-gray-300 rounded-lg border border-gray-600 hover:border-accent hover:text-accent transition-all duration-300 font-medium flex items-center justify-center gap-2'
                  >
                    <Github className="w-5 h-5" />
                    <span className="hidden sm:inline">Código</span>
                  </a>
                )}

                {/* Botón Deploy */}
                {p.deploy && (
                  <a
                    href={p.deploy}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 py-3 bg-primary/80 text-gray-300 rounded-lg border border-gray-600 hover:border-accent hover:text-accent transition-all duration-300 font-medium flex items-center justify-center gap-2'
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Demo</span>
                  </a>
                )}

                {/* Si no hay deploy ni code */}
                {!p.deploy && !p.code && (
                  <button className='w-full py-3 bg-accent/10 text-accent rounded-lg border border-accent transition-all duration-300 font-medium'>
                    Próximamente
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
