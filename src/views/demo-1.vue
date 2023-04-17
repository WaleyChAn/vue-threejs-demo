<template>
  <div id="demo"
       class="demo"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      width: 100,
      height: 100
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const demoDom = document.getElementById('demo')
      this.width = demoDom.offsetWidth
      this.height = demoDom.offsetHeight

      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#99CCFF')
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(this.width, this.height)
      demoDom.appendChild(renderer.domElement)

      const camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
      camera.position.set(2, 2, 2)
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.update()

      const axesHelper = new THREE.AxesHelper(2)
      scene.add(axesHelper)

      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshLambertMaterial({
        color: '#99CC66',
        transparent: true,
        opacity: 0.5
      })
      const cube = new THREE.Mesh(geometry, material)
      // cube.position.set(0.5, 0.5, 0.5)
      // cube.rotation.set(0, Math.PI / 6, 0)
      scene.add(cube)

      const ambient = new THREE.AmbientLight(0x404040) // soft white light
      scene.add(ambient)

      const light = new THREE.PointLight(0xffffff, 1)
      light.position.set(2, 3, 4)
      scene.add(light)

      const PointLightHelper = new THREE.PointLightHelper(light, 1, 0xf00000)
      scene.add(PointLightHelper)

      function animate () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
}
</style>
