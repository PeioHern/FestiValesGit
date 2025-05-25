import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'

import TodosFestivales from '../views/TodosFestivales.vue'
import FestivalesGenero from '../views/FestivalesGenero.vue'
import AnadirFestival from '../views/AnadirFestival.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida
    },
    {
      path: '/todosfestivales',
      name: 'todosfestivales',
      component: TodosFestivales
    },
    {
      path: '/festivalesgenero',
      name: 'festivalesgenero',
      component: FestivalesGenero
    },
    {
      path: '/anadirfestival',
      name: 'anadirfestival',
      component: AnadirFestival
    }
    
  ]
})

export default router
