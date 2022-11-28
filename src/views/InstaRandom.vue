<template>
  <div class="body">
    <div id="profile">
      <Profile class="profile" />
      <Menu class="menu" />
    </div>
    <div id="feed">
      <Feed />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

import Feed from "@/components/Feed.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "InstaRandom",
  components: {
    Profile,
    Feed,
    Menu,
  },
};
</script>

<style>

.body {
  /* position: right; */
  display: flex;
  background-color: #575563;
  font-family: Arial, Helvetica, sans-serif;
}
#profile{
  max-height: 100%;
  position: fixed;
   scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
  overflow-y: scroll;
}
#profile::-webkit-scrollbar {
  width: 10px;
  
}
#profile::-webkit-scrollbar-track {
  background-color: rgb(219, 219, 219);
}
#profile::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#feed {
padding-left: 23%;
overflow: hidden;

}



</style>
