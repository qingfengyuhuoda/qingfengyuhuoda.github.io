<script setup lang="ts">
//import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900");
  import navigation from './Navigation.vue';
    import {ref} from 'vue';
    import end from './end.vue'
    import axios from 'axios';
    //定义响应式数据  ref
    const articleList = ref(
      [
        {
          id: '',
        username: '',
        score:'' 
        },
        {
          id: '',
        username: '',
        score:'' 
        },
        {
          id: '',
        username: '',
        score:'' 
        },
        {
          id: '',
        username: '',
        score:'' 
        },
        {
          id: '',
        username: '',
        score:'' 
        }
      ]
    );
    axios.get('http://101.200.36.91:9090/user/paiming')
    .then(result=>{
      
      articleList.value=result.data.data;
      console.log(articleList.value);
    }).catch(err=>{
      console.log(err);
    });
        //获取所有文章数据
    //同步获取articleGetAllService的返回结果  async await
    // const getAllArticle=async function(){
    //     let data = await articleGetAllService();
    //     articleList.value=data;
    // }

    // getAllArticle();
   
</script>

<template>
  <navigation></navigation>
  <div class="col-lg-4">
    <div class="top-streamers">
      <div class="heading-section">
        <h4><em >Top</em> Players</h4>
        <h4>    新的记录等你冲击！</h4>
      </div>
      <ul class="custom-ul">
        <li>
            <h2>名次</h2>
            <h1>用户名</h1>
            <h4>单人分数</h4>
            <h5>对战分数</h5>
        </li>
        <li>
          <h2>01</h2>
            <img src="../assets/images/avatar01.jpg" alt="" style="max-width: 46px; border-radius: 50%; margin-right: 15px;">
              <h6><i class="fa fa-check"></i> {{articleList[0].username}}</h6>
              <h4>{{articleList[0].score}}</h4>
              <h5>0</h5>
            <div class="main-button">
              <a href="#">Follow</a>
            </div>
        </li>
        <li>
          <h2>02</h2>
          <img src="../assets/images/avatar02.jpg" alt="" style="max-width: 46px; border-radius: 50%; margin-right: 15px;">
          <h6><i class="fa fa-check"></i> {{articleList[1].username}}</h6>
          <h4>{{articleList[1].score}}</h4>
          <h5>0</h5>
          <div class="main-button">
            <a href="#">Follow</a>
          </div>
        </li>
        <li>
          <h2>03</h2>
          <img src="../assets/images/avatar03.jpg" alt="" style="max-width: 46px; border-radius: 50%; margin-right: 15px;">
          <h6><i class="fa fa-check"></i> {{articleList[2].username}}</h6>
          <h4>{{articleList[2].score}}</h4>
          <h5>0</h5>
          <div class="main-button">
            <a href="#">Follow</a>
          </div>
        </li>
        <li>
          <h2>04</h2>
          <img src="../assets/images/avatar04.jpg" alt="" style="max-width: 46px; border-radius: 50%; margin-right: 15px;">
          <h6><i class="fa fa-check"></i> {{articleList[3].username}}</h6>
          <h4>{{articleList[3].score}}</h4>
          <h5>0</h5>
          <div class="main-button">
            <a href="#">Follow</a>
          </div>
        </li>
        <li>
          <h2>05</h2>
          <img src="../assets/images/avatar01.jpg" alt="" style="max-width: 46px; border-radius: 50%; margin-right: 15px;">
          <h6><i class="fa fa-check"></i> {{articleList[4].username}}</h6>
          <h4>{{articleList[4].score}}</h4>
          <h5>0</h5>
          <div class="main-button">
            <a href="#">Follow</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <end></end>
</template>
<style lang ="scss" scoped>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, div
pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q,
s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
figure, header, nav, section, article, aside, footer, figcaption {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}
.custom-ul {
  list-style: none;
  padding: 0;
}

li {
  text-align: left; /* 设置文本左对齐 */
  /* 其他样式属性，如间距、边框等，根据需要进行设置 */
  transform-origin: left; /* 设置变换原点为左边缘 */
  transform: scale(1); 
}

// .headtext h1, .headtext h4 {
//   margin: 0; /* 去除标题文本的默认上下间距 */
// }
.fa {
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: var(--fa-style, 900); }
.fa-check::before {
  content: "\265f"; }

ul, li {
  padding: 10px;
  margin: 0;
  list-style: none;
}

header, nav, section, article, aside, footer, hgroup {
  display: block;
}

* {
  box-sizing: border-box;
}

html, body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: #1e1e1e;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
	color: #CCC;
  text-decoration: none !important;
}
a:hover {
	color: #F99;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #fff;
  font-weight: 700;
}

ul {
  margin-bottom: 0px;
}

p {
  font-size: 15px;
  line-height: 30px;
  color: #fff;
}

img {
  width: 100%;
  overflow: hidden;
}

/* 
---------------------------------------------
Global Styles
--------------------------------------------- 
*/
html,
body {
  background: #1f2122;
  font-family: 'Poppins', sans-serif;
}

p {
  font-size: 15px;
  color: #666;
  line-height: 30px;
  margin-bottom: 0px;
}

::selection {
  background: #e75e8d;
  color: #fff;
}

::-moz-selection {
  background: #e75e8d;
  color: #fff;
}

.main-button a {
  font-size: 14px;
  color: #fff;
  background-color: #e75e8d;
  padding: 12px 30px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all .3s;
  position: relative;
  overflow: hidden;
}

.main-button a:hover {
  background-color: #fff;
  color: #e75e8d;
}


section {
  margin-top: 120px;
}

.heading-section h4 {
  color: #ec6090;
  font-size: 34px;
  text-decoration: none;
  margin-bottom: 30px;
}

.heading-section h4 em {
  color: #fff;
  font-style: normal;
  text-decoration: underline;
}

/* 
---------------------------------------------
Pre-loader Style
-----------
---------------------------------------------
Gaming Library Style
--------------------------------------------- 
*/

/* 
---------------------------------------------
Footer Style
--------------------------------------------- 
*/

footer p {
  text-align: center;
  padding: 30px 0px;
  color: #fff;
  font-weight: 300;
}

footer p a {
  color: #fff;
  transition: all .3s;
}

footer p a:hover {
  color: #ec6090;
}

/* 
---------------------------------------------
Featured Games Style
--------------------------------------------- 
*/


.top-streamers {
   margin-top: 140px;
  border-radius: 23px;
  background-color: #1f2122;
  padding: 30px;
  max-height: 867px;
  min-height: 567px;
}

.top-streamers ul li {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #353637;
  margin-bottom: 25px;
  padding-bottom: 25px;
}

.top-streamers ul li:last-child {
  border-bottom: none;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.top-streamers ul li span {
  float: left;
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  padding-top: 12px;
  margin-right: 10px;
}
.top-streamers ul li img{
position: absolute;
left: 200px; /* 距离左边的固定位置，可以根据需要调整 */
}
.top-streamers ul li h1 {
position: absolute;
left: 200px; /* 距离左边的固定位置，可以根据需要调整 */
  display: inline;
  font-size: 20px;
  color: #ec6090;
  font-weight: 400;
}

.top-streamers ul li h2 i {
  color: #fff;
  background-color: #ec6090;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 3px;
}
.top-streamers ul li h2 {
float: left;
  display: inline;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
}

.top-streamers ul li h1 i {
  color: #fff;
  background-color: #ec6090;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 3px;
}
.top-streamers ul li h4 {
  position: absolute;
  left: 400px;
  display: inline;
  font-size: 20px;
  color: #ec6090;
  font-weight: 400;
}

.top-streamers ul li h4 i {
  color: #fff;
  background-color: #ec6090;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 3px;
}
.top-streamers ul li h5 {
  position: absolute;
left: 600px;
  display: inline;
  font-size: 20px;
  color: #ec6090;
  font-weight: 400;
}

.top-streamers ul li h5 i {
  color: #fff;
  background-color: #ec6090;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 3px;
}
.top-streamers ul li h6 {
  position: absolute;
left: 250px;
margin-top: 20px;
  display: inline;
  font-size: 14px;
  color: #ec6090;
  font-weight: 400;
}

.top-streamers ul li h6 i {
  color: #fff;
  background-color: #ec6090;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin-right: 3px;
}
.top-streamers ul li .main-button {
  float: right;
}

.top-streamers ul li .main-button a {
  padding: 8px 20px;
}



body {
  overflow-x: hidden;
}

@media (max-width: 767px) {
  body .page-content {
    padding: 0px 30px;
  }
  .main-banner {
    text-align: center;
  }
  .main-banner h4 {
    font-size: 35px;
  }
  .gaming-library .item ul li,
  .gaming-library .item ul li:first-child,
  .gaming-library .item ul li:last-child {
    width: 100% !important;
    text-align: center !important;
  }
  .gaming-library .item ul li {
    margin-top: 30px;
  }
  .top-downloaded ul li .download i {
    top: 20px;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .top-downloaded ul li img {
    margin-right: 10px;
  }
  .top-downloaded ul li span {
    font-size: 14px;
  }
  .top-streamers ul li .main-button {
    float: none;
    margin-top: 10px;
  }
  .top-streamers ul li .main-button a {
    width: 100%;
    text-align: center;
  }
  .top-streamers,
  .top-downloaded {
    max-height: 100%;
    min-height: 100%;
  }
  .most-popular .item .inner-item {
    margin-bottom: 20px;
  }
}

@media (max-width: 992px) {
  .background-header {
  display: inline-block;
  }
  .header-area .main-nav #search {
    display: none;
  }
  .heading-section h4 {
    font-size: 20px;
  }
  .gaming-library .item ul li {
    width: 48% !important;
  }
  .gaming-library .item ul li:last-child {
    text-align: left;
  }
  .featured-games {
    margin-bottom: 60px;
  }
  .start-stream .item {
    margin: 15px 0px;
  }
  .feature-banner .thumb {
    margin-top: 30px;
  }
  .main-profile .main-info {
    margin: 45px 0px;
  }
}


</style>