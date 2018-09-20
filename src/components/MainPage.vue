<template>
  <div id="Intro">
    <h1>Hello. My name is <span>Kevin Potts</span> and I'm a full stack web developer.</h1>
    <!-- <b-button :variant="outline-success"> See my work
    </b-button> -->
  </div>
  
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style scoped>
div {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  color: white;
}
span {
  color: #ffff00;
}
button {
  background-color: #ffff00;
  color: black;
}
#Intro {
  /* margin-top: 200px; */
  /* position: absolute; */
  max-height: 10%;
  justify-content: center;
  align-content: center;
  size: 3em;
}
/* button {
  background-color: #ffff00;
  color: black;
  border-radius: 10px;
  height: 2.3em;
} */
</style>
