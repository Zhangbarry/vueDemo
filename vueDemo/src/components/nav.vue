<template>
  <div>
  	<ul class="nav">
  		<li>
  			<router-link to='/' exact active-class="isActive">留言</router-link>
  		</li>
  		<li>
  			<router-link to='point' active-class="isActive">观点</router-link>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
    	com:[]
    }
  },
  methods:{
  	
  },
	mounted(){
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	width: 96%;
	margin: 0 auto;
}
.nav li{
	display: inline-block;
	padding: 1em;
}
.isActive{color: red;}
</style>
