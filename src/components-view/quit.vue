<script setup lang="ts">
import { useuserStore } from '../stores/userstore'
import { useClassicalGameStore } from '../stores/classicGame';
const authStore = useuserStore()
const game=useClassicalGameStore()
const ifuser = authStore.isAuthenticated
import {useRouter} from 'vue-router'
const router = useRouter()
const quitnow = () => {
  authStore.removeInfo()
  authStore.setIsAuthenticated(false)
  game.removehighScore()
  router.push('/index')
};
</script>

<template>
  <div class="rowoutside">
    <div class="col-lg-12">
      <div class="main-profile ">
        <div class="row" v-if="!ifuser">
          <div class="col-lg-4">
            <img class="custom-image" src="src/assets/images/2048logo_1.png" alt="" >
          </div>
          <div class="col-lg-4 align-self-center">
            <div class="main-info header-text">
              <br />
              <br />
              <br />
              <span>Offline</span>
              <h4>Player</h4>
              <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
              <div class="main-border-button">
                <router-link to="/register">登录</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 align-self-center">
            <br />
            <br />
            <br />
            <ul>
              <li>Games <span>no</span></li>
              <li>Friends Online <span>no</span></li>
              <li>achievement <span>no</span></li>
            </ul>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-lg-4">
            <img class="custom-image" src="src/assets/images/2048logo_1.png" alt="" >
          </div>
          <div class="col-lg-4 align-self-center">
            <div class="main-info header-text">
              <br />
              <br />
              <br />
              <span>Online</span>
              <h4>Player</h4>
              <div class="main-border-button" >
                <router-link to="/index">Start Game</router-link>
              </div>
              <div class="main-border-button" @click="quitnow">
                <button  class="custom-button" @click="quitnow">
                  退出登录
                </button >
              </div>
            </div>
          </div>
          <div class="col-lg-4 align-self-center">
            <br />
            <br />
            <br />
            <ul>
              <li>Games <span>1</span></li>
              <li>Friends Online <span>no</span></li>
              <li>achievement <span>no</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang ="scss" scoped>
.custom-image {
  margin-right: 103px; /* 调整图片位置，向左移动10像素 */
  border-radius: 40px;
  // align-items: center; /* 垂直居中 */
  position: relative; /* 设置图片的定位为相对定位 */
  top: 40px;
}
.row{
  //   justify-content: center; /* 水平居中 */
  // align-items: center; /* 垂直居中 */
    position: relative; /* 设置图片的定位为相对定位 */
  top: -30px;
  display: flex;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
div pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
figure,
header,
nav,
section,
article,
aside,
footer,
figcaption {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

.rowoutside {
  display: flex;
  margin-top: 160px;
  padding: 30px;
}

.rowoutside>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  
}



.row>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}



.col-lg-4 {
  width: 33.33333333%;
  flex: 0 0 auto;
  
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

header,
nav,
section,
article,
aside,
footer,
hgroup {
  display: block;
}

* {
  box-sizing: border-box;
}

html,
body {
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

h1,
h2,
h3,
h4,
h5,
h6 {
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


.main-border-button a {
  // align-items: center;
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
.custom-button {
  
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
.custom-button:hover {
  border-color: #fff;
  background-color: #fff;
  color: #e75e8d;
}

section {
  
  margin-top: 120px;
}









/* 
---------------------------------------------
Profile Style
--------------------------------------------- 
*/

.main-profile {
  border-radius: 23px;
  padding: 30px;
  background-color: #221f22;
}

.main-profile .main-info span {
  //   position: relative; /* 设置图片的定位为相对定位 */
  // top: 100px;
  font-size: 18px;
  color: #fff;
  background-color: #e75e8d;
  padding: 10px 40px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  margin-top: 0px;
  margin-bottom: 15px;
}

.main-profile .main-info h4 {
  margin-bottom: 20px;
}

.main-profile .main-info .main-border-button {
  margin-top: 25px;
}

.main-profile ul {
  border-radius: 23px;
  padding: 30px;
  background-color: #27292a;
}

.main-profile ul li {
  width: 100%;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
}

.main-profile ul li span {
  float: right;
  font-weight: 500;
  color: #ec6090;
}

.main-profile ul li:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}


</style>