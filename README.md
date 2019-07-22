# shopping

### 安装依赖

```
npm install
```

### 开启服务
```
npm run serve
```

### 项目简介

这是一个小型的移动端电商项目，使用cube-ui组件库，因为一时间不知道找什么素材，就借用了平安京的图片，使用easy-mock创建接口，返回数据，因为刚开始学习vue，项目比较小，一些地方的实现还比较粗糙，做个小总结，供日后回顾。

### 项目总结

主要用到的技术

- 使用脚手架cli快速构建工程项目

- 接口实现
  - 本地编写登录接口，返回所需要信息
  - 通过Easy-mock创建接口，返回所需信息

- 使用cube-ui组件实现轮播图以及商品类别滑动，以及商品分类

- 动态获取滚动盒子高以兼容不同屏幕高度场景

- 使用vuex实现购物车内部的增加、减少及清空购物车功能

- 使用vuex配合实现添加商品到购物车以及底部导航栏实时显示购物车数量

- vuex配合本地存储实现购物车数据持久化

  ```javascript
  store.subscribe((mutations, state) => {
    localStorage.setItem('item', JSON.stringify(state.list))
  })
  ```

- 使用嵌套路由实现不同tab页的切换

  ```javascript
  {
        path: '/nav',
        name: 'nav',
        component: () => import('./views/Nav.vue'),
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('./views/Index.vue')
          },
          {
            path: 'list',
            name: 'list',
            component: () => import('./views/List.vue')
          },
          {
            path: 'search',
            name: 'search',
            component: () => import('./views/Search.vue')
          },
          {
            path: 'car',
            name: 'car',
            meta: {
              requireAuth: true, //当有该字段时，该路由需要登录权限
            },
            component: () => import('./views/Car.vue')
          },
          {
            path: 'mine',
            name: 'mine',
            meta: {
              requireAuth: true, //当有该字段时，该路由需要登录权限
            },
            component: () => import('./views/Mine.vue')
          }
        ]
      }
  ```

- 实现路由守卫，购物车和我的页面未经登录不能进去

  ```javascript
  router.beforeEach((to, from, next) => {
    //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
    store.commit('setToken', localStorage.getItem('token'))
    if (to.meta.requireAuth) {//在router.js里面给需要权限的字段配置该属性
      if (store.state.token) {
        next()
      } else {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      }
    } else {
      next()
    }
  })
  ```

- 使用axios实现请求拦截

  ```javascript
  axios.interceptors.request.use(
          res => {
              //拦截处理
              return res
          }
  )
  ```

### 遇到的问题

1. 由于路由懒加载所出现的Loading chunk {n} failed错误

   在使用vue-router并且使用路由懒加载的情况下，访问当前应用进行路由跳转时都是实时动态的从服务器上拉取相应模块的js文件，这时候我们改完代码打包上线，js文件名更换了，路由跳转的时候由于页面并未刷新，所以还是访问的原来的文件名，这是就会出现找不到模块的错误。

   解决办法：

   ```javascript
   router.onError((error) => {
     const pattern = /Loading chunk (\d)+ failed/g;
     const isChunkLoadFailed = error.message.match(pattern);
     if (isChunkLoadFailed) {
       window.location.reload();
       // router.replace(router.history.pending.fullPath);
     }else{
       console.log(error)
     }
   });
   ```

2. easy-mock动态响应接口的实现

   通过请求参数，编写相应函数来获取返回的数据

   ```javascript
    items: function({
         _req,//请求参数
         Mock
       }){
        const list=[...]//数据源
        var newArr = [];
        if (_req.query.type == 0) {
           newArr = list;
        } else {
           for (let i = 0; i < list.length; i++) {
             if (list[i].id == _req.query.type) {
               newArr.push(list[i])
             }
           }
         }
         return newArr
    }
   ```

3. 关于滚动盒子高度的动态获取

   ```javascript
   const box = document.querySelector('.box')
   const bodyheight = document.documentElement.clientHeight
   box.style.height = bodyheight - 58 + 'px'//58是底部tab栏的高度
   ```

### 项目截图

登录页面：

![demo1](https://github.com/yingclover/img-source/raw/master/shopping-img/demo1.png)

首页：

![demo2](https://github.com/yingclover/img-source/raw/master/shopping-img/demo2.png)

分类页：

![demo3](https://github.com/yingclover/img-source/raw/master/shopping-img/demo3.png)

购物车：

![demo4](https://github.com/yingclover/img-source/raw/master/shopping-img/demo4.png)

我的：

![demo5](https://github.com/yingclover/img-source/raw/master/shopping-img/demo5.png)