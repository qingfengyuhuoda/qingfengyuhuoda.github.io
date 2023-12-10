<script setup lang="ts">
//import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900");
import { useuserStore } from '../stores/userstore'
const authStore = useuserStore()
</script>

<template>
<div class="gaming-library">
    <div class="col-lg-12">
        <div class="heading-section">
        <h4><em>Your Achievement</em> Library</h4>
        <h4><em></em> 成就列表</h4>
        </div>
        <div class="item">
            <ul>
                <li><img src="../assets/images/computing.png" alt="" class="templatemo-item"></li>
                <li><h4>第一个2048</h4></li>
                <li><h4></h4><span></span></li>
                <li><h4>Time</h4><span>no </span></li>
                <li><h4>Percentage Complete</h4><span>{{ authStore.info.achieve1 }}</span></li>
                <li><span v-if="authStore.info.achieve1"><div class="main-border-button "><a href="#">Finish</a></div></span>
                  <span v-else="authStore.info.achieve1"><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></span></li>
            </ul>
            
        </div>
        <div class="item">
            <ul>
                <li><img src="../assets/images/ages.png" alt="" class="templatemo-item"></li>
                <li><h4>进行一场对战</h4><span></span></li>
                <li><h4></h4><span></span></li>
                <li><h4>Time</h4><span>no</span></li>
                <li><h4>Percentage Complete</h4><span>{{ authStore.info.achieve2 }}</span></li>
                <li><span v-if="authStore.info.achieve2"><div class="main-border-button "><a href="#">Finish</a></div></span>
                  <span v-else="authStore.info.achieve2"><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></span></li>
            </ul>
        </div>
        <div class="item last-item">
            <ul>
                <li><img src="../assets/images/paper.png" alt="" class="templatemo-item"></li>
                <li><h4>获得一次胜利</h4><span></span></li>
                <li><h4></h4><span></span></li>
                <li><h4>Time</h4><span>no</span></li>
                <li><h4>Percentage Complete</h4><span>{{ authStore.info.achieve3 }}</span></li>
                <li><span v-if="authStore.info.achieve3"><div class="main-border-button "><a href="#">Finish</a></div></span>
                  <span v-else="authStore.info.achieve3"><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></span></li>
            </ul>
        </div>
        <div class="item last-item">
            <ul>
                <li><img src="../assets/images/paper.png" alt="" class="templatemo-item"></li>
                <li><h4>获得一次胜利</h4><span></span></li>
                <li><h4></h4><span></span></li>
                <li><h4>Time</h4><span>no</span></li>
                <li><h4>Percentage Complete</h4><span>{{ authStore.info.achieve4 }}</span></li>
                <li><span v-if="authStore.info.achieve4"><div class="main-border-button "><a href="#">Finish</a></div></span>
                  <span v-else="authStore.info.achieve4"><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></span></li>
            </ul>
        </div>
        <div class="item last-item">
            <ul>
                <li><img src="../assets/images/paper.png" alt="" class="templatemo-item"></li>
                <li><h4>获得一次胜利</h4><span></span></li>
                <li><h4></h4><span></span></li>
                <li><h4>Time</h4><span>no</span></li>
                <li><h4>Percentage Complete</h4><span>0%</span></li>
                <li><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></li>
            </ul>
        </div>
    </div>
</div>
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
ul, li {
  padding: 0;
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

.templatemo-item {
	max-width: 80px; 
	border-radius: 23px;
}


.main-border-button a {
  font-size: 14px;
  color: #ec6090;
  background-color: transparent;
  border: 1px solid #ec6090;
  padding: 12px 30px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  width: 180px;
}

.main-border-button a:hover {
  border-color: #fff;
  background-color: #fff;
  color: #e75e8d;
}

.border-no-active a {
  border-color: #666;
  color: #666;
}

.border-no-active a:hover{
  border-color: #666;
  color: #666;
  background-color: transparent;
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
--------------------------------------------- 
*/


/* 
---------------------------------------------
Header Style
--------------------------------------------- 
*/


/* 
---------------------------------------------
Banner Style
--------------------------------------------- 
*/

/* 
---------------------------------------------
Gaming Library Style
--------------------------------------------- 
*/

.gaming-library {
  
  margin-top: 140px;
  padding: 30px;
  background-color: #1f2122;
  border-radius: 23px;
}

.gaming-library .item {
  border-bottom: 1px solid #27292a;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.gaming-library .last-item {
  margin-bottom: 30px;
}

.profile-library .last-item {
  border-bottom: none;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.gaming-library .item ul li {
  margin-top: 15px;
}

.gaming-library .item ul li img {
  margin-top: -30px;
}

.gaming-library .item ul li {
  display: inline-block;
  width: 17%;
}

.gaming-library .item ul li:first-child {
  width: 110px;
}

.gaming-library .item ul li:last-child {
  width: 15%;
  text-align: right;
}

.gaming-library .item ul li h4 {
  font-size: 15px;
  margin-bottom: 5px;
}

.gaming-library .item ul li span {
  color: #666;
  font-size: 14px;
}

.gaming-library .main-button {
  text-align: center;
  margin-bottom: -53px;
}

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


/* 
---------------------------------------------
Start Stream Style
--------------------------------------------- 
*/


/* 
---------------------------------------------
Responsive Style
--------------------------------------------- 
*/

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

@media (max-width: 1200px) {
  .header-area .main-nav .nav li {
    padding-right: 5px;
    padding-left: 5px;
  }
  .header-area .main-nav .logo {
    margin-right: 30px;
    border-right: none;
  }
  .gaming-library .item ul li {
    width: 16%;
  }
}
</style>