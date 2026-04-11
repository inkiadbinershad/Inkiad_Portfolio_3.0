/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'min-h-screen',
    'flex',
    'items-center',
    'justify-between',
    'gap-4',
    'gap-8',
    'gap-12',
    'px-4',
    'px-6',
    'py-3',
    'py-20',
    'text-xl',
    'text-lg',
    'text-sm',
    'font-bold',
    'font-semibold',
    'rounded-lg',
    'grid',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'w-full',
    'h-full',
    'absolute',
    'relative',
    'top-0',
    'left-0',
    'z-10',
    'z-50',
    'overflow-hidden',
    'transition-all',
    'duration-300'
  ]
}

