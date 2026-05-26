'use client';
import { useState, useEffect } from 'react';

const themes = [
  { id: 'ocean',    label: '🌊 Ocean',    color: '#0ea5e9', dark: true  },
  { id: 'forest',   label: '🌿 Forest',   color: '#10b981', dark: true  },
  { id: 'sunset',   label: '🌅 Sunset',   color: '#f97316', dark: true  },
  { id: 'rose',     label: '🌸 Rose',     color: '#f43f5e', dark: true  },
  { id: 'daylight', label: '☀️ Daylight', color: '#0284c7', dark: false },
];

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState('ocean');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'ocean';
    const valid = themes.find(t => t.id === saved) ? saved : 'ocean';
    if (valid !== saved) localStorage.setItem('portfolio-theme', valid);
    setCurrent(valid);
    document.documentElement.setAttribute('data-theme', valid);
  }, []);

  const applyTheme = (id: string) => {
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('portfolio-theme', id);
    setCurrent(id);
    setOpen(false);
  };

  const currentTheme = themes.find(t => t.id === current) ?? themes[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Theme options — shown when open */}
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme.id)}
              className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg ${
                current === theme.id
                  ? 'ring-2 ring-white/50 scale-105'
                  : 'opacity-80 hover:opacity-100 hover:scale-105'
              }`}
              style={{
                backgroundColor: theme.color + '22',
                border: `1px solid ${theme.color}55`,
                color: 'var(--text)',
              }}
            >
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: theme.color }}
              />
              {theme.label}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 rounded-full font-medium text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
        style={{
          backgroundColor: currentTheme.color,
          color: currentTheme.dark ? '#fff' : '#0f172a',
          boxShadow: `0 4px 24px ${currentTheme.color}66`,
        }}
        title="Switch theme"
      >
        <span>{currentTheme.label.split(' ')[0]}</span>
        <span>{open ? '✕' : 'Theme'}</span>
      </button>
    </div>
  );
}
