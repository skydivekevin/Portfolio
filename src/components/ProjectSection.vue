<template>
 
      <section id="projects-container">
          <h2>Projects</h2>
          <ul id="projects">
              <ProjectCard v-for="(project, index) in projects" v-bind:key='"project" + index' :project='project'/>
    </ul>
  </section>

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
        // console.log(result);
        return (this.projects = result);
      });
  }
};
</script>

<style scoped>
</style>



