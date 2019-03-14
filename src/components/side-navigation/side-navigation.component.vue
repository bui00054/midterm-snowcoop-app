<template>
  <div id="sideNavigation" class="menu-itemhover">
    <el-menu class="side-nav-menu"  :router="true" :default-active="activeLink" >
      <div class="logo">
        <el-menu-item><span>Snowcoop</span></el-menu-item>
      </div>
      <el-menu-item index="/dashboard" >
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <span>Address List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scoped></style>


