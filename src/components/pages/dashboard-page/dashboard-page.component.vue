<template>
  <div id="dashboardPage">
    <div class="dashboard-wrapper">
    <span class="welcome-title">
    {{ 'Hello ${message}, welcome to Snow Coop' }} 
    </span>
    </div>
  <div class="map-view-wrapper">
     <el-card class="map-view-card">  
       <map-view
          v-if="addressList"
          v-bind:showList="false"
          v-bind:addressList="addressList">
       </map-view>
      </el-card>
    </div>
  </div>

</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
