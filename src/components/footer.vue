<template>
  <div class="app">
    <div class="info">
      <div class="info1">
        <div class="logo">
          <img class="logo1" src="../assets/3.jpg" alt="">
        </div>
        <div>
          <h3 class="text">Torun Dol Bd</h3>
          <p class="text1">+8801787997567</p>
        </div>
      </div>
      <div class="info2">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <ul>
          <li><a href="https://www.facebook.com/AlHassanDiamondGallery" class="fa fa-facebook"></a></li>
          <li><a href="https://www.youtube.com/" class="fa fa-youtube"></a></li>
          <li><a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a></li>
        </ul>
      </div>
    </div>
    <div class="rights">
      <p>2022 Developed by <a href="https://www.facebook.com/catchbitflex">Bitflex</a> | <a href="https://www.facebook.com/catchbangladesh">Catch Bangladesh</a></p>
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
.app{
  background-color: rgba(113, 233, 89, 0.411);
  /* background-image: url("../assets/footer.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.info{
  padding: 10px;
  margin-top: 100px;
  display: flex;
  margin: 3% 16%;
}
.info1{
  left: 0;
	width: 50%;
}
.logo1{
  height: 100%;
  width: 80%;
}
.text{
  color: rgb(55, 126, 55);
  font-size: 130%;
}
.text1{
  color: rgb(55, 126, 55);  
}
.info2{
  right: 0;
	width: 50%;
}
.rights{
  text-align: center;
  color: rgb(41, 4, 252);
  font-size: 100%;
  padding: 7px;
}

ul{
  list-style-type: none;
  margin: 0;
  padding-left: 50%;
  padding-top: 10px;
}
li{
  padding: 10px;
}
.fa {
  padding: 10px;
  font-size: 25px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>