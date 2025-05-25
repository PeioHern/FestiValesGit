<template>
    <div>
        <h2>agregar festival page</h2>

        <form @submit.prevent="addFestival">

            <label for="nombre">Nombre del Festival</label><br>
            <input v-model="newFestival.nombre" id="nombre" type="text" placeholder="Nombre del Festival"
                required /><br><br>


            <!-- select cargado de un array de meses -->
            <label for="mes">Mes del Festival</label><br>
            <select v-model="newFestival.mes" id="mes" required>
                <option value="">Selecciona un mes</option>
                <option v-for="mes in meses" :key="mes" :value="mes">{{ mes }}</option>
            </select><br><br>


            <label for="pais">Pais</label><br>
            <input v-model="newFestival.pais" id="pais" type="text" placeholder="ej España" required /><br><br>

            <!-- select de uniqueGenerosNames -->
            <label for="genero">Genero Musical</label><br>
            <select v-model="newFestival.genero" id="genero" required>
                <option value="">Selecciona un genero</option>
                <option v-for="genero in uniqueGeneroNames" :key="genero" :value="genero">{{ genero }}</option>
            </select><br><br>

            <label for="precio">Precio</label><br>
            <input v-model="newFestival.precio" id="precio" type="number" placeholder="0" required /><br><br>

            <label for="descripcion">Descripcion</label><br>
            <input v-model="newFestival.descripcion" id="descripcion" type="text" placeholder="descipcion del Festival"
                required /><br><br>


            <button type="submit">Agregar</button>
        </form>
        <br><br>


        <h2>Festival Añadido</h2>

        <!-- table with the added festival -->
        <table class="services-table" v-if="lastFestival !== null">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Mes</th>
                    <th>Pais</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>{{ lastFestival.nombre }}</td>
                    <td>{{ lastFestival.genero }}</td>
                    <td>{{ lastFestival.mes }}</td>
                    <td>{{ lastFestival.pais }}</td>
                    <td>{{ lastFestival.precio }} €</td>
                    <td>{{ lastFestival.descripcion }}</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';

import { useFestivalesStore } from '../stores/festivales';



const store = useFestivalesStore();

onMounted(() => {
    store.cargarFestivales()
})

const festivales = computed(() => store.festivales);




const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];



// para que no salgan repetidos en el select
const uniqueGeneroNames = computed(() => {
    const names = festivales.value.map(f => f.genero);
    return [...new Set(names)];
});





const newFestival = ref({
    nombre: '',
    pais: '',
    genero: '',
    mes: '',
    imagen: '',
    precio: '',
    descripcion: ''
});

const lastFestival = ref(null);



const addFestival = () => {
    store.addFestival({ ...newFestival.value }); // spread to copy data

    lastFestival.value = { ...newFestival.value }; 

    newFestival.value = {
        nombre: '',
        pais: '',
        genero: '',
        mes: '',
        imagen: '',
        precio: '',
        descripcion: ''
    }; // reset form


};


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