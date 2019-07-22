module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      //Mock接口
      //每次更改配置文件，重启项目才会生效
      before(app) {
        // app.get('url',(req,res)=>{//req请求参，res返回参
        //   res.json({

        //   })
        // })

        //用户信息池
        let userpoor = [{
          username: '123',
          password: '123456'
        }]
        //注册接口
        app.get('/api/register', (req, res) => {
          const {
            username,
            password
          } = req.query
          const userlength = userpoor.filter(v => v.username === username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        //登录接口
        let tokenkey = 'ying'
        app.get('/api/login', (req, res) => {
          const {
            username,
            password
          } = req.query
          if (username === '123' && password === '123456') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}