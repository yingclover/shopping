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
        //轮播图接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [{
                url: 'https://moba.163.com/2019/summer/',
                image: 'https://fz.fp.ps.netease.com/file/5d1c762096dee4be7c1203aeszWe0QUA02'
              },
              {
                url: 'https://moba.163.com/2019/dypf/',
                image: 'https://fz.fp.ps.netease.com/file/5d148a235e60279d1f819f744imE4hBA02'
              },
              {
                url: 'https://moba.163.com/2019/wf/bjq/',
                image: 'https://fz.fp.ps.netease.com/file/5cf887445e6027d58a780f88WBYksUOQ02'
              }
            ]
          })
        })
        //滚动分类接口
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [{
                  url: 'http://moba.163.com/ssl/page.html?id=1003',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b2786fdca7c525d5ePbgoq31G02',
                  label: '大天狗'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1059',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b6f0494c8d72334b3PwQsC2O902',
                  label: '雪童子'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1011',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b8b74273124eeec05F6eqUyBq02',
                  label: '酒吞童子'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1056',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c6f0494ef187c6810BraWPbx602',
                  label: '彼岸花'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1043',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c7f9d2a9b27b43d93pKR4l8yl02',
                  label: '狸猫'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1036',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c2786fdc885565373Li52QJub02',
                  label: '青行灯'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1075',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b5e6027535c7204ed4G1Gq6AW02',
                  label: '面灵气'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1008',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b96dee435805c39b3FDcbaeg902',
                  label: '妖狐'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1055',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c96dee4399425721bBVDCDwEo02',
                  label: '小松丸'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1018',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c143cfaafa2024d7eL2qQwNFT02',
                  label: '二口女'
                },
              ],
              [{
                  url: 'http://moba.163.com/ssl/page.html?id=1020',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05b5e602741ba9c7ce4sz4bmXxK02',
                  label: '一目连'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1062',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5d3075ea5e6027b04f5076d6Alr1ZgpC02',
                  label: '花鸟卷'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1009',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05ca7f252a5bed5bd92lErRVwkb02',
                  label: '惠比寿'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1050',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c5e60270bc9f8f6e1iPcJbSt402',
                  label: '莹草'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1021',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05ca7f252a9b7be42aamKPwpjoc02',
                  label: '海坊主'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1058',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c945701d776cf3900481ccbcTGgksS202',
                  label: '桃花妖'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1010',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c96dee41fbf821f92lb9KBlte02',
                  label: '山兔'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1030',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c2786fde53e2132afUdKPTMHU02',
                  label: '辉夜姬'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1041',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c7f9d2a9b27b43d94SAt8gix702',
                  label: '以津真天'
                },
                {
                  url: 'http://moba.163.com/ssl/page.html?id=1038',
                  image: 'https://g.fp.ps.netease.com/doraemon/file/5c73a05c6f0494bfab4bf222sUzgSJ4h02',
                  label: '万年竹'
                },
              ],
            ]
          })
        })
        //获取分类页的分类接口
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [{
                    image: 'https://nie.res.netease.com/r/pic/20190705/5f481c20-7809-4045-a214-243a9eac75f6.png',
                    label: '朝华之刃'
                  },
                  {
                    image: 'https://nie.res.netease.com/r/pic/20190705/819632c0-8f1e-4bf9-beb8-cab0a7ed6957.png',
                    label: '海滩酷鸭'
                  },
                  {
                    image: 'https://nie.res.netease.com/r/pic/20190705/7587a3a7-0b66-43ec-bb5a-1918d8e97bc1.png',
                    label: '山雨空明'
                  },
                  {
                    image: 'https://nie.res.netease.com/r/pic/20190719/f19e31fd-4567-4b78-bdb1-602553bec681.png',
                    label: '激浪逐夏'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },

                ]
              });
              break;
            case '1':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                data: [{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                data: [{
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                data: [{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                ]
              });
              break;
            case '6':
              res.json({
                data: [{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
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