<template>
  <div class="body">
    <Search class="search" />
    <Stories class="stories" />
    
    <div class="masterContainer">
        <h1 class="title">Feed</h1>
      <div class="randomPictures">
        <div class="square">
          <div class="picture" v-for="picture in pictures" :key="picture.id">
            <img :src="picture.download_url" :alt="picture.author" />
            <div class="author">
              <div class="authorName">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                {{ picture.author }}
              </div>
              <div class="likes">
                <i class="fa fa-heart" aria-hidden="true"> </i> {{ picture.id }}
              </div>
              <div class="comments">
                <i class="fa fa-comment" aria-hidden="true"> </i>
                {{ picture.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Stories from "@/components/Story.vue";
export default {
  name: "Feed",
  components: {
    Search,
    Stories,
  },
  data() {
    return {
      pictures: [],
    };
  },
  methods: {
    callingApi(url) {
      fetch(url).then((res) =>
        res.json().then((data) => {
          this.pictures = data;
          console.log(this.pictures);
        })
      );
    },
  },
  mounted() {
    this.callingApi("https://picsum.photos/v2/list?page=5&limit=24");
  },
};
</script>

<style scoped>
h1{
    font-size: 16px;
}
.title {
  padding-top: 5px;
  margin-left: 2%;

  text-align: left;
  color: #eee;
}
.body {
  background-color: #575563;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.masterContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.randomPictures {
  width: 100%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: inherit;
}
.square {
  width: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.picture {
  width: 400px;
  margin: auto;
  margin-top: 0%;
}
img {
  border-radius: 3%;
  max-width: 100%;
  max-height: 100%;
}
.author {
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  width: 99%;
  height: 30px;
  background-color: transparent;
  font-weight: bold;
  color: #eee;
  border-radius: 5%;
  /* border-right: 1px solid rgb(227, 227, 227);
  border-bottom: 1px solid rgb(227, 227, 227);
  border-left: 1px solid rgb(227, 227, 227); */
}

</style>
