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
        </div>
        <div class="item">
        <ul>
            <li><img src="../assets/images/computing.png" alt="" class="templatemo-item"></li>
            <li><h4>第一个2048</h4></li>
            <li><h4></h4><span></span></li>
            <li><h4>Time</h4><span>no </span></li>
            <li><h4>Percentage Complete</h4><span>0%</span></li>
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
            <li><h4>Percentage Complete</h4><span>0%</span></li>
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
            <li><h4>Percentage Complete</h4><span>0%</span></li>
            <li><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></li>
        </ul>
        </div>
    </div>
    <div class="col-lg-12">
        <div class="main-button">
          <router-link to="/achievement"><a>View Your Library</a></router-link>
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
}.row{
  display: flex;
}
.row>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
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

body .page-content {
  margin-top: 30px;
  background-color: #27292a;
  padding: 60px;
  border-radius: 23px;
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
Most Popular Style
--------------------------------------------- 
*/


/* 
---------------------------------------------
Gaming Library Style
--------------------------------------------- 
*/

.gaming-library {
  margin-top: 160px;
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
/* 
---------------------------------------------
Responsive Style
--------------------------------------------- 
*/


</style>