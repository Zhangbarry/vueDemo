<template>
  <div class="topic">
 			<div v-for='topic in topic'> 
 					<ul>
 						<li>
 							<img :src="topic.Image" alt="" />
 						</li>
 						<li>
 							<div class="topic-title">{{topic.Title}}</div>
 							<div class="topic-content" v-html="topic.Content"></div>
 							<div class="topic-time">
 								<span>时间</span>
 								<span>{{topic.CreateTime}}</span>
 							</div>
 						</li>
 					</ul>
 			</div>
  </div>
</template>

<script>
export default {
  name: 'point',
  data () {
    return {
      topic:[]
    }
  },
  mounted(){
  	this.$nextTick(function(){
  		 this.pointData();
  	})
  },
  methods:{
  	
  	pointData(){
  		this.$http.get('http://106.14.32.113:8085/api/Interactive/GetToDayHotArgument').then(res=>{
  				this.topic = res.data.Data;
  		})
  	}
  	
  	
  	
  	
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic{
	width: 100%;
	overflow: hidden;
}

.topic img{
	display: block;
	width: 80%;
	margin: 1rem auto;
}

.topic .topic-title{
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	padding: .5rem 0 1em 0;
}
.topic .topic-content{
	font-size: 16px;
	color: #666;
	width: 96%;
	margin: .5rem auto;
}
.topic .topic-time{
	font-size: 12px;
	color: #999;
	width: 96%;
	margin: .3em auto;
}
</style>
