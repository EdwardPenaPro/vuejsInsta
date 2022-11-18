<template>
  <div class="body">
    <div class="menu">
        <hr>
      <div class="option">
        
        <i class="fa fa-film" aria-hidden="true"></i>
        <h1>Feed</h1>
      </div>
      <div class="option">
        <i class="fa fa-search" aria-hidden="true"></i>
        <h1>Explore</h1>
      </div>
      <div class="option">
        <i class="fa fa-bell" aria-hidden="true"></i>
        <h1>Norifications</h1>
      </div>
      <div class="option">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>

        <h1>Direct</h1>
      </div>
      <div class="option">
        <i class="fa fa-table" aria-hidden="true"></i>
        <h1>IGTV</h1>
      </div>
      <div class="option">
        <i class="fa fa-balance-scale" aria-hidden="true"></i>
        <h1>Stats</h1>
      </div>
      <div class="option">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <h1>Settings</h1>
      </div>

      <div class="line" ><hr></div>

      <div class="option">
        <i class="fa fa-share" aria-hidden="true"></i>

        <h1>Logout</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.option {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
}
.body {
  background-color: #323440;
  color: #eee;

}
.menu {
  margin: auto;
  width: 100%;
}
.fa {
  margin-right: 10%;
}
h1 {
  font-size: 18px;
}   
</style>
