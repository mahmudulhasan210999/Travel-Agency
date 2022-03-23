<template>
  <div class="full">
		<div class="logo">
			<router-link :to="'/'">
				<img class="logo1" src="../assets/bg-removed.png" alt="" style="height:70px; width:70px;">
			</router-link>
		</div>
    <div class="bar">
			<ul>
				<li><router-link :to="'/' ">Home</router-link></li>
				<li><router-link :to="'/events'">Upcoming Events</router-link></li>
				<li><router-link :to="'/blog'">Travel Blog</router-link></li>
				<li><router-link :to="'/about'">About Us</router-link></li>
				<li><router-link :to="'/contact'">Contact Us</router-link></li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.full{
  /* padding: 10px; */
  /* margin-top: 100px; */
  display: flex;
  /* margin: 3% 16%; */
	/* background-color: rgb(226, 224, 222); */
}
.logo{
  left: 0;
	width: 10%;
	padding: 0;
	/* height: 50px; */
}
.logo1{
	height: 100%;
	width: 100%;
}
.bar{
	right: 0;
	width: 90%;
	font-size: 125%;
	font-size: 25px;
}

/* .top{
	width: 100%;
	height: 220px;
} */
ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	float:right
}
li{
	float: left;
	/* border-right: 2px solid aliceblue; */
		padding: 20px;
}
a{
	display: block;
	/* color: aliceblue; */
	color: rgb(62, 196, 107);
	text-align: center;
	/* padding: 20px; */
	/* background-color: #467c30d8; */
	text-decoration: none;
}
a:hover{
	/* background-color: #294e1ad8; */
	color: #df3c3c;
}
</style>