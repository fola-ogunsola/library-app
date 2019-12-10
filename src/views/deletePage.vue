<template>
  <div>
    <div class="input-botton">
      <h1>Delete Page</h1>
    </div>
    <div class="all-image">
      <div v-for="story in stories" :key="story._id">
        <div>
          <img :src="story.image" alt="..." />
        </div>
        <button @click.prevent="del(story)">Delete</button>
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
      search: "",
      token: ""
    };
  },
  mounted() {
    this.token = localStorage.getItem("wattpad_token");
    const baseURI = "http://localhost:3000/user/stories";
    this.$http
      .get(baseURI, { headers: { Authorization: `Bearer ${this.token}` } })
      .then(response => {
        console.log(response.data);
        this.stories = response.data.data;
      });
  },
  methods: {
    del: function(story) {
      if (confirm("Are you sure?")) {
        this.token = localStorage.getItem("wattpad_token");
        this.$http
          .delete("http://localhost:3000/user/story/delete/" + story._id, {
            headers: { Authorization: `Bearer ${this.token}` }
          })
          .then(response => {
            console.log(response);
            alert("Delete Successfully");
          });
      }
    }
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
    border:none;
    border-radius:40px;
    background-color: red;
    color:white;
    // background-image:  linear-gradient(to right, red,#ffffff);
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
