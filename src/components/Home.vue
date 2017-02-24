<template>
	<div>
		<navbar></navbar>
		<button type="button" class="btn btn-default btn-lg" @click="getHottestList()">
		  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> get hottest
		</button>

		<button type="button" class="btn btn-default btn-lg" @click="getLatestList()">
		  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> get latest
		</button>
	  	<div class="panel panel-default margin" v-for="item in itemList">
			<ul class="list-group">
			  <li class="list-group-item">
			      <span class="badge mid" v-text="item.replies"></span>
				  <div class="media-left">
				    <router-link to="/home">
			          <img class="media-object" :src="item.member.avatar_normal" alt="">
			        </router-link>
				  </div>
				  <div class="media-body">
				    <h4 class="media-heading" v-text="item.title"></h4>
				    <span class="label label-default" v-text="item.node.title"></span>
				    <span  v-text="item.member.username"></span>
				    <span v-text="item.created"></span>
				    <span v-text="item.last_modified"></span>
				  </div>
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Navbar from './Navbar.vue'
	//假数据
	import hottest from '../../static/hottest.json'
	import latest from '../../static/latest.json'

	export default {
		components: { 'navbar': Navbar },
		computed : {
			itemList () {
	          // 从store中取出数据
	          return this.$store.state.itemList
	        }
	    },
		methods : {
		  getHottestList() {
		  	console.log(hottest);
		  	this.$store.dispatch('getHottestList',hottest);
		  },
		  getLatestList() {
		  	console.log(latest);
		  	this.$store.dispatch('getLatestList',latest);
		  }
		},
	}


	


</script>

<style>
.mid{margin-top: 15px;}
.margin{margin-bottom: 0px !important;}
</style>