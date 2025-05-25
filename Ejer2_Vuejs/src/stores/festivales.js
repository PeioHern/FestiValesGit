import { defineStore } from "pinia";
import axios from "axios";

// import festivalesData from '/festivales.json';
// import festivalesData from '/festivales.json?url';

export const useFestivalesStore = defineStore("festivales", {
  state: () => ({
    // Aqui guardamos las variables que nos interesan

    festivales: [],
  }),

  actions: {
    // En este apartado guardamos las funciones que nos interesan

    async cargarFestivales() {
      try {
        const response = await axios.get("/festivales.json");
        this.festivales = response.data.festivales;
        console.log("festivals-store fetched successfully:", this.festivales);
        console.log("festival-store name:", this.festivales[0].nombre);
      } catch (error) {
        console.error("Error al cargar las festivales:", error);
      }
    },

    addFestival(festival) {
      this.festivales.push(festival);
      console.log("festival added succesfully:", festival.nombre);
      
    },
  },

  getters: {
    // En este punto guardamos los getters que nos interesan, que serian funciones que devuelven un valor propiedades computadas
  },
});
