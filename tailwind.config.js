/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "one" : "#b473fd",
        "two" : "#e184c5",
        "three" : "#edd6ff",
        "four" : "#ebd7fa"
      },
      maxWidth : {
        "container" : "1300px",
      },
      width : {
        "container" : "1300px",
        "circle-one" : "500px",
        "circle-two" : "450px",
        "circle-2" : "500px",
        "circle-2resp" : "280px",
        "card" : "413px",
        "person-2-response" : "250px",
        "slider-xl" : "858px",
        "slider-lg" : "313px",
        "card-slider-resp" : "313px",
      },
      height : {
        "circle-one" : "500px",
        "circle-two" : "450px",
        "scene2-nav" : "444px",
        "circle-2" : "500px",
        "circle-2resp" : "280px",
        "card" : "500px",
        "card2" : "550px",
        "last-section" : "700px",
        "person-2-response" : "250px",
        "card-slider-resp" : "430px",
      },
      minHeight : {
        "person-2-response" : "250px",
      }, 
      minWidth : {
        "person-2-response" : "250px",
        "w-container" : "1600px",
      },
      boxShadow : {
        "personal" : "0px 5px 10px rgba(0,0,0,0.2)",
      }
    },
  },
  plugins: [],
}