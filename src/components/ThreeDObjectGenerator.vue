<template>
  <canvas ref="canvas" />
</template>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { ref, onMounted } from 'vue'

const props = defineProps({
  geometry: Array
})

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const canvas = ref(null)
const scene = new THREE.Scene()
const mesh = createMesh()
const camera = createCamera()
let renderer
createAxis()

onMounted(() => {
  renderer = createRenderer()
  createControls()
  addResizeListener()
  setAnimation()
})

function createMesh() {
  const shape = new THREE.Shape()
  const startingPoint = props.geometry[0]

  shape.moveTo(startingPoint[0], startingPoint[1])
  for (let i = 1; i < props.geometry.length; i++) {
    const point = props.geometry[i]
    shape.lineTo(point[0], point[1])
  }
  shape.lineTo(startingPoint[0], startingPoint[1])

  const extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
  }

  const extrudeGeometry = new THREE.ExtrudeGeometry( shape, extrudeSettings )
  const materialTop = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const materialSides = new THREE.MeshBasicMaterial({ color: 'blue' })
  const mesh = new THREE.Mesh(extrudeGeometry, [materialTop, materialSides])
  mesh.rotation.x = - Math.PI / 2
  mesh.geometry.center()
  scene.add(mesh)

  return mesh
}

function createCamera() {
  const fov = 75
  const aspect = sizes.width / sizes.height
  const camera = new THREE.PerspectiveCamera(fov, aspect)
  camera.position.x = 2
  camera.position.y = 2
  camera.position.z = 10
  camera.lookAt(mesh.position)
  scene.add(camera)

  return camera
}

function createAxis() {
  const axesHelper = new THREE.AxesHelper(2)
  scene.add(axesHelper)
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas.value })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)

  return renderer
}

function createControls() {
  const controls = new OrbitControls(camera, canvas.value)
  controls.enableDamping = true
  
  return controls
}

function addResizeListener() {
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
  })
}

function setAnimation() {
  renderer.render(scene, camera)
  window.requestAnimationFrame(setAnimation)
}
</script>
