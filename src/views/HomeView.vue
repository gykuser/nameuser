<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <!-- 菜单 -->
        <el-row class="tac">
          <el-col>
            <el-menu 
            router
            default-active="2" 
            @open="handleOpen" 
            @close="handleClose" 
            background-color="#545c64" 
            class="el-menu-vertical-demo"
            backgroundColor="rgb(48 65 86)"
            text-color="rgb(191,203,217)"
            :collapse="iscollapse"
            
            >
             <el-menu-item index="/home/index">
    <i class="el-icon-menu"></i>
    <span slot="title">首页</span>
  </el-menu-item>
   <el-menu-item index="/home/document">
   <i class="el-icon-document"></i>
    <span slot="title">文档</span>
  </el-menu-item>
   <el-menu-item index="/home/lead">
     <i class="el-icon-setting"></i>
    <span slot="title">引导页</span>
  </el-menu-item>
 <el-submenu index="4">
   <template slot="title">
    <i class="el-icon-location"></i>
    <span>权限测试页</span>
    </template>
  </el-submenu>
  <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限测试页</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
      <el-menu-item index="5">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>组件</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
     <el-menu-item index="6">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>路由嵌套</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
     <el-menu-item index="7">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
   <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>综合实力</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
     <el-menu-item index="8">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限测试页</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
     <el-menu-item index="9">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限测试页</span>
      </template>
      <el-menu-item index="4-1">页面权限</el-menu-item>
      <el-menu-item index="4-2">指令权限</el-menu-item>
      <el-menu-item index="4-3">角色权限</el-menu-item>
  </el-submenu>
     <el-menu-item index="10">
    <i class="el-icon-menu"></i>
    <span slot="title">图标</span>
  </el-menu-item>
              <!-- default-active：当前激活菜单的索引 -->
              <!-- open、close：展开和收起触发的事件 -->
              <!-- 二级菜单 -->
              <!-- <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item> -->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 路由 -->
      <el-container>
         <router-view>
        <el-header>

        </el-header>
        <el-main>Main</el-main>
         </router-view>
      </el-container>
     
    </el-container>
    <div>
      <!-- <el-row>
        <el-button type="primary" @click="change">登录</el-button>
      </el-row> -->
    </div>
  </div>
</template>

<script>
// import instance from "@/api/api";
export default {
  name: "HomeView",
  data(){
    return{
      iscollapse:false //是否折叠
    }
  },
  methods: {
    // change() {
    //   this.$router.push("/login");
    // },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style lang="scss" scoped>
  .home{
    .aside{
      margin: 0;
      padding:0;
      .el-menu-vertical-demo{
        height:100vh;
        .el-menu-item:hover{
          background-color: red !important;
        }
      }
      .el-submenu_title:hover{
         background-color: red !important;
      }
    }
  }
</style>