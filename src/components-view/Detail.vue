<script setup lang="ts">


</script>

<template>
  <div class="rowoutside">
    <div class="col-lg-12">
      <div class="page-content">
        <div class="row">
          <div class="col-lg-12">
            <h2>2048 BOOM</h2>
          </div>
        </div>
        <!-- ***** Featured Start ***** -->
        <div class="rowoutside">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/2048Tiles.png" alt="" style="border-radius: 23px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>单人游戏</h4>
                    <p>游戏界面为4*4的棋盘，使用wasd使所有格子向一个方向滑动，对于相同数字的两个格子，相撞时数字会相加，玩家每次滑动，空白处会随机刷新一个数字的格子，当界面全部被数字填满时，此时界面不可滑动，游戏结束，出现2048的数字时，游戏胜利</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowoutsideother">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/2048logo_1.png" alt="" style="border-radius: 23px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>多人游戏</h4>
                    <p>在多人游戏中，我们加入了刺激的对抗环节，双方的得分改为对对方造成伤害，双方具有同样的血条，用生成的数块攻击对手，使用道具在一个最大且大于64的块生成效果，影响对手或增强自己，直到敌人血量为0，游戏胜利</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="newcontainer">
        <div class="rowoutsideother1">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/道具3.jpg" alt="" style="border-radius: 10px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>行消除 按1或Z</h4>
                    <p>消除一行内的数块，并根据消除的数块对对手造成伤害</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowoutsideother1">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/道具2.jpg" alt="" style="border-radius: 10px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>列消除 按2或X</h4>
                    <p>消除一列内的数块，并根据消除的数块对对手造成伤害</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newcontainer">
        <div class="rowoutsideother1">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/道具1.jpg" alt="" style="border-radius: 10px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>炸弹 按3或Q</h4>
                    <p>可以通过合并或点消除3*3范围内的数块，并根据消除的数块对对手造成伤害</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowoutsideother1">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/道具4.jpg" alt="" style="border-radius: 10px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>治疗 按4或E</h4>
                    <p>双人对战，当你受伤时，使用会根据消除的数块恢复一定数目的生命值</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="rowoutsideother">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/images/道具5.jpg" alt="" style="border-radius: 10px;">
                </div>
                <div class="col-lg-8 align-self-center">
                  <div class="main-info header-text">
                    <h4>冰块 按F</h4>
                    <p>阻碍你的对手滑动，冰块不会由相同数字的两个格子相撞破坏，只能通过炸弹或行列消除破坏</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Details End ***** -->
      </div>
    </div>
  </div>
</template>
<style lang ="scss" scoped>
.newcontainer{
  display: flex;
}
.rowoutside{
  display: flex;
  margin-top: 90px;
  padding: 30px;
}
.rowoutside>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}
.rowoutsideother{
  display: flex;
  padding: 30px;
  padding-top: 0px;
  
}
// .rowoutsideother1>* {
//   max-width: 100%;
//   padding-right: 16px;
//   padding-left: 16px;
// }
.rowoutsideother1{
  display: flex;
  padding: 30px;
  padding-top: 0px;
  width: 50%;
}
.rowoutsideother>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}
.row{
    justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  display: flex;
}
.row>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}
.col-lg-4{
  width: 33.33333333%;
  flex: 0 0 auto;
}
.col-lg-8{
  margin-bottom: 5%;
  width: 66.6666667%;
  flex: 0 0 auto;
}
.col-lg-12{
  width: 100%;
  flex: 0 0 auto;
}
.col-lg-12 h5{
  font-size: 20px;
}
.col-lg-12 h2{
  font-size: 60px;
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

section {
  margin-top: 120px;
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
Game Details Style
--------------------------------------------- 
*/

.game-details h2 {
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
  margin: 60px 0px;
}

.game-details .content {
  border-radius: 23px;
  padding: 30px;
  background-color: #1f2122;
}

.game-details .content .left-info {
  background-color: #27292a;
  border-radius: 23px;
  padding: 30px;
  margin-bottom: 30px;
}

.game-details .content .left-info .left {
  float: left;
}

.game-details .content .left-info h4 {
  font-size: 15px;
  display: block;
}

.game-details .content .left-info span {
  color: #666;
  display: block;
  margin-top: 7px;
  font-weight: 400;
}

.game-details .content .left-info ul {
  text-align: right;
}

.game-details .content .left-info ul li {
  color: #fff;
  font-size: 14px;
  margin-bottom: 3px;
}

.game-details .content .left-info ul li:first-child i {
  color: yellow;
}

.game-details .content .left-info ul li:last-child i {
  color: #ec6090;
}

.game-details .content .right-info {
  background-color: #27292a;
  border-radius: 23px;
  padding: 30px;
  margin-bottom: 30px;
}

.game-details .content .right-info ul li {
  display: inline-block;
  width: 23%;
  text-align: center;
  font-size: 14px;
  color: #fff;
}

.game-details .content .right-info ul li i {
  display: block;
  margin-bottom: 12px;
}

.game-details .content .right-info ul li:first-child i {
  color: yellow;
} 

.game-details .content .right-info ul li i {
  color: #ec6090;
}

.game-details .main-border-button {
  margin-top: 35px;
}

.game-details .main-border-button a {
  text-align: center;
  width: 100%;
} 

/* 
---------------------------------------------
Other Related Style
--------------------------------------------- 
*/
/* 
---------------------------------------------
Profile Style
--------------------------------------------- 
*/

.main-profile {
  border-radius: 23px;
  padding: 30px;
  background-color: #1f2122;
}

.main-profile .main-info span {
  font-size: 14px;
  color: #fff;
  background-color: #e75e8d;
  padding: 8px 20px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
}

.main-profile .main-info h4 {
  margin-bottom: 20px;
  font-size: 20px;
}
.main-profile .main-info p {
  margin-bottom: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.836);
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

.clips {
  margin-top: 30px;
  border-top: 2px solid #27292a;
}

.clips .heading-section {
  margin-top: 30px;
}

.clips .item  {
  border-radius: 23px;
  padding: 30px 15px;
  background-color: #27292a;
  margin-bottom: 30px;
}

.clips .item .thumb {
  position: relative;
  margin-bottom: 15px;
}

.clips .item .thumb a {
  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-23px, -23px);
    width: 46px;
    height: 46px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 46px;
    color: #ec6090;
}

.clips .item h4 {
  font-size: 15px;
  display: inline-block;
}

.clips .item span i {
  color: #ec6090;
}

.clips .item span {
  float: right;
  color: #fff;
  font-size: 14px;
}

.clips .main-button {
  margin-top: 10px;
  text-align: center;
}

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
  .main-profile .main-info.header-text{
    text-align: left; 
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