# [2d-to-dynamic-3d](https://2d-to-dynamic-3d.surge.sh/)

## Requirements

1. Set up a Vue3 project.
2. Create a new component called ThreeDObjectGenerator.
3. The ThreeDObjectGenerator component should receive the following props:
geometry: a list containing points that should be connected to receive the initial 2d geometry. etc. [(X, Y), ...]
editableHeight: an integer indicating the height of the 3D object which should be editable via the Three.js editor.
4. Using Three.js, render a 3D object in the component based on the provided 2D geometry and editableHeight, as explained in the previous task.
5. Integrate the Three.js editor into two Vue components, one of the two geometries in each. They should be reachable via two paths.
6. Allow the user to change the height of each 3D object interactively. (three-editor or dat-GUI).
7. Include user controls to interact with the 3D object. You can use the OrbitControls library from Three.js for this purpose. Allow the user to rotate and zoom in/out of the object using mouse interactions.
8. Style the component and provide a coherent user interface.
9. Allow the user to customize the color of the 3D object through additional props.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
