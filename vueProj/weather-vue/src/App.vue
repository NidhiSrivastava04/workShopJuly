<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <div style="color:red;">
    My Name is Nidhi Srivastava
  </div>
  <br>
  <div>
    {{count}}
  </div>
  <button @click="increment()">+</button>
  <button @click="decrement()">-</button>
  <HelloWorld msg="Counter App"/> -->
  <h2 style="color:black;justify-content: center; display: flex; margin-bottom: -33px;">Weather App</h2>
  <div class="card col-4 mx-auto my-5 bg-image " v-if="visible">
    <div class="card-body">
      <h5 class="card-title text-white">{{city}}</h5>
      <h1 class="text-white">{{temp}}&#176;C</h1>
    </div>
  </div>
  <div v-else>
    Loading......
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
   return{
     count: 4,
     city: 'Not',
     temp: 0,
     visible: false
   } 
  },
  created(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=basti&appid=07e7dc0f61902aace3cea84d8cf25cce&units=metric')
    .then((response) => response.json())
    .then(data => (this.city = data.name, this.temp = data.main.temp, this.visible = true))
  },
  // methods: {
  //   increment(){
  //     // alert(1)
  //     this.count = this.count + 1;
  //     console.log(this.city);
  //   },
  //   decrement(){
  //     this.count = this.count - 1;
  //   }
  // },
  
  
  // 07e7dc0f61902aace3cea84d8cf25cce
}
</script>

<style>
.bg-image{
  /* background-image: url("https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); */
  background-image: url("https://images.unsplash.com/photo-1584475680780-f6954676f8d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  background-size: cover;
  background-position: center;
  height: 85vh;
  width: 99%;
}
h1{
  position:absolute ;
  bottom: 0;
  right: 15px;
}
h5{
  font-size: 30px;
}
h6{
  color: black;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
