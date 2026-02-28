import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/types/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ ألوان مريحة للعين - بدون أحمر أو بنفسجي صارخ
      colors: {
        // Brand tokens - ألوان هادئة ومحترفة
        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-light": "rgb(var(--brand-light) / <alpha-value>)",
        "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",

        // ✅ Primary palette - أزرق هادئ ومريح
        primary: {
          DEFAULT: "#2563EB", // أزرق معتدل
          50: "#EFF6FF", // خلفيات فاتحة جداً
          100: "#DBEAFE", // خلفيات فاتحة
          200: "#BFDBFE", // حدود فاتحة
          300: "#93C5FD", // عناصر ثانوية
          400: "#60A5FA", // Hover states
          500: "#3B82F6", // اللون الأساسي الفاتح
          600: "#2563EB", // اللون الأساسي
          700: "#1D4ED8", // عناصر نشطة
          800: "#1E40AF", // نصوص داكنة
          900: "#1E3A8A", // خلفيات داكنة
          950: "#172554", // داكن جداً
        },
        
        // ✅ Secondary palette - أخضر مريح وزيتوني
        secondary: {
          DEFAULT: "#059669", // أخضر زمردي هادئ
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        
        // ✅ Accent - أزرق سماوي/نعناعي هادئ
        accent: {
          DEFAULT: "#0891B2", // أزرق سماوي هادئ
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          950: "#083344",
        },

        // ✅ Neutral - ألوان محايدة دافئة ومريحة
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },

        // ✅ Semantic colors محسنة - أكثر هدوءاً
        success: {
          DEFAULT: "#059669", // أخضر هادئ
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16",
        },
        warning: {
          DEFAULT: "#D97706", // برتقالي هادئ (أقل صراخاً)
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        danger: {
          DEFAULT: "#B91C1C", // أحمر هادئ (أغمق وأقل إزعاجاً)
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        info: {
          DEFAULT: "#2563EB", // أزرق هادئ
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },

        // ألوان إضافية مريحة
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        green: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },

      // خطوط مخصصة
      fontFamily: {
        sans: [
          "Cairo",
          "Tajawal",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["Cairo", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },

      // خلفيات متدرجة هادئة
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #2563EB, #059669)", // أزرق إلى أخضر
        "gradient-secondary": "linear-gradient(to right, #059669, #0891B2)", // أخضر إلى سماوي
        "gradient-accent": "linear-gradient(to right, #0891B2, #2563EB)", // سماوي إلى أزرق
        "gradient-success": "linear-gradient(to right, #22C55E, #16A34A)",
        "gradient-warning": "linear-gradient(to right, #F59E0B, #D97706)",
        "gradient-danger": "linear-gradient(to right, #EF4444, #DC2626)",
        "gradient-info": "linear-gradient(to right, #3B82F6, #2563EB)",
        "gradient-dark": "linear-gradient(to right, #1E293B, #0F172A)",
        "gradient-teal": "linear-gradient(to right, #14B8A6, #0D9488)",
        "gradient-blue": "linear-gradient(to right, #3B82F6, #2563EB)",
        "gradient-green": "linear-gradient(to right, #22C55E, #16A34A)",
        "gradient-blue-green": "linear-gradient(to right, #2563EB, #059669)",
        "gradient-green-teal": "linear-gradient(to right, #059669, #0891B2)",
        "gradient-teal-blue": "linear-gradient(to right, #0891B2, #2563EB)",
      },

      // ظلال ناعمة
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.03)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.15)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.03)",
        soft: "0 2px 8px rgba(0, 0, 0, 0.03)",
        medium: "0 4px 12px rgba(0, 0, 0, 0.05)",
        hard: "0 8px 24px rgba(0, 0, 0, 0.08)",
        glow: "0 0 20px rgba(37, 99, 235, 0.15)", // glow أزرق هادئ
        "glow-lg": "0 0 30px rgba(37, 99, 235, 0.2)",
        "glow-blue": "0 0 20px rgba(37, 99, 235, 0.2)",
        "glow-green": "0 0 20px rgba(5, 150, 105, 0.15)",
        "glow-teal": "0 0 20px rgba(8, 145, 178, 0.15)",
        "glow-primary": "0 0 20px rgba(37, 99, 235, 0.2)",
        "glow-secondary": "0 0 20px rgba(5, 150, 105, 0.15)",
        none: "none",
      },

      // أنيميشن
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-out": "slideOut 0.3s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 3s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "scale-up": "scaleUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-down": "scaleDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "slide-in-left": "slideInLeft 0.4s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "glow-primary": "glowPrimary 2s ease-in-out infinite",
        "glow-secondary": "glowSecondary 2s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "pulse-fast": "pulse 1s ease-in-out infinite",
      },

      // إطارات المفاتيح
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(37, 99, 235, 0.25)" },
        },
        glowPrimary: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(37, 99, 235, 0.3)" },
        },
        glowSecondary: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(5, 150, 105, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(5, 150, 105, 0.25)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },

      // باقي الإعدادات
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
        gallery: "repeat(auto-fill, minmax(280px, 1fr))",
      },
      transitionDuration: {
        0: "0ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        auto: "auto",
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        modal: "1040",
        popover: "1050",
        tooltip: "1060",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;