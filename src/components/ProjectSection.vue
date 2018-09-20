<template>

  <b-row id="projects-container">
    <ProjectCard v-for="(project, index) in projects" v-bind:key='"project" + index' :project='project'/>
  </b-row>
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
/* Currently not doing anything... */
/* section {
  max-width: 1em;
} */
#projects-container {
  max-width: 80%;
  /* justify-content: center; */
}
</style>



