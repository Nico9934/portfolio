import { Github, Activity, Code2, GitBranch, Star, GitCommit } from 'lucide-react';

export default function GithubActivity() {
    return (
        <section id='github' className="min-h-screen flex flex-col justify-center py-16 px-8 bg-primary">
            <div className='max-w-7xl mx-auto w-full'>
                <h3 className="text-4xl font-bold mb-4 text-accent flex items-center justify-center gap-3">
                    <Github className="w-10 h-10" />
                    Actividad en GitHub
                </h3>
                <p className='text-gray-400 mb-12 text-lg font-light text-center'>
                    Mis contribuciones y estadísticas de desarrollo
                </p>

                {/* Grid asimétrico y original */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Gráfico principal - Ocupa todo el ancho */}
                    <div className="col-span-12 bg-secondary/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-[1.02] group">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="w-5 h-5 text-accent" />
                            <h4 className="text-lg font-semibold text-white">Contribuciones del año</h4>
                        </div>
                        <img
                            src="https://ghchart.rshah.org/38bdf8/nico9934"
                            alt="GitHub Contributions"
                            className="rounded-lg w-full transition-all duration-500 hover:scale-[1.02]"
                            style={{
                                filter: 'hue-rotate(180deg) saturate(1.3) brightness(1.2)',
                            }}
                        />

                    </div>

                    {/* Stats principales - 2/3 del ancho */}
                    <div className="col-span-12 lg:col-span-8 bg-secondary/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-[1.02] group">
                        <div className="flex items-center gap-2 mb-4">
                            <GitBranch className="w-5 h-5 text-accent" />
                            <h4 className="text-lg font-semibold text-white">Estadísticas generales</h4>
                        </div>
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=nico9934&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=38bdf8&icon_color=38bdf8&text_color=94a3b8"
                            alt="GitHub Stats"
                            className="w-full rounded-lg"
                        />
                    </div>

                    {/* Lenguajes - 1/3 del ancho */}
                    <div className="col-span-12 lg:col-span-4 bg-secondary/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-[1.02] group">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-5 h-5 text-accent" />
                            <h4 className="text-lg font-semibold text-white">Lenguajes</h4>
                        </div>
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nico9934&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=38bdf8&text_color=94a3b8"
                            alt="Top Languages"
                            className="w-full rounded-lg"
                        />
                    </div>

                    {/* Racha - 1/2 del ancho */}
                    <div className="col-span-12 md:col-span-6 bg-secondary/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-[1.02] group">
                        <div className="flex items-center gap-2 mb-4">
                            <GitCommit className="w-5 h-5 text-accent" />
                            <h4 className="text-lg font-semibold text-white">Racha de commits</h4>
                        </div>
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com?user=nico9934&theme=tokyonight&hide_border=true&background=1e293b&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8"
                            alt="GitHub Streak"
                            className="w-full rounded-lg"
                        />
                    </div>

                    {/* Perfil detallado - 1/2 del ancho */}
                    <div className="col-span-12 md:col-span-6 bg-secondary/50 p-6 rounded-xl border border-gray-700 hover:border-accent transition-all hover:scale-[1.02] group">
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-accent" />
                            <h4 className="text-lg font-semibold text-white">Perfil detallado</h4>
                        </div>
                        <img
                            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nico9934&theme=tokyonight"
                            alt="GitHub Profile"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
