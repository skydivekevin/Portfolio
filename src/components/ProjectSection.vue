<template>

  
  <div id="projects-container">
    
    <ProjectCard v-for="(project, index) in projects" v-bind:key='"project" + index' :project='project'/>

  </div>
</template>

<script>
import ProjectCard from './ProjectCard';
export default {
  name: 'ProjectSection',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },

  mounted() {
    let apiURL = './static/projects.json';
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        return (this.projects = result);
      });
  }
};
</script>

<style scoped>
#title {
  margin-bottom: 4em;
}

#projects-container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: black;
  background-color: white;
  height: 100vh;
  width: 100%;

  padding-top: 10%;
}
</style>



