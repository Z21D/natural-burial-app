module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'transparent-black': 'rgba(0, 0, 0, 0.5)', // Example custom color
          // Add more custom colors as needed
        },
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'], // Example custom font
          // Add more custom fonts as needed
        },
        fontSize: {
          'xxl': ['3.5rem', '4.5rem'], // Example custom font size
          // Add more custom font sizes as needed
        },
        spacing: {
          '72': '18rem', // Example custom spacing
          // Add more custom spacing as needed
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }