<template>

  <div>

  <div v-on:click='showInfoToggle'>     
        <h2>{{project.name}}</h2>
        <img v-if='!this.showInfo' :src=project.image>
        <div v-if='this.showInfo'>I'm a Div on Mouseover!!!</div>      
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    showInfoToggle() {
      this.showInfo = !this.showInfo;
    }
  },
  props: ['project']
};
</script>


<style scoped>
div div div {
  width: 15vw;
}

img {
  max-width: 100%;

  max-height: 40vh;
}
</style>


