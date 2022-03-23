<template>
  <div id="app">
    <div class="about-top">
      <div class="top-text">
        <h1 class="top-text1">Welcome! Few words about us</h1>
      </div>
    </div>
    
    <div class="about">
      <h1 class="h1">ABOUT US</h1>
      <div class="about1">
        <div class="left">
          <img class="pic" src="../assets/about_top.jpg" alt="">
        </div>
        <div class="right">
          <h1>We offer great quality</h1>
          <p>Tour Group Bangladesh belongs to those who have affection for traveling and who are individual travelers. We would be delighted to provide support to those who really love to roam around, no matter where the destination is. Lets discover home first then the earth! This is a test about us! Welcome to visit Bangladesh, a land of rivers, high lands with evergreen fields and forests. A country is very different from any other countries not only for the exquisite nature but also for the amicable and hospitable people.</p>
          <button class="a-button">
            <router-link class="a-button1" to="contact" exact>Contact Us =></router-link>
          </button>
        </div>
      </div>
    </div>

    <div class="team">
      <h1 class="h1">MEET OUR TEAM</h1>

      <div class="member-list">
        <div class="grid-view">
          <div class="member" v-for="(member) in members" :key="member">
            <div class="member1">
              <img class="img" :src="member.img" alt="">
              <h3 class="m-name">{{ member.title }}</h3>
              <h3 class="m-post">{{ member.post }}</h3>
              <p class="m-info">{{ member.info }}</p>
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
    members(){
      return this.$store.state.members;
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
/* About Top */
.about-top{
  background-image: url("../assets/07.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 82vh; 
  width: 98vw;
}
.top-text{
  color: rgb(252, 250, 250);
  padding: 120px;
  width: 350px;
}
.top-text1{
  font-size: 350%;
}

/* About Us */
.about{
  background-color: rgba(100, 73, 73, 0.322);
}
.h1{
  text-align: center;
}
.about1{
  padding: 10px;
  margin-top: 100px;
  display: flex;
  position: center;
  margin: 0 20%;
  background-color: lightgray;
}
p{
  margin: 3%;
}
h4{
  margin: 3%;
}
.left{
  left: 0;
	width: 50%;
}
.pic{
  height: 100%;
  width: 100%;
}
.right{
  right: 0;
	width: 50%;
  margin: 10px;
}
.a-button{
  margin-top: 20%;
  margin-bottom: 5%;
  margin-left: 40%;
  margin-right: 5%;
  background-color: rgba(233, 41, 73, 0.87);
  font-size: 80%;
  border-radius: 12px;
  height: 2rem;
  width: 8rem;
}
.a-button1{
  color: aliceblue;
  text-decoration: none;
}

/* Team members */
.team{
  background-color: lightgrey;
}
.h1{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 220%;
  margin: 30px 0;
  padding: 10px;
}

.member-list{
  margin-top: 2px;
}
.grid-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1% 18%;
}
.member1{
  margin: 10px;
}
.img{
  width: 30vw;
  height: 40vh;
}
.m-name{
  color: rgb(55, 126, 55);
  font-size: 150%;
}
.m-post{
  color: rgb(60, 94, 60);
  font-size: 130%;
}
.m-info{
  color: rgb(55, 126, 55);
  margin: 0;
}
</style>