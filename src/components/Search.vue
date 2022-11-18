<template>
  <div class="body">
    <div class="search">
    <div class="searcher">
    <i class="fa fa-search" aria-hidden="true"></i> 
    <input id="search" type="text" placeholder="Search..">
    </div>

    
    <div class="notifyContainer">
      
      <div class="notify">
      <i class="fa fa-bell" aria-hidden="true"></i>
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </div>
      
      <div class="addPhoto">
        <i class="fa fa-plus-circle" aria-hidden="true"></i> 
       <p>Add photo</p></div>
    
    </div>
    </div>
  </div >
</template>
<script>
export default {
  name:'Search',
  data() {
    return {
      search: String,
    }
  },
}
</script>

<style scoped>
.body{
  padding-top: 2%;
}

.fa{
  margin-right: 6px;
}
.fa-search{
  color: white;
  margin-top: 10px;
  margin-left: 5px;
}
.search{
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  display: flex;
  
}
.searcher{
  margin-left: 2%;
  margin-right: auto;
  display: flex;
  background-color: #323440;
  border-radius: 5px;
}
#search{
 
  display: flex;
  align-content: initial;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 2%;
  background-color: #323440;
  border: 0px;
}

.notifyContainer{
  display: flex;  
    margin-left: auto;
  margin-right: 2%;
}
.notify{
display: flex;
align-items: center;
color: #eee;

}
.addPhoto{
  padding-left: 5px;
  align-items: center;
  display: flex;
    align-items: center;  
  width: 150px;
  align-content: center;
  border-radius: 10px;
  background: rgb(80,22,145);
background: linear-gradient(90deg, rgba(80,22,145,1) 0%, rgba(198,16,16,1) 50%, rgba(255,172,45,1) 100%);
  margin-right: 20%;
  color: white;

}

</style>