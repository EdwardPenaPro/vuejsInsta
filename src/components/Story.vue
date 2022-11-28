<template>
  <div class="body">
    <div class="storyContainer">
      <div class="story">
        <a href="">

        
        <i id="size" class="fa fa-plus-circle" aria-hidden="true"></i>
        </a>
        <div class="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: #eee;
}
.body {
  margin-top: 20px;
  margin-bottom: 20px;
}
.story {
  display: flex;
}

#size {
  margin-right: 10px;
  margin-left: 10px;
  /* margin: auto; */
  border: 5px solid #323440;
  border-radius: 50%;
  font-size: 80px;
}

.image {
  border: 5px solid #323440;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 80px;
  width: 80px;
  border: 1px solid #323440;
  border-radius: 50%;
  background-color: black;
  border-width: thick;
  transition: transform .2s;
}
img {
  height: 100%;
  width: 100%;
  border: 1px solid orangered;
  border-radius: 50%;
  object-fit: cover;
}
.image:hover{
transform:scale(1.5);
}

h1 {
  display: flex;
  color: white;
  font-size: 16px;
}
.storyContainer {
  display: flex;
}
.story {
  display: flex;
  flex-direction: row;
}
</style>
