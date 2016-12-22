<template>
  <div>
  <h1><a href="#">Vue2.0.x+ECharts3.0.x</a></h1>
  <img src="./assets/logo.png" class="logo" />

   <div class="list-group">
      <router-link to="/homeLine">柱状图</router-link>
      <router-link to="barLine"  >折线图</router-link>
  </div>
  <br/>  <br/>  <br/>
  <router-view></router-view>

</div>
</template>

<style scope>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.logo{

}
body {
  margin: 0;
  padding: 3em 0 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align: center;
}
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  margin-bottom: 2em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #2c3e50;
  font-weight: 300;
}
body 

.list-group a{
    display: inline-block;
    line-height: 30px;
    height: 30px;
    color: #333;
    font-size: 16px;
    text-decoration: none;
    margin-right: 6px;
}

.list-group a.router-link-active {
    color: #ff4d37;
    border-bottom: 4px solid #ff4d37;
}

</Style>

