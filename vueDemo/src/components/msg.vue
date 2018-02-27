<template>
  <div class="massage">
			<div class="frame" v-for="item in com">
				<div class="model">
					<img :src="item.headimgurl" alt="" />
				</div>
				<div class="model question">
					<div>
						<span class="massage-name">{{item.nickname}}</span>
						<span>{{item.Likes}}</span>
					</div>
					<div>{{item.Question}}</div>
					<div class="massage-time">
						{{item.CreateTime}}
					</div>
				</div>
			</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'massage',
  data () {
    return {
      com:[]
    }
  },
  mounted(){
						this.$nextTick(function(){
								this.leaveMsg();
						})
					},
	methods:{
						leaveMsg:function(){
							this.$http.get('http://106.14.32.113:8085/api/Interactive/GetUserLeaveMsgById').then((res)=>{
								this.com = res.data.Data;
				       })
						}
					}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.massage{width:96%;margin:0 auto;}
.massage .frame{padding:5px 0;border-top:1px solid #eaeaea;margin-bottom:5em;font-size:14px;clear:both;}
.massage .frame .model{float:left;}
.massage .frame .model img{width:40px;height:40px;border-radius:100px ;}
.massage .frame .question{width:calc(100% - 40px);}
.massage-name{padding:.8em 6px;font-weight:bold;}
.massage-time{font-size:12px;padding:.5em 0;color:#999;}
</style>
