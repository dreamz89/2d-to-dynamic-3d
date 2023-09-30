<template>
  <div class="main">
    <router-link to="/1">Go to Geometry One</router-link>
    <router-link to="/2">Go to Geometry Two</router-link>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>