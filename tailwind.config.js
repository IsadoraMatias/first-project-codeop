module.exports = {
  content: ["./index.html", "./input.css"],
  theme: {
    extend: {
      colors: {
        'custom-white': '#F2F2F2',
        'custom-dark-red': '#19050A',
        'custom-burgundy':'#5A0007',
        'custom-wine-red':'#590209',
        'custom-orange': '#F26430',
        'custom-black':'#040308',
        'custom-charcoal': '#04080D',
        'custom-dark-cyan':'#024959',
        'custom-dark-cyan-hover': '#013c47',
      },
      backgroundfade: {
        'bg-fade': 'radial-gradient(circle, rgba(4, 8, 13, 0) 50%, rgba(4, 8, 13, 0.8) 100%)'
    },
     
    boxShadow: {
      'glow-left-bottom': '-10px 10px 20px 5px rgba(255, 0, 0, 0.5)', 
    },

      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(242,100,48,1) 0%, rgba(242,100,48,0) 70%)',
      },

      fontFamily: {
        'vollkorn': ['Vollkorn', 'serif'],
        'raleway': ['Raleway', 'sans-serif']
        },
        opacity: {
          '3': '0.03',
          '2': '0.02',
        }
    },
  },
  plugins: [],
};
