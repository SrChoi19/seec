<template>
    <el-container>
        <el-main>
            <div class="Box demo-input-suffix">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <p>东兴市智慧化管理平台</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-input placeholder="账号" suffix-icon="el-icon-date"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-input placeholder="密码" suffix-icon="el-icon-date"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="30" align="top">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-input placeholder="验证码" suffix-icon="el-icon-date"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12"><div class="grid-content bg-purple"><div>16546</div></div></el-col>
                </el-row>
                <div>
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>
                <el-row>
                    <el-col :span="24">
                        <div class="login">登录</div>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name:"DengView",
    data() {
      return {
        checked: false
      };
    }
}
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .el-container{
        width: 100vw;
        height: 100vh;
        background: url("../assets/veer-313487750.jpg");
    }
    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-input{
        height: 40px;
    }
    .Box{
        width: 400px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        background: #E9EEF3;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    .login{
        background: #409EFF;
        width: 380px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        border-radius: 10px;
    }
</style>