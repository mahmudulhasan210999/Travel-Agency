<template>
  <div>
    
    <div class="home-top">
      <div class="top-text">
        <h1 class="top-text1">Welcome! to</h1>
        <h1 class="top-text2">Torun Dol Bd</h1>
        <button class="top-button">
          <router-link class="top-button1" to="/about" >MORE ABOUT US</router-link>
        </button>
      </div>
    </div>

    <div class="events-cottege">
      <div class="events-cottege1">
        <h1>EVENTS</h1>
        <p>We are very happy to welcome you for travelling with us. We have events in every week end and government holidays. Moreover we can also arrange special events for groups.</p>
      </div>
    </div>

    <!-- <div class="slider1">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner" alt="" style="height:500px; width:800px;">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div> -->

    <div class="affection">
      <div class="affection2">
        <div class="left">
          <img class="top" src="../assets/contact.jpg" alt="">
        </div>
        <div class="right">
          <h1>Affection for Traveling?</h1>
          <p>Tour Group Bangladesh belongs to those who have affection for traveling and who are individual travelers. We would be delighted to provide support to those who really love to roam around, no matter where the destination is. Let us discover home first and then the earth!</p>

          <button class="aff-button">
            <router-link class="aff-button1" to="about" exact>MORE ABOUT US</router-link>
          </button>
        </div>
      </div>
    </div>

    <div class="events-cottege">
      <div class="events-cottege1">
        <h1>OUR COTTAGE</h1>
        <p>We are very happy to welcome you to our cottages. We have cottages at Sajek, St. Martin, Srimangal and a boat (Sindabad Tori) for our guests comfort. Moreover we can also arrange special accommodation for groups.</p>
      </div>
    </div>

    <div class="cottage-list">
      <div class="grid-view">
        <div class="cottege" v-for="(cottage) in cottages" :key="cottage">
          <div class="cottege1">
            <img class="img" :src="cottage.img" alt="">
            <h3 class="c-name">{{ cottage.title }}</h3>
            <p class="c-info">{{ cottage.info }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="visit-bd">
      <div class="visit-bd-title">
        <h2 class="visit-text">Visit Bangladesh With Torun Dol BD</h2>
      </div>
      <div class="visit-grid-view">
        <div class="visit-grid-pics" v-for="(pic) in pics" :key="pic">
          <div class="cottege1">
            <img class="img2" :src="pic.img" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'


export default {
  components: {
    // Swiper,
    // SwiperSlide
  },
  // directives: {
  //   swiper: directive
  // },

  computed: {
    cottages(){
      return this.$store.state.cottages;
    },
    pics(){
      return this.$store.state.pics;
    }
  },

  data () {
    return {
      banners: [
        {
          id: 1,
          image: require("../assets/10.jpg"),
        },
        {
          id: 2,
          image: require("../assets/12.jpg"),
        },
        {
          id: 3,
          image: require("../assets/13.jpg"),
        }
      ]
    }
  },
  // mounted() {
  //   console.log('Current Swiper instance object', this.mySwiper)
  //   this.mySwiper.slideTo(3, 1000, false)
  // }
}
</script>

<style scoped>
/* Home top */
.home-top{
  background-image: url("../assets/08.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 82vh; 
  width: 98vw;
}
.top-text{
  padding: 80px 120px;
  width: 350px;
}
.top-text1{
  font-size: 320%;
    color: rgb(250, 18, 161);
}
.top-text2{
  font-size: 360%;
  color: rgb(202, 216, 204);
}
.top-button{
  background-color: rgba(233, 41, 73, 0.87);
  font-size: 80%;
  border-radius: 12px;
  height: 2rem;
  width: 8rem;
}
.top-button1{
  color: aliceblue;
  text-decoration: none;
}

/* Events cottage */
.events-cottege{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 130%;
}
.events-cottege1{
  margin: 1% 16%;
}

/* Slider */


/* Affection */
.affection{
  margin-top: 30px;
  background-image: url("../assets/bg-affection.jpg");
}
.affection2{
  padding: 10px;
  margin-top: 100px;
  display: flex;
  margin: 3% 16%;
}
.left{
  left: 0;
	width: 50%;
}
.top{
  height: 100%;
  width: 100%;
}
.right{
  right: 0;
	width: 50%;
  margin: 10px;
}
.aff-button{
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
.aff-button1{
  color: aliceblue;
  text-decoration: none;
}

/* Cottege List */
.cottage-list{
  margin-top: 2px;
}
.grid-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1% 18%;
}
.cottage1{
  margin: 10px;
}
.img{
  width: 30vw;
  height: 40vh;
}
.c-name{
  color: rgb(55, 126, 55);
  font-size: 170%;
}
.c-info{
  color: rgb(55, 126, 55);
  margin: 0;
}

/* Visit BD */
.visit-bd{
  background-color: rgba(181, 213, 241, 0.555);
}
.visit-bd-title{
  padding-top: 5px;
}
.visit-grid-view{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 3% 16%;
}
.visit-text{
  text-align: center;
  color: rgb(55, 126, 55);
}
.img2{
  width: 21vw;
  height: 20vh;
}
</style>