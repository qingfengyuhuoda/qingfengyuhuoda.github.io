<script  setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useuserStore } from '../stores/userstore'
import axios from 'axios';
import {useRouter} from 'vue-router'
import { useClassicalGameStore } from '../stores/classicGame';
const game=useClassicalGameStore()
const router = useRouter()
const isRegister = ref(false)
const authStore = useuserStore()
// 验证码校验
const user = ref({
    username: '',
    password: '',
    confirmPass: '',
    score: 0
});

const validatePassword = (rule, confirmPass, callback) => {
    if (confirmPass === '') {
        callback(new Error('请确认密码'))
    } else if (confirmPass !== user.value.password) {
        callback(new Error('两次输入的密码不一致'))
    } else {
        console.log(confirmPass)
        console.log(user.value.password)
        callback()
    }
};

const rules = {
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    confirmPass: [
        { validator: validatePassword, trigger: 'blur' }
    ],
};
const register = () => {
    const userData = {
        username: user.value.username,
        password: user.value.password,
        score: user.value.score
    };
    // $refs.registerRef.value.validate(valid) => {
    //     if (valid) {
    // 验证通过
    axios.post('http://localhost:9090/register', userData)
        .then(res => {
            console.log(userData.value)
            if (res.data.code === '200') {
                // router.push('/wcregister')
                // isRegister = true
                ElMessage({ dangerouslyUseHTMLString: true, message: '<strong style="color: green; font-size: 18px;">注册成功,请返回登录</strong>', type: 'success' })
            } else {
                ElMessage({ dangerouslyUseHTMLString: true, message:res.data.msg , type: 'error' })
            }
        })
        .catch(error => {
            // 处理请求错误
            console.error(error);
        });
    //   }
};

const login = () => {
    const userData = {
        username: user.value.username,
        password: user.value.password,
        // score: user.value.score
    };
    // $refs.registerRef.value.validate(valid) => {
    //     if (valid) {
    // 验证通过
    axios.post('http://localhost:9090/login', userData)
        .then(res => {          
            console.log(res.data.data)
            if (res.data.code === '200') {
                authStore.setInfo(res.data.data)
                authStore.setIsAuthenticated(true)
                console.log(game.highScore)
                game.highScore=res.data.data.score
                console.log(game.highScore)
                router.push('/index')
                ElMessage({ dangerouslyUseHTMLString: true, message: '<strong style="color: green; font-size: 18px;">登录成功</strong>', type: 'success' })
            } else {
                ElMessage.error({ dangerouslyUseHTMLString: true, message: res.data.msg, type: 'error' })
            }
        })
    //   }
};


const goToLogin = () => {
    router.push('/login');
};
</script>
  
<template>
<div class="rowoutside">
  <div class="main-profile ">
    <div  class="row">
    <el-row class="login-page">
        <el-col :span="12" class="bg"><img src="src/assets/images/2048Tiles.png" alt="Your Image" /></el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="isRegister" :model="user" :rules="rules">
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :prefix-icon="Lock" type="password" show-password placeholder="请输入密码"
                        v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item prop="rePassword">
                    <el-input :prefix-icon="Lock" type="password" show-password placeholder="请输入再次密码"
                        v-model="user.confirmPass"></el-input>
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="register">
                        注册
                    </el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = false; clearRegisterData()">
                        ← 返回
                    </el-link>
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-else :model="registerData" :rules="rules">
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password" :prefix-icon="Lock" type="password" show-password placeholder="请输入密码"
                        v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <div class="flex">
                        <el-checkbox>记住我</el-checkbox>
                        <el-link type="primary" :underline="false">忘记密码？</el-link>
                    </div>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="login">登录</el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = true; clearRegisterData()">
                        注册 →
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
/* 样式 */
.rowoutside{
  display: flex;
  margin-top: 70px;
  padding: 30px;
  height: 550px;
}
.rowoutside>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}
.main-profile {
  border-radius: 23px;
  padding: 30px;
  background-color: #1f2122;
  width:1000px;
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
}
.main-profile .main-info {
    margin: 45px 0px;
  }
  .row{
  display: flex;
  width: 1000px;
}
.row>* {
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
}
.main-profile .main-info .main-border-button {
  margin-top: 25px;
}

.main-profile ul {
  border-radius: 23px;
  padding: 30px;
  background-color: #1f2122;
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
.my-success-message {
    background-color: green;
    /* 修改背景颜色 */
    font-size: 40px;
    /* 修改文字大小 */
    color: white;
    /* 修改文字颜色 */
    /* 添加其他样式 */
}
h1 {
  color: rgb(34, 141, 141);
}
.my-error-message {
    background-color: red;
    /* 修改背景颜色 */
    font-size: 40px;
    /* 修改文字大小 */
    color: white;
    /* 修改文字颜色 */
    /* 添加其他样式 */
}

.login-page {
    height: 500px;
    background-color:#1f2122;
    width: 1000px;
    border-radius: 50%;
    .bg img {
  border-radius: 5%;
  width: 80%; /* 可以根据需要设置图像的宽度 */
  margin-top: 50px;
}

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>