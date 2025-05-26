<template>
    <div>
        <h2>todos festival page</h2>

        <h2>Buscar por nombre</h2>
        <input v-model="filterInput" placeholder="nombre de festival" /><br><br>

        <table class="services-table">
            <thead>
                <tr>
                    <th>Imagen sdfsd</th>
                    <th>Nombre</th>
                    <th>Pais</th>
                    <th>Genero</th>
                    <th>Mes</th>
                    <th>Precio</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fest in filteredFestivales" :key="fest.nombre">
                    <!-- <td><img src="../assets/verano.png" alt="icon" class="service-icon" /></td> -->
                    <!-- <td>{{ fest.imagen }}</td> -->
                    <!-- <td><img :src="`../assets/${fest.imagen}`" alt="icon" class="service-icon" /></td> -->
                    <td><img :src="imageMap[fest.imagen]" alt="icon" class="service-icon" /></td>

                    <td>{{ fest.nombre }}</td>
                    <td>{{ fest.pais }}</td>
                    <td>{{ fest.genero }}</td>
                    <td>{{ fest.mes }}</td>
                    <td>{{ fest.precio }} €</td>
                    <td>
                        <RouterLink :to="`/festival/${fest.nombre}`"><button>+Info</button></RouterLink>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import invierno from '../assets/invierno.png';
import primavera from '../assets/primavera.png';
import verano from '../assets/verano.png';
import otono from '../assets/otono.png';

const imageMap = {
    'invierno.png': invierno,
    'primavera.png': primavera,
    'verano.png': verano,
    'otono.png': otono,
};


import { computed, ref, onMounted } from 'vue';

import { useFestivalesStore } from '../stores/festivales';





const store = useFestivalesStore();


onMounted(() => {
  if (!store.festivales || store.festivales.length === 0) {
        store.cargarFestivales();
    }
});



const festivales = computed(() => store.festivales);




const filterInput = ref('');

const filteredFestivales = computed(() => {
    return festivales.value.filter(fest =>
        fest.nombre.toLowerCase().includes(filterInput.value.toLowerCase())
    );
});


</script>


<style scoped>
.services-table {
    width: 100%;
    border-collapse: collapse;
}

.services-table th,
.services-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

.services-table th {
    background-color: #f0f0f0;
}

.heartImage {
    width: 50px;
    height: 50px;
}

.service-icon {
    width: 50px;
    height: 50px;
}
</style>