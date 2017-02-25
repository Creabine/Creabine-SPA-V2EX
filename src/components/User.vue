<template>
	<div>
		<div class="panel panel-default margin">
			<ul class="list-group">
			  <li class="list-group-item">
				  <div class="media-left">
				    <router-link to="/user">
			          <img class="media-object" :src="user.avatar_normal" :alt="user.username">
			        </router-link>
				  </div>
				  <div class="media-body">
				    <h4 class="media-heading" v-text="user.username"></h4>
				    <p><span class="glyphicon glyphicon-cog" v-text="">前端工程师</span></p>
				    <p>
					    V2EX 第 {{user.id}} 号会员，加入于 {{user.created}}，今日活跃度排名 4641
				    </p>
				    <hr />
				     <span class="glyphicon glyphicon-xbt" aria-hidden="true"></span> <a href="http://blog.csdn.net/creabine" target="_blank">Blog</a>

				     <span class="glyphicon glyphicon-blackboard" aria-hidden="true"></span> <a href="https://github.com/creabine" target="_blank">Creabine.github</a>
				  </div>
			  </li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
	          // 从store中取出数据
	          user : this.$store.state.user
	        }
	    },
	}
</script>

<style>
</style>