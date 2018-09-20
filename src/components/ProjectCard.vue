<template>
<b-col>
  <li v-on:click='showInfoToggle'>
    <div class="project-card">
      <header class="project-title">
        <h2>{{project.name}}</h2>
        <img :src=project.image>
        
        <!-- <img :src=image>   This will be a screenshot for the project -->
        <!-- <h2>{{project.name}}</h2>    This will be the name of the project -->    
      </header>
      <!-- info-container will be the extra info for each project (tech used, date completed etc.) -->
      <section class="info-container">
        <!-- <h4 v-if='this.showInfo'>Skills</h4> -->
        <ul v-if='this.showInfo' class="tech-list">
          
         <!-- tech-list will be the list of tech used in each project -->
          <li v-for='(stack, index) in project.stack' v-bind:key='"stack" + index' :stack='stack' >{{stack}} </li>

        </ul>

      </section>
  </div>
  </li>
  </b-col>
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
li {
  list-style: none;
}
img {
  width: 30%;
  margin: 0 10px 0 10px;
  /* padding-left: 10%;
  padding-right: 10%;  */
  /* border: 1px solid darkgrey; */
}
</style>


