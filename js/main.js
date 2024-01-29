const { createApp } = Vue;

createApp({
  data() {
    return {
      titleInfo: {
        pageTitle: "Questo è il titolo della pagina",
        titleImgSrc: "./img/logo.svg",
      },
    };
  },
}).mount("#app");
