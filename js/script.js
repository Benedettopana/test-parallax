const { createApp } = Vue;

createApp({
  data() {
    return {
      //* posizionamento iniziale delle img
      titleMarginTop: 0,
      leaf1MarginLeft: 0,
      leaf2MarginLeft: 0,
      bush2MarginBottom: 0,
      mount1MarginBottom: 0,
      mount2MarginBottom: 0,
    };
  },

  methods: {
    handleScroll() {
      //! Prendo il valore dello scroll
      let value = window.scrollY;
      console.log(value);
      //* Do alle posizioni delle img dei volori in base al value preso dallo scoll
      //? In base al tipo di img abbiamo dei moltiplicatori da applicare
      this.titleMarginTop = value * 1.1;
      this.leaf1MarginLeft = -value;
      this.leaf2MarginLeft = value;
      this.bush2MarginBottom = -value;
      this.mount1MarginBottom = -value * 1.1;
      this.mount2MarginBottom = -value * 1.2;
    },
  },

  mounted() {
    //! EventListener dello scoll SEMPRE attivo
    window.addEventListener("scroll", this.handleScroll);
  },
  //! Distruggo l'EventListener per evitare memory leak cosi RESETTO la variabile value
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}).mount("#app");
