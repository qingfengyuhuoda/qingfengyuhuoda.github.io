<script setup lang="ts">
//import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900");
import { useuserStore } from '../stores/userstore'
const authStore = useuserStore()
</script>

<template>
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <router-link to="/index" class="logo">
                        <img src="../assets/images/rc.jpg" >
                    </router-link>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Search End ***** -->
                    <!-- <div class="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Search More Games?" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i class="fa fa-search"></i>
                      </form>
                    </div> -->
                    <!-- ***** Search End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <li><router-link to="/index"><p class="active">首页</p></router-link></li>
                        <li><router-link to="/details"><p>教程</p></router-link></li>
                        <li><router-link to="/classic"><p>游戏</p></router-link></li>
                        <li><router-link to="/battle"><p>对战</p></router-link></li>
                        <li><router-link to="/PlayerChart"><p>排行</p></router-link></li>
                        <li><router-link to="/achievement"><p>成就</p></router-link></li>
                        <!-- <span v-if="authStore.info.achieve4"><div class="main-border-button "><a href="#">Finish</a></div></span>
                  <span v-else="authStore.info.achieve4"><div class="main-border-button border-no-active"><a href="#">Not Finish</a></div></span></li> -->
                        <li><router-link to="/offline" style="display: flex;"><p v-if="authStore.info.username">{{ authStore.info.username }}  </p>  <p v-else>{{ ' 未登录' }}  </p><img src="../assets/images/profileheader.jpg" alt=""></router-link></li>
                    </ul>   
                    <!-- <el-dropdown>
                      <span class="el-dropdown-link">
                          菜单
                        <el-icon class="el-icon--right">
                          <arrow-down />
                        </el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item  divided><router-link to="/index" class="active">首页</router-link></el-dropdown-item>
                          <el-dropdown-item  divided><router-link to="/details">教程</router-link></el-dropdown-item>
                          <el-dropdown-item  divided><router-link to="/classic">游戏</router-link></el-dropdown-item>
                          <el-dropdown-item  divided><router-link to="PlayerChart">排行</router-link></el-dropdown-item>
                          <el-dropdown-item  divided><router-link to="/achievement">成就</router-link></el-dropdown-item>
                          <el-dropdown-item  divided><router-link to="/online">登录</router-link></el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown> -->
                    <!-- ***** Menu End ***** -->
                  </nav>
            </div>
        </div>
    </div>
  </header>
</template>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .container{
  margin-left: 80px;
  margin-right: 80px;
  padding-left: 12px;
  padding-right: 12px;
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

section {
  margin-top: 120px;
}

.header-area {
  background-color: transparent;
  position: absolute;
  height: 70px;
  top: 15px;
  // width: ;
  left: 0;
  right: 0;
  z-index: 100;
  -webkit-transition: all .5s ease 0s;
  -moz-transition: all .5s ease 0s;
  -o-transition: all .5s ease 0s;
  transition: all .5s ease 0s;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.header-area .main-nav {
  min-height: 80px;
  background: transparent;
  display: flex;
  padding: 15px 0px;
  border-radius: 50px;
}

.background-header .main-nav {
  padding: 0px;
  background-color: transparent;
}

.header-area .main-nav #search {
  position: relative;
}

.header-area .main-nav #search input {
  background-color: #27292a;
  height: 46px;
  border-radius: 23px;
  border: none;
  color: #666;
  font-size: 14px;
  padding: 0px 15px 0px 45px;
}

.header-area .main-nav #search i {
  position: absolute;
  color: #666;
  left: 20px;
  top: 10px;
  width: 18px;
  height: 18px;
  font-size: 16px;
}

.header-area .main-nav .logo {
  border-right: 1px solid #27292a;
  flex-basis: 25%;
  margin-right: 5%;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.header-area .main-nav .logo img {
  width: 60px;
}

.background-header .main-nav .logo {
  margin-top: 8px;
}

.background-header .main-nav .logo img {
  width: 60px;
}

.header-area .main-nav .nav {
  display: inline-flex;
  flex-basis: 70%;
  justify-content: flex-end;
  vertical-align: middle;
  text-align: right;
  margin-top: 0px;
  margin-right: 0px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 999;
}

.header-area .main-nav .nav li {
  padding-left: 10px;
  padding-right: 10px;
  display: inline-block;
}

.header-area .main-nav .nav li a {
  display: block;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #666;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  border: transparent;
  padding: 13px 10px;
  border-radius: 18px;
  letter-spacing: .3px;
}
.header-area .main-nav .nav li p {
  font-size: 17px;
}
.header-area .main-nav .nav li:last-child a {
  background-color: #27292a;
  padding: 8px 10px 8px 20px;
  border-radius: 23px;
}

.header-area .main-nav .nav li:last-child a img {
  max-width: 30px;
  border-radius: 50%;
  margin-left: 5px;
}

.header-area .main-nav .nav li.has-sub ul.sub-menu li:last-child a:hover,
.background-header .main-nav .nav li.has-sub ul.sub-menu li:last-child a:hover {
  padding-left: 25px !important;
}

.header-area .main-nav .nav li:hover p,
.header-area .main-nav .nav li p.active {
  color: #e75e8d !important;
}

.header-area .main-nav .nav li:last-child:hover a,
.header-area .main-nav .nav li:last-child a.active {
  color: #fff !important;
  background-color: #e75e8d !important;
}

.background-header .main-nav .nav li:hover p,
.background-header .main-nav .nav li p.active {
  color: #fff;
  opacity: 1;
}

.header-area .main-nav .nav li.has-sub {
  position: relative;
  padding-right: 15px;
}

.header-area .main-nav .menu-trigger {
  cursor: pointer;
  display: block;
  position: absolute;
  top: 23px;
  width: 32px;
  height: 40px;
  text-indent: -9999em;
  z-index: 99;
  right: 20px;
  display: none;
}

.background-header .main-nav .menu-trigger {
  top: 17px;
}

.header-area .main-nav .menu-trigger span,
.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  background-color: #e75e8d;
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 0;
}

.background-header .main-nav .menu-trigger span,
.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
  background-color: #e75e8d;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  background-color: #e75e8d;
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 0;
  width: 75%;
}

.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
  background-color: #e75e8d;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
  content: "";
}

.header-area .main-nav .menu-trigger span {
  top: 16px;
}

.header-area .main-nav .menu-trigger span:before {
  -moz-transform-origin: 33% 100%;
  -ms-transform-origin: 33% 100%;
  -webkit-transform-origin: 33% 100%;
  transform-origin: 33% 100%;
  top: -10px;
  z-index: 10;
}

.header-area .main-nav .menu-trigger span:after {
  -moz-transform-origin: 33% 0;
  -ms-transform-origin: 33% 0;
  -webkit-transform-origin: 33% 0;
  transform-origin: 33% 0;
  top: 10px;
}

.header-area .main-nav .menu-trigger.active span,
.header-area .main-nav .menu-trigger.active span:before,
.header-area .main-nav .menu-trigger.active span:after {
  background-color: transparent;
  width: 100%;
}

.header-area .main-nav .menu-trigger.active span:before {
  -moz-transform: translateY(6px) translateX(1px) rotate(45deg);
  -ms-transform: translateY(6px) translateX(1px) rotate(45deg);
  -webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
  transform: translateY(6px) translateX(1px) rotate(45deg);
  background-color: #e75e8d;
}

.background-header .main-nav .menu-trigger.active span:before {
  background-color: #e75e8d;
}

.header-area .main-nav .menu-trigger.active span:after {
  -moz-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  -ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  -webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
  transform: translateY(-6px) translateX(1px) rotate(-45deg);
  background-color: #e75e8d;
}

.background-header .main-nav .menu-trigger.active span:after {
  background-color: #e75e8d;
}

.header-area.header-sticky {
  min-height: 70px;
}

.header-area.header-sticky .nav li p.active {
  color: #fff;
}

@media (max-width: 1200px) {
  .header-area .main-nav .nav li {
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-area .main-nav:before {
    display: none;
  }
}

@media (max-width: 992px) {
  .header-area {
    top: 0;
  }
  .header-area .main-nav {
    background-color: transparent;
    border-radius: 0px;
  }
  .header-area .main-nav .nav {
    height: auto;
    flex-basis: 100%;
  }
  .header-area .main-nav .logo {
    position: absolute;
    left: 30px;
    top: 15px;
  }
  .background-header .main-nav .logo {
    top: 0px;
  }
  .background-header .main-nav .border-button {
    top: 0px !important;
  }
  .header-area .main-nav .border-button {
    position: absolute;
    top: 15px;
    right: 70px;
  }
  .header-area.header-sticky .nav li p:hover,
  .header-area.header-sticky .nav li p.active {
    color: #e75e8d!important;
    opacity: 1;
  }
  .header-area.header-sticky .nav li.search-icon a {
    width: 100%;
  }
  .header-area {
    background-color: #f7f7f7;
    padding: 0px 15px;
    height: 80px;
    box-shadow: none;
    text-align: center;
  }
  .header-area .container {
    padding: 0px;
  }
  .header-area .logo {
    margin-left: 0px;
  }
  .header-area .menu-trigger {
    display: block !important;
  }
  .header-area .main-nav {
    overflow: hidden;
  }
  .header-area .main-nav .nav {
    float: none;
    width: 100%;
    display: none;
    -webkit-transition: all 0s ease 0s;
    -moz-transition: all 0s ease 0s;
    -o-transition: all 0s ease 0s;
    transition: all 0s ease 0s;
    margin-left: 0px;
  }
  .header-area.header-sticky .nav {
    margin-top: 65px !important;
    text-align: center;
  }
  .background-header.header-sticky .nav {
    margin-top: 70px !important;
  }
  .header-area .main-nav .nav li:first-child {
    border-top: 1px solid #eee;
  }
  .header-area .main-nav .nav li {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .header-area .main-nav .nav li a {
    height: 50px !important;
    line-height: 50px !important;
    padding: 0px !important;
    border: none !important;
    background: #fff !important;
    color: #1e1e1e !important;
  }
  .header-area .main-nav .nav li a:hover {
    background: #fff !important;
    color: #e75e8d!important;
  }
  .header-area .main-nav .nav li:last-child a img {
    display: none;
  }
  .header-area .main-nav .nav li:last-child a:hover {
    color: #ec6090 !important;
    background-color: transparent !important;
  }
  .header-area .main-nav .nav li.has-sub ul.sub-menu {
    position: relative;
    visibility: inherit;
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    top: 0px;
    width: 100%;
    box-shadow: none;
    height: 0px;
    transition: all 0s;
  }
  .header-area .main-nav .nav li.submenu ul li a {
    font-size: 12px;
    font-weight: 400;
  }
  .header-area .main-nav .nav li.submenu ul li a:hover:before {
    width: 0px;
  }
  .header-area .main-nav .nav li.has-sub ul.sub-menu {
    height: auto;
  }
  .header-area .main-nav .nav li.has-sub:after {
    color: #3B566E;
    right: 30px;
    font-size: 14px;
    top: 15px;
  }
  .header-area .main-nav .nav li.submenu:hover ul, .header-area .main-nav .nav li.submenu:focus ul {
    height: 0px;
  }
}

/* 
---------------------------------------------
Banner Style
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