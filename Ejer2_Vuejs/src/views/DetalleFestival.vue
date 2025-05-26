<template>
    <div>
        <h2>Descripcion del Festival</h2>

        <table class="services-table" v-if="festival">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>{{ festival.nombre }}</td>
                    <td>{{ festival.descripción }}</td>
                </tr>
            </tbody>
        </table>


        <p v-else>No se encontró el festival.</p>

    </div>

</template>

<script setup>
import { useRoute } from 'vue-router';

import { useFestivalesStore } from '../stores/festivales';

import { computed } from 'vue';

const route = useRoute();
const nombreFestival = route.params.nombreFestival;

console.log('Nombre del festival:', nombreFestival);



const store = useFestivalesStore();

const festival = computed(() =>
    store.festivales.find(f => f.nombre === nombreFestival)
);


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
