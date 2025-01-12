/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Services/services.jsx",
    "./src/components/Project/project.jsx",
    "./src/components/Portfolio/Portfolio.jsx",
    "./src/components/Navbar1/navbar.jsx",
    "./src/components/Main/main.jsx",
    "./src/components/Footer/footer.jsx",
    "./src/components/Feedback/feedback.jsx",
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
