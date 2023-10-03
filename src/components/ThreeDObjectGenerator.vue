<template>
  <canvas ref="canvas" />
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default {
  props: {
    geometry: Array,
    color: String,
    editableHeight: Number
  },
  watch: {
    color(newColor) {
      this.mesh.material.color.set(newColor)
    },
    editableHeight(newHeight) {
      this.mesh.scale.z = newHeight
    }
  },
  mounted() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.canvas = this.$refs.canvas
    this.scene = new THREE.Scene()
    this.extrudeGeometry = this.createExtrudeGeometry()
    this.mesh = this.createMesh()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()
    this.createControls()
    this.addResizeListener()
    this.setAnimation()
  },
  methods: {
    createExtrudeGeometry() {
      const shape = new THREE.Shape()
      const startingPoint = this.geometry[0]

      shape.moveTo(startingPoint[0], startingPoint[1])
      for (let i = 1; i < this.geometry.length; i++) {
        const point = this.geometry[i]
        shape.lineTo(point[0], point[1])
      }
      shape.lineTo(startingPoint[0], startingPoint[1])

      const extrudeSettings = {
        steps: 1,
        depth: this.editableHeight,
        bevelEnabled: false
      }

      const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

      return extrudeGeometry
    },
    createMesh() {
      const material = new THREE.MeshBasicMaterial({ color: this.color })
      const mesh = new THREE.Mesh(this.extrudeGeometry, material)
 
      mesh.rotation.x = - Math.PI / 2
      mesh.geometry.center()
      this.scene.add(mesh)

      return mesh
    },
    createCamera() {
      const fov = 75
      const aspect = this.sizes.width / this.sizes.height
      const camera = new THREE.PerspectiveCamera(fov, aspect)
      camera.position.x = 2
      camera.position.y = 2
      camera.position.z = 10
      camera.lookAt(this.mesh.position)
      this.scene.add(camera)

      return camera
    },
    createRenderer() {
      const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas })
      renderer.setSize(this.sizes.width, this.sizes.height)
      renderer.render(this.scene, this.camera)

      return renderer
    },
    createControls() {
      const controls = new OrbitControls(this.camera, this.canvas)
      controls.enableDamping = true
    },
    addResizeListener() {
      window.addEventListener('resize', () => {
        // Update sizes
        this.sizes.width = window.innerWidth
        this.sizes.height = window.innerHeight

        // Update camera
        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()

        // Update renderer
        this.renderer.setSize(this.sizes.width, this.sizes.height)
      })
    },
    setAnimation() {
      this.renderer.render(this.scene, this.camera)
      window.requestAnimationFrame(this.setAnimation)
    }
  }
}
</script>
