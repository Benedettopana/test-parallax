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
      this.titleMarginTop = value * 1.2;
      console.log("h1: ", this.titleMarginTop);
      this.leaf1MarginLeft = -value;
      console.log("foglia 1: ", this.leaf1MarginLeft);
      this.leaf2MarginLeft = value;
      console.log("foglia 2: ", this.leaf2MarginLeft);
      this.bush2MarginBottom = -value;
      console.log("bush 2: ", this.bush2MarginBottom);
      this.mount1MarginBottom = -value * 1.2;
      console.log("montagna 1: ", this.mount1MarginBottom);
      this.mount2MarginBottom = -value * 1.5;
      console.log("montagna 2: ", this.mount2MarginBottom);
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
