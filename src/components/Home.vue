<template>
	<div>
		<Navbar></Navbar>
	  	<div class="panel panel-default">
		  <div class="panel-body">
		    这里放循环的内容
		  </div>
		  <div class="panel-body">
		    这里放循环的内容
		  </div>
		</div>
	</div>
</template>

<script>
	import Navbar from './Navbar.vue'
	export default {
		comments: { 'Navbar': Navbar }
	}
</script>