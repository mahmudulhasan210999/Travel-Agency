<template>
  <div id="app">

    <div class="contact-top">
      <div class="top-text">
        <h1 class="top-text1">Meet us</h1>
      </div>
    </div>

    <div class="info">
      <h1 class="h1">CONTACT US</h1>
      <div class="info1">
        <div class="left">
          <img class="top" src="../assets/contact.jpg" alt="">
        </div>
        <div class="right">
          <h1>Torun Dol BD</h1>
          <p>20/5 West Panthapath (3rd Floor), Colonel Rashid Square, Panthapath, Dhaka 1205, Bangladesh</p>
          <h4># +8801787997567</h4>
          <h4># +8801099222254</h4>
          <h4>dragonrider015@gmail.com</h4>
        </div>
      </div>
    </div>

    <div class="query">
      <h2 class="query1">Send Us Your Query</h2>
      <form class="form" action="">
        <div class="form1">
          <div class="form101">
            <input class="input1" type="text" v-model="form.name" placeholder="Your Name">
          </div>
          <div class="form102">
            <input class="input1" type="email" v-model="form.email" placeholder="Email Address">
          </div>
        </div>
        <div class="form1">
          <div class="form101">
            <input class="input1" type="number" v-model="form.number" placeholder="Phone Number">
          </div>
          <div class="form102">
            <input class="input1" type="text" v-model="form.subject" placeholder="Subject">
          </div>
        </div>
        <div class="form1">
          <input class="input2" type="text" v-model="form.message" placeholder="Message">
        </div>

        <div class="button">
          <button class="send" v-on:click.prevent="send">Send Message</button>
        </div>

        <div class="greet" v-if="sendMessage">
          <h3>Thanks for your message.</h3>
        </div>
      </form>
    </div>

    <div class="map">
      <iframe 
      class="map-size"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.344645149412!2d90.38366661493552!3d23.877394584527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5ce805f3acb%3A0x2b553d92ae579583!2zQ2F0Y2ggQmFuZ2xhZGVzaCAtIOCmleCnjeCmr-CmvuCmmiDgpqzgpr7gpoLgprLgpr7gpqbgp4fgprY!5e0!3m2!1sen!2sbd!4v1642592214655!5m2!1sen!2sbd" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy"></iframe>
    </div>

  </div>
</template>

<script>
import header from './header.vue';

export default {
  components: {
    'app-header': header
  },
  name: 'app',
  data () {
    return {
      form: {
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
      },
      sendMessage: false,
    }
  },
  methods: {
    send: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        name: this.form.name,
        email: this.form.email,
        number: this.form.number,
        subject: this.form.subject,
        message: this.form.message,
      }).then(function(data){
        console.log(data);
        this.sendMessage = true;
      });
    }
  }
}
</script>

<style scoped>
/* Contact Top */
.contact-top{
  background-image: url("../assets/08.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 82vh; 
  width: 98vw;
}
.top-text{
  color: rgb(252, 206, 4);
  padding: 120px;
  width: 350px;
}
.top-text1{
  font-size: 350%;
}

/* Info Contact Us */
.info{
  background-color: rgba(211, 211, 211, 0.616);
}
.h1{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 250%;
}
.info1{
  padding: 10px;
  margin-top: 100px;
  display: flex;
  position: center;
  margin: 0 20%;
  background-color: lightgray;
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
p{
  margin: 3%;
}
h4{
  margin: 3%;
}

/* Query form */
.query{
  background-color: lightgreen;
}
.query1{
  text-align: center;
  color: rgb(55, 126, 55);
  font-size: 200%;
}
.form{
  padding: 10px;
  position: center;
}
.form1{
  width: auto;
  padding: 7px;
  display: flex;
  margin: 0 20%;
}
.form101{
  margin: auto;
  width: 50%;

}
.input1{
  width: 95%;
  height: 30px;
}
.form102{
  margin: auto;
  width: 50%;
}
.input2{
  width: 100%;
  height: 30px;
}
.button{
  margin: 5px 42%;
}
.send{
  background-color: rgb(115, 238, 115);
  width: 100%;
  height: 30px;
}
.greet{
  text-align: center;
}

/* Map, Location */
.map{
  margin-top: 30px;
  display: flex;
  position: center;
}
.map-size{
  height: 500px;
  width: 100%;
}
</style>