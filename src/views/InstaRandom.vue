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
  display: flex;
  background-color: #575563;
  font-family: Arial, Helvetica, sans-serif;
}

    

</style>
