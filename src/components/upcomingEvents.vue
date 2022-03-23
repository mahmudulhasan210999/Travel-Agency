<template>
  <div id="app">

    <div class="events-top">
      <div class="top-text">
        <h1 class="top-text1">Upcoming Events</h1>
      </div>
    </div>

    <div class="events">
      <h1 class="h1">Upcoming Events</h1>

      <div class="event-list">
        <div class="grid-view">
          <div class="event" v-for="(event) in events" :key="event">
            <div class="event1">
              <img class="img" :src="event.img" alt="">
              <h3 class="e-name">{{ event.title }}</h3>
              <h3 class="e-date">{{ event.date }}</h3>
              <p class="e-info">{{ event.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import header from './header.vue';

export default {
  components: {
    'app-header': header
  },

  computed: {
    events(){
      return this.$store.state.events;
    }
  },

  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
/* Top design */
.events-top{
  background-image: url("../assets/05.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 82vh; 
  width: 98vw;
}
.top-text{
  color: rgb(250, 8, 177);
  padding: 120px;
  width: 350px;
}
.top-text1{
  font-size: 350%;
}

/* Upcoming events */
.events{
  background-color: rgba(236, 143, 143, 0.329);
}
.h1{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 220%;
  margin: 30px 0;
  padding: 10px;
}
.event-list{
  margin-top: 2px;
}
.grid-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1% 18%;
}
.event1{
  margin: 10px;
}
.img{
  width: 30vw;
  height: 40vh;
}
.e-name{
  color: rgb(55, 126, 55);
  font-size: 170%;
}
.e-date{
  color: rgb(60, 94, 60);
  font-size: 150%;
}
.e-info{
  color: rgb(55, 126, 55);
  margin: 0;
}
</style>