<template>
	<div>
		<img class="headerImg" src="../assets/6.jpg" />
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
						label: '注册'
					}
				]
			}
		}
	},
	methods: {
		submitHandler(e) {
			//阻止表单自动提交
			e.preventDefault()
			this.$http
				.get('/api/register', { params: this.model })
				.then(res => {
					console.log(res.success)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
</script>

<style lang="stylus" scoped>
.headerImg
	height: 200px
	width: 100%
</style>

