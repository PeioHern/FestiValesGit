<template>
    <div>
        <h2>festivales genero page</h2>




        <!-- generos filter with select -->
        <h2>Seleccionar genero</h2>
        <select v-model="filterSelect">
            <option value="XXX">seleccione un genero</option>
            <option v-for="genero in uniqueGeneroNames" :key="genero" :value="genero">
                {{ genero }}
            </option>
        </select>
        <br><br>

        <!-- generos filter with checkbox -->
        <h2>Seleccionar generos</h2>
        <div v-for="genero in uniqueGeneroNames" :key="genero">
            <label>
                <input type="checkbox" :value="genero" v-model="checkedGeneros" />
                {{ genero }}
            </label>
        </div>
        <br><br>



        <table class="services-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Mes</th>
                    <th>Pais</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fest in filteredFestivalesCheck" :key="fest.nombre">

                    <td>{{ fest.nombre }}</td>
                    <td>{{ fest.genero }}</td>
                    <td>{{ fest.mes }}</td>
                    <td>{{ fest.pais }}</td>
                    <td>{{ fest.precio }} €</td>

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
  if (!store.festivales || store.festivales.length === 0) {
        store.cargarFestivales();
    }
});



const festivales = computed(() => store.festivales);


const filterSelect = ref('XXX');

const filteredFestivalesSel = computed(() => {
    if (filterSelect.value === 'XXX') return festivales.value; //si quisieras que no salga nada en el default select seria return []
    return festivales.value.filter(fest => fest.genero === filterSelect.value);
});


const checkedGeneros = ref([]);

const filteredFestivalesCheck = computed(() => {
    if (checkedGeneros.value.length === 0) return festivales.value;
    return festivales.value.filter(fest => checkedGeneros.value.includes(fest.genero));
});


// para que no salgan repetidos en el select
const uniqueGeneroNames = computed(() => {
    const names = festivales.value.map(f => f.genero);
    return [...new Set(names)];
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