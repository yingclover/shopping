<template>
	<div>
		<img
			class="headerImg"
			src="https://github.com/yingclover/img-source/raw/master/shopping-img/login.jpg"
		/>
		<cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			model: {
				username: '',
				password: ''
			},
			schema: {
				fields: [
					{
						type: 'input',
						modelKey: 'username',
						label: '用户名',
						props: {
							placeholder: '请输入用户名'
						},
						rules: {
							//校验规则
							required: true,
							type: 'string',
							min: 3,
							max: 15
						},
						trigger: 'blur', //失去焦点检测
						messages: {
							requried: '用户名不能为空',
							min: '用户名不能小于3个字符',
							max: '用户名不能大于15个字符'
						}
					},
					{
						type: 'input',
						modelKey: 'password',
						label: '密码',
						props: {
							placeholder: '请输入密码',
							type: 'password',
							eye: {
								open: false
							}
						},
						rules: {
							//校验规则
							required: true
						},
						trigger: 'blur', //失去焦点检测
						messages: {
							requried: '密码不能为空'
						}
					},
					{
						type: 'submit',
						label: '登录'
					}
				]
			}
		}
	},
	methods: {
		async submitHandler(e) {
			//阻止表单自动提交
			e.preventDefault()
			try {
				const result = await this.$http.get('/api/login', {
					params: this.model
				})
				if (result.code == '0') {
					this.$store.commit('setToken', result.token)
					window.localStorage.setItem('token', result.token)
					//判断路由是否带参，带参就去到重定向参数地址，否则就去首页
					if (this.$route.query.redirect) {
						this.$router.replace({
							path: this.$route.query.redirect
						})
					} else {
						this.$router.replace({ path: '/nav/index' })
					}
				} else {
					alert(result.message)
				}
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.headerImg
	height 200px
	width 100%
</style>

