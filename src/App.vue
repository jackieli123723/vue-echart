<template>
  <div>
  <h1><a href="#">Vue2-ECharts</a></h1>

   <div class="list-group">
      <router-link to="/homeLine">homeLine</router-link>
      <router-link to="barLine"  >barLine</router-link>
  </div>
  <br/>  <br/>  <br/>
  <router-view></router-view>

</div>
</template>

<style scope>
.router-link-active {
  color: red;
}
</Style>

