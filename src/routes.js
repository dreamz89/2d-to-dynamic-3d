import GeometryOne from './components/GeometryOne.vue'
import GeometryTwo from './components/GeometryTwo.vue'
import TheMain from './components/TheMain.vue'

export default [
  { path: '/', component: TheMain },
  { path: '/1', component: GeometryOne },
  { path: '/2', component: GeometryTwo },
]