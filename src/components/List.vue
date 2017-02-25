<template>
	<div>
		<div class="btn-group btn-gounp-margin" role="group" aria-label="...">
		  <button type="button" @click="getHottestList()" class="btn btn-default">Hottest</button>
		  <button type="button" @click="getLatestList()" class="btn btn-default">Lattest</button>
		</div>

	  	<div class="panel panel-default item-margin" v-for="item in itemList">
			<ul class="list-group pointer" @click="toDetail(item.id)">
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
	//假数据
	import hottest from '../../static/hottest.json'
	import latest from '../../static/latest.json'

	export default {
		computed : {
			itemList () {
	          // 从store中取出数据
	          return this.$store.state.itemList
	        }
	    },
	    mounted(){
	    	this.getHottestList();
	    },
		methods : {
		  getHottestList() {
		  	//console.log(hottest);
		  	this.$store.dispatch('getHottestList',hottest);
		  },
		  getLatestList() {
		  	//console.log(latest);
		  	this.$store.dispatch('getLatestList',latest);
		  },
		  toDetail(id){
		  	window.open('https://www.v2ex.com/t/' + id);
		  	//alert(id);
		  }
		},
	}


	


</script>

<style>
.mid{margin-top: 15px;}
.btn-gounp-margin{margin-bottom: 20px;}
.item-margin{margin-bottom: 0px !important;transition: all 0.5s;}
.item-margin li{transition: all 0.5s;}
.item-margin:hover{padding: 5px 0;background-color: #f8f8f8;}
.item-margin:hover li{background-color: #f8f8f8;}
.pointer{cursor: pointer;}
</style>