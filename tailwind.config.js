/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import formsPlugin from '@tailwindcss/forms'; // Import the forms plugin separately
import '@tailwindcss/forms';
import tailwindScrollbar from 'tailwind-scrollbar';

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [
    formsPlugin, // Use the imported forms plugin here
    tailwindScrollbar({ nocompatible: true }),
  ],
});
