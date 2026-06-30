/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Mapped to the OKLCH tokens declared in globals.css :root.
        ink: 'var(--color-ink)',
        'ink-2': 'var(--color-ink-2)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        text: 'var(--color-text)',
        'text-2': 'var(--color-text-2)',
        'text-3': 'var(--color-text-3)',
        rule: 'var(--color-rule)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)'
      },
      fontFamily: {
        mono: ['var(--font-iosevka)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      maxWidth: {
        prose: '68ch'
      },
      screens: {
        xxl: '1600px'
      }
    }
  },
  plugins: []
};
