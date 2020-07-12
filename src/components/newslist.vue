<template>
<div>
<div class="newsList">
  <p class="newsText">{{list.text}}</p>
  <div class="newImg"></div>
  <div class="newImg"></div>
  <div class="newImg"></div>
</div>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['list'],
  data () {
    return {
      
    }
  },
  created(){

  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsText{
  text-align: left;
}
  .newImg{
     width: 33.3%;
     height: 100px;
     background: red;
     float: left;
   }
</style>
