module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d", // Deep navy for authority and trust
        secondary: "#2d3748", // Supporting professional hierarchy
        accent: "#3182ce", // Conversion moments and key metrics
        background: "#ffffff", // Clean canvas for content focus
        surface: "#f7fafc", // Subtle section separation
        "text-primary": "#1a202c", // Maximum contrast for scanning
        "text-secondary": "#4a5568", // Supporting without distraction
        success: "#38a169", // Positive metric reinforcement
        warning: "#d69e2e", // Urgency elements only
        error: "#e53e3e", // Form validation feedback
        border: "#e2e8f0", // Form fields and data visualization containers
        
        // Extended color palette for better integration
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#1a365d", // Primary color
        },
        
        blue: {
          50: "#ebf8ff",
          100: "#bee3f8",
          200: "#90cdf4",
          300: "#63b3ed",
          400: "#4299e1",
          500: "#3182ce", // Accent color
          600: "#2b77cb",
          700: "#2c5aa0",
          800: "#2a4365",
          900: "#1a365d",
        },
        
        gray: {
          50: "#f7fafc", // Surface color
          100: "#edf2f7",
          200: "#e2e8f0", // Border color
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568", // Text secondary
          700: "#2d3748", // Secondary color
          800: "#1a202c", // Text primary
          900: "#171923",
        },
        
        green: {
          50: "#f0fff4",
          100: "#c6f6d5",
          200: "#9ae6b4",
          300: "#68d391",
          400: "#48bb78",
          500: "#38a169", // Success color
          600: "#2f855a",
          700: "#276749",
          800: "#22543d",
          900: "#1c4532",
        },
        
        yellow: {
          50: "#fffff0",
          100: "#fefcbf",
          200: "#faf089",
          300: "#f6e05e",
          400: "#ecc94b",
          500: "#d69e2e", // Warning color
          600: "#b7791f",
          700: "#975a16",
          800: "#744210",
          900: "#5f370e",
        },
        
        red: {
          50: "#fed7d7",
          100: "#feb2b2",
          200: "#fc8181",
          300: "#f56565",
          400: "#e53e3e", // Error color
          500: "#c53030",
          600: "#9b2c2c",
          700: "#742a2a",
          800: "#63171b",
          900: "#521b1b",
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        'sm': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'dashboard': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      transitionDuration: {
        '200': '200ms',
      },
      
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      
      transform: {
        'hover-lift': 'translateY(-2px)',
      },
    },
  },
  plugins: [],
}