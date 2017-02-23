<template>
	<div>
		<navbar></navbar>
	  	<div class="panel panel-default">
		  <div class="panel-body">
		    这里放循环的内容
		  </div>
		</div>
		<div class="panel panel-default">
		  <div class="panel-body">
		    这里放循环的内容
		  </div>
		</div>
	</div>
</template>

<script>
	import Navbar from './Navbar.vue'
	export default {
		components: { 'navbar': Navbar }
	}
</script>