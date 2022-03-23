<template>
  <div id="app">

    <div class="travel-top">
      <div class="top-text">
        <h1 class="top-text1">Travel Blog</h1>
      </div>
    </div>

    <div class="show-blogs">
      <div>
        <h1 class="b-h1">TRAVEL BLOGS</h1>
      </div>
      <div class="single" v-for="(blog) in blogs" :key="blog">
        <h2>{{ blog.id }}</h2>
        <h2>{{ blog.title }}</h2>
        <article>{{ blog.body }}</article>
      </div>
    </div>

    <div class="blogs">
      <h2>This is Travel blog page. Here the blogs of the travellers will be added.</h2>
      <div v-for='city in cities' :key='city.id'>
        <p>Title: {{city.id}}</p> 
        <p>Body: </p> {{city.name}}
        <p>Email: </p>  {{city.email}}
      </div>
    </div>

  </div>
</template>

<script>
import header from './header.vue';

export default {
  name: 'myStore',
  data () {
    return {
      
    }
  },
  computed: {
    cities() {
    return this.$store.state.cities
    }
  },
  mounted() {
    this.$store.dispatch("getCities");
  },


  components: {
    'app-header': header
  },

  // name: 'app',
  // data () {
  //   return {
  //     blogs: []
  //   }
  // },
  // mounted(){
  // this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
  //   this.blogs = data.body.slice(0,6);
  //   })
  // }
}
</script>

<style scoped>
/* Travel Top */
.travel-top{
  background-image: url("../assets/09.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 82vh; 
  width: 98vw;
}
.top-text{
  color: rgb(240, 183, 183);
  padding: 120px;
  width: 350px;
}
.top-text1{
  font-size: 350%;
}

/* Show Blogs */
.show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.b-h1{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 250%;
}
.single{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  color: rgba(35, 39, 243, 0.918);
}
</style>