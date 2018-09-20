<template>
  <div id="app">
    <b-container fluid id="particlesShit">
    <MainPage class="mainpage" />
    
    <vue-particles color="#FFFF00"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="3"
        linesColor="#FFFF00"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="300"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        interactivity.events.modes.repulse.duration = 3>
      </vue-particles>
      <b-container>
      <svg aria-hidden="true" data-prefix="fas" data-icon="angle-double-down" class="svg-inline--fa fa-angle-double-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
    </b-container>
    <Footer />
    <project-section />
   </b-container>

  </div>
</template>

<script>
import Header from './components/Header';
// import Css from './Style.css';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import MainPage from './components/MainPage';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ProjectSection,
    MainPage
  }
};
</script>

<style scoped>
svg {
  width: 3em;
  margin-top: -10%;
  /* margin-bottom: 40px; */
}
.mainpage {
  padding-top: 4em;
  padding-bottom: 0;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: #2c3e50;
  background-color: black;
  color: #ffff00;
  margin: 0px;
  /* max-width: 100%; */
  max-height: 100%;
}
#particlesShit {
  position: static;
  height: 100%;
  z-index: -1;
}
</style>
