export default defineAppConfig({
  pages: [
    'pages/Home/index',
    'pages/Feature/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/Home/index',
        text:'首页'
      },
      {
        pagePath: 'pages/Feature/index',
        text:'Feature'
      },
    ]
  }
})
