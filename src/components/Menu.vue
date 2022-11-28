<template>
  <div class="body">
    <div class="menu">
      <hr />
      <div class="option">
        <i class="fa fa-film" aria-hidden="true"></i>
        <a href="#">
          <h1>Feed</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-search" aria-hidden="true"></i>

        <a href="#">
          <h1>Explore</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-bell" aria-hidden="true"></i>

        <a href="#">
          <h1>Norifications</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>

        <a href="#">
          <h1>Direct</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-table" aria-hidden="true"></i>

        <a href="#">
          <h1>IGTV</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-balance-scale" aria-hidden="true"></i>

        <a href="#">
          <h1>Stats</h1>
        </a>
      </div>
      <div class="option">
        <i class="fa fa-cog" aria-hidden="true"></i>

        <a href="#">
          <h1>Settings</h1>
        </a>
      </div>

      <div class="line"><hr /></div>

      <div class="option">
        <a href="#">
          <i class="fa fa-share" aria-hidden="true"></i>
        </a>

        
        <a href="#">
          <h1>Logout</h1>
        </a>

        
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
a {
  text-decoration: none;
  color: #eee;
}
a:hover {
  color: rgb(255, 193, 145);
}
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
