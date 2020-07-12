<template>
<div>
 <div class="tabNews">
   <van-tabs @change="changeList">
  <van-tab v-for="(item,index) in tabLists" :key='index' :title="item.title" >
    <div class="bodyNews">
      <Newslist :list='item' v-for='(item,index) in dataList' :key='index'></Newslist>
    </div>
  </van-tab>
</van-tabs>
  </div>
  
</div>
 
</template>

<script>
import { apiAddress } from '@/utils/api';// 导入我们的api接口
import Newslist from '@/components/newslist'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabLists: [
        {title:'推荐',name:'1'},
        {title:'抗击肺炎',name:'2'},
        {title:'视频',name:'3'},
        {title:'娱乐',name:'4'},
        {title:'健康',name:'5'},
        {title:'常识',name:'6'}
      ],
      dataList:[
        {text:'洪金宝终于不再沉默，回应范丞丞身世之谜，网友：早说不就好了'},
        {text:'洪金宝终于不再沉默，回应范丞丞身世之谜，网友：早说不就好了'},
        {text:'洪金宝终于不再沉默，回应范丞丞身世之谜，网友：早说不就好了'},
        {text:'洪金宝终于不再沉默，回应范丞丞身世之谜，网友：早说不就好了'},
      ]
    }
  },
  components:{Newslist},
  created(){
    // this.onload();
  },
  methods:{
    onload(){
      apiAddress({
        type:'0'
      }).then(res=>{
        
      })
    },
    changeList(name,title){
      if(name=='2'){
        this.dataList.push({text:'13231'})
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
