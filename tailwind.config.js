/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Services/services.jsx",
    "./src/components/Project/project.jsx",
    "./src/components/Portfilo/Portfilo.jsx",
    "./src/components/Navbar1/navbar.jsx",
    "./src/components/Main/main.jsx",
    "./src/components/Footer/footer.jsx",
    "./src/components/Feadback/feadback.jsx",
    "./src/components/Appointment/appointment.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

