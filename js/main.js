const { createApp } = Vue;

createApp({
  data() {
    return {
      titleInfo: {
        pageTitle: "Questo è il titolo della pagina",
        titleImgSrc: "./img/logo.svg",
        titleColor: "",
      },
    };
  },

  methods: {
    changeColor() {
      this.titleInfo.titleColor =
        this.titleInfo.titleColor == "" ? "text-danger" : "";
    },
  },
}).mount("#app");
