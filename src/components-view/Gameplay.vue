<script setup lang="ts">


</script>

<template>
  
  <div class="container">
    
    <div class="row">
      <div class="col-lg-12">
        
        <div class="page-content">
          
          <div class="main-banner">
            <div class="row">
              
              <div class="col-lg-7">
                
                <div class="header-text">
                  
                  <h6>Welcome To 2048 BOOM</h6>
                  <h4><em>Play</em> Our Games Here</h4>
                  <!-- <div class="main-button"> -->
                    <div class="buttoncontainer">
                    <div class="main-button1">
                      <a><router-link to="/classic">单人游戏</router-link></a>
                    </div>
                    <div class="main-button2">
                      <a><router-link to="/battle">双人对战</router-link></a>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
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
.buttoncontainer{
  display: flex;
  justify-content: center; /* 使用此属性来水平居中 */
  align-items: center;
  background-position: center center;
}
.main-button1{
  display: flex 0 0;
  margin-right: 6%;
  margin-left: 1%;
}
.main-button1 a {
  font-size: 20px;
  color: #fff;
  background-color: #e75e8d;
  padding: 6px 20px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all .3s;
  position: relative;
  overflow: hidden;
}

.main-button1 a:hover {
  background-color: #fff;
  color: #e75e8d;
}
.main-button2{
  display: flex 0 0;
  margin-right: 1%;
  margin-left: 6%;
}
.main-button2 a {
  font-size: 20px;
  color: #fff;
  background-color: #e75e8d;
  padding: 6px 20px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all .3s;
  position: relative;
  overflow: hidden;
}

.main-button2 a:hover {
  background-color: #fff;
  color: #e75e8d;
}
.container{
  margin-top: 160px;
  padding-top: 30px;
  margin-left: 12px;
  margin-right: 12px;
  padding-left: 10px;
  padding-right: 10px;
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

/* 
---------------------------------------------
Banner Style
--------------------------------------------- 
*/

.main-banner {
  background-image: url(/src/assets/images/2048Tiles.png);
  background-position: center center;
  background-size: cover;
  min-height: 380px;
  border-radius: 23px;
  padding: 80px 60px;
}

.main-banner h6 {
  font-size: 20px;
  color: black;
  font-weight: 400;
  margin-bottom: 25px;
}

.main-banner h4 {
  font-size: 45px;
  text-transform: uppercase;
  margin-bottom: 25px;
  color: rgb(10, 10, 10);
}

.main-banner h4 em {
  font-style: normal;
  color: #ec6090;
}

/* 
---------------------------------------------
Most Popular Style
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