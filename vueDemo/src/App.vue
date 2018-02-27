<template>
  <div id="app">
  	<Nav class=""></Nav>
    <div class="content">
    	<router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav'
export default {
  name: 'App',
  components:{
  	'Nav':Nav
  }
}
</script>

<style>
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td{margin: 0;padding: 0;font-family: Arial, "Microsoft YaHei", 宋体, sans-serif;}

li{list-style: none;}
a:active{text-decoration: none;color:#333;}
a{text-decoration: none;color:#333} 
.nav{
	display: block;
	font-size: 16px;
	position: fixed;
	top: 0;
	width: 100%;
}
.content{
	position: fixed;
	top: 65px;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-y:auto ;
	width: 100%;
}

</style>
