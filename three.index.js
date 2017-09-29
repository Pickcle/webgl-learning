window.onload = function () {
  var scene = new THREE.Scene()
  var aspect = window.innerWidth / window.innerHeight
  var camera = new THREE.PerspectiveCamera(60, aspect, 1, 2000)
  var renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry(1, 1, 1)
  var material = new THREE.MeshNormalMaterial()
  // var cube = new THREE.Mesh(geometry, material)
  // scene.add(cube)
  camera.position.z = 10

  var render = function () {
    requestAnimationFrame(render)
    // var time = Date.now()
    // mesh1.position.x = Math.cos(time)
    // mesh1.position.y = Math.sin(time)
    // mesh1.rotation.x += 0.1
    // mesh1.rotation.y += 0.1
    // cube.rotation.z += 0.1
    renderer.render(scene, camera)
  }

  var mesh1 = new THREE.Mesh(geometry, material)
  // var mesh2 = new THREE.Mesh(geometry, material)
  var group = new THREE.Group();
  scene.add( group );

  group.add( mesh1 );
  mesh1.scale.set(2,2,2)

  render()
}
