<template>
	<div>
		<navbar></navbar>
	  	<div class="panel panel-default">
			<ul class="list-group">
			  <li class="list-group-item">
			      <span class="badge mid">14</span>
				  <div class="media-left">
				    <router-link to="/home">
			          <img class="media-object" src="//v2ex.assets.uxengine.net/gravatar/89527949f22cfc1daea7f5016940a708?s=48&d=retro" alt="">
			        </router-link>
				  </div>
				  <div class="media-body">
				    <h4 class="media-heading">github真的访问不了吗？</h4>
				    <span class="label label-default">分享发现</span>
				    <span>作者：kalasoo</span>
				    <span>发帖时间：2分钟前</span>
				    <span>最后回复来自sollee</span>
				  </div>
			
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Navbar from './Navbar.vue'
	export default {
		components: { 'navbar': Navbar }
	}
</script>

<style>
.mid{margin-top: 15px;}
</style>