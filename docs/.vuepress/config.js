module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  title: "XShare",
  description: "分享，让世界更美好...",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?121691850397bf2a9201e94d724e417c";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `,
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      { text: "留言板", icon: "reco-message", link: "/leavecomment/" },
    ],
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {},
      tag: {},
    },
    friendLink: [
      // {
      //   title: '',
      //   desc: '',
      //   email: '',
      //   link: ''
      // }
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "XShare",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 项目开始时间
    startYear: "2020",
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: "toL0XHRivHc7w0XIJmwapfSN-gzGzoHsz",
      appKey: "q1i08aGF997WVj8pjXUcUzik", // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
