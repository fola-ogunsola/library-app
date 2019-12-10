<template>
  <div>
    <h3>Story Page</h3>
  <div  class="all-image">
    <div  v-for="story in stories" :key="story._id">
      <router-link :to="{ name: 'storyone', params: { id: story._id } }"
        ><div >
          <img :src="story.image" alt="..." />
         
</div></router-link
      >
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "stories",
  data() {
    return {
      stories: [],
      token: ""
    };
  },
  mounted() {
    this.token = localStorage.getItem("wattpad_token")
    const baseURI = "http://localhost:3000/user/stories";
    this.$http.get(baseURI, {headers: {"Authorization": `Bearer ${this.token}`}}).then(response => {
      console.log(response.data);
      this.stories = response.data.data;
    });
  }
};
</script>

<style lang="stylus" scoped>
input{
    width: 70%;
    padding: 1rem;
    background-color:#C4C4C4;
    border-radius:50px;

}
button{
    height:40px;
    width:100px;
    border-radius:40px;
}
.input-botton {
    padding-top:60px;

}

.all-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    margin-top:5rem;
}
</style>
