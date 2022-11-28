<template>
  <div class="body">
    <Search class="search" />
    <Stories class="stories" />
    
    <div class="masterContainer">
        <h1 class="title">Feed</h1>
      <div class="randomPictures">
        <div class="square">
          <div class="picture" v-for="picture in pictures" :key="picture.id">
            <img :src="picture.download_url" :alt="picture.author"  />
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
    this.callingApi("https://picsum.photos/v2/list?page=30&limit=20");
  },
};
</script>

<style scoped>
.likes{
  color: rgb(255, 112, 3);
}
.commets{
  color: grey;
}
.picture:hover{

  border-radius: 3%;
  border: 0.2px solid #eee;
  transform: scale(1.2 );
  box-shadow: -1px 10px 5px 0px rgba(0,0,0,0.49);
-webkit-box-shadow: -1px 10px 5px 0px rgba(0,0,0,0.49);
-moz-box-shadow: -1px 10px 5px 0px rgba(0,0,0,0.49);
}
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
  transition: transform .2s; 
  margin: auto;
  margin-bottom: 6%;
  /* backdrop-filter: blur(10px); */
}
img {
  border-radius: 3%;
  max-width: 100%;
  max-height:100%;
}
.author {
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  background-color: transparent;
  font-weight: bold;
  color: #eee;
  border-radius: 12%;
  backdrop-filter: blur(5px);
  
  /* border-right: 1px solid rgb(227, 227, 227);
  border-bottom: 1px solid rgb(227, 227, 227);
  border-left: 1px solid rgb(227, 227, 227); */
}

</style>
