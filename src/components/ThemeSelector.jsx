import { useState, useEffect } from 'react';

export default function ThemeSelector() {
    const colorPalettes = [
        {
            name: 'Ocean Blue',
            primary: '#0f172a',
            secondary: '#1e293b',
            accent: '#38bdf8',
            gradient1: '#3b82f6',
            gradient2: '#06b6d4',
        },
        {
            name: 'Purple Dream',
            primary: '#1e1b4b',
            secondary: '#312e81',
            accent: '#a78bfa',
            gradient1: '#8b5cf6',
            gradient2: '#ec4899',
        },
        {
            name: 'Forest Green',
            primary: '#022c22',
            secondary: '#064e3b',
            accent: '#34d399',
            gradient1: '#10b981',
            gradient2: '#14b8a6',
        },
        {
            name: 'Sunset Orange',
            primary: '#1c1917',
            secondary: '#292524',
            accent: '#fb923c',
            gradient1: '#f59e0b',
            gradient2: '#ef4444',
        },
        {
            name: 'Pink Passion',
            primary: '#1e1b4b',
            secondary: '#3f3f46',
            accent: '#f472b6',
            gradient1: '#ec4899',
            gradient2: '#f97316',
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);

    useEffect(() => {
        const saved = localStorage.getItem('colorPalette');
        if (saved) {
            const palette = colorPalettes.find(p => p.name === saved) || colorPalettes[0];
            setSelectedPalette(palette);
            applyPalette(palette);
        } else {
            applyPalette(colorPalettes[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyPalette = (palette) => {
        document.documentElement.style.setProperty('--color-primary', palette.primary);
        document.documentElement.style.setProperty('--color-secondary', palette.secondary);
        document.documentElement.style.setProperty('--color-accent', palette.accent);
        document.documentElement.style.setProperty('--color-gradient1', palette.gradient1);
        document.documentElement.style.setProperty('--color-gradient2', palette.gradient2);
    };

    const handlePaletteChange = (palette) => {
        setSelectedPalette(palette);
        applyPalette(palette);
        localStorage.setItem('colorPalette', palette.name);
        setIsOpen(false);
    };

    return (
        <div className='fixed bottom-8 right-8 z-50'>
            {/* Botón principal */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-2xl hover:scale-110 transition-transform'
                style={{ backgroundColor: selectedPalette.accent }}
                aria-label="Cambiar tema"
            >
                🎨
            </button>

            {/* Paleta de colores */}
            {isOpen && (
                <div className='absolute bottom-20 right-0 bg-gray-600 rounded-xl shadow-2xl p-5 border border-gray-700 min-w-[280px]'>
                    <p className='text-sm text-gray-300 mb-4 font-semibold'>Elige tu paleta</p>
                    <div className='space-y-3'>
                        {colorPalettes.map((palette) => (
                            <button
                                key={palette.name}
                                onClick={() => handlePaletteChange(palette)}
                                className={`w-full p-3 rounded-lg hover:scale-105 transition-all ${selectedPalette.name === palette.name
                                    ? 'ring-2 ring-white'
                                    : 'hover:ring-1 hover:ring-gray-500'
                                    }`}
                            >
                                <div className='flex items-center justify-between mb-2'>
                                    <span className='text-white font-medium text-sm'>{palette.name}</span>
                                    {selectedPalette.name === palette.name && <span>✓</span>}
                                </div>
                                <div className='flex justify-between'>
                                    <div
                                        className='w-8 h-8 rounded-full border-slate-100'
                                        style={{ backgroundColor: palette.primary }}
                                    />
                                    <div
                                        className='w-8 h-8 rounded-full border-slate-100'
                                        style={{ backgroundColor: palette.secondary }}
                                    />
                                    <div
                                        className='w-8 h-8 rounded-full border-slate-100'
                                        style={{ backgroundColor: palette.accent }}
                                    />
                                    <div
                                        className='w-8 h-8 rounded-full border-slate-100 bg-gradient-to-r'
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${palette.gradient1}, ${palette.gradient2})`
                                        }}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
