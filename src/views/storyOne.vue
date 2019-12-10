<template>
  <div class="single-body">
    <h1>Enjoy your Story</h1>
    
      <div class="content-bar">
        <img :src="story.image" />
         <p> TITLE: {{story.Title }}</p>
        <p> AUTHOR: {{ story.WrittenBy }}</p>
        <p>CONTENT</p><p>{{ story.Content }}</p>
      </div>
      <div class="button">
         <div>
        <router-link to='/addPage'><button class="btn-1">Add Book</button></router-link>
      </div>
       <div>
        <router-link to='/deletePage'><button class="btn-2">Delete Book</button></router-link>
      </div>
      </div>
     
    </div>
</template>

<script>
export default {
  name: "singlepost",
  props: ["id"],
  data() {
    return {
      story: [],
      stories: [],
      token:''
    };
  },
  components: {},
  mounted() {
    var id = this.$route.params.id;
    this.token = localStorage.getItem('wattpad_token')
    const baseURI = "http://localhost:3000/user/";
    this.$http.get(baseURI,  {headers: {"Authorization": `Bearer ${this.token}`}}).then(response => {
      console.log(response.data);
      this.story = response.data;
    });
    this.$http.get(baseURI + "story/" + id, {headers: {"Authorization": `Bearer ${this.token}`}} ).then(response => {
      console.log(response.data);
      this.story = response.data;
    });
  }
};
</script>
<style scoped>
.content-bar{
  font-weight: bold;
  font-style: italic;
}
.button{
    display: flex;
    margin-left: 600px;
}
.btn-1{
  height:30px;
  border:1px solid #0E99E7;;
  width:100px;
  border-radius:10px;
  background-color: #0E99E7;
  background-image: linear-gradient(to right, #0E99E7,#ffffff);
}
.btn-2{
  height:30px;
  border:1px solid, #0E99E7;
  width:100px;
  margin-left:30px;
  border-radius:10px;
  background-color: #0E99E7;
  background-image: linear-gradient(to right, #0E99E7, #ffffff);
}
</style>
