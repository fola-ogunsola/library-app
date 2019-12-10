<template>
  <div>
    <div class="whole-body">
      <form @submit.prevent="add" class="border" style="center">
        <div class="form-group">
          <h6 class="text">TITTLE</h6>
          <input
            type="text"
            v-model="newPost.tittle"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <h6 class="text">WRITTENBY</h6>
          <input
            type="text"
            v-model="newPost.author"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>

        <div class="form-group">
          <h6 class="text">CONTENT</h6>
          <input
            type="text"
            v-model="newPost.content"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <h6 class="text">IMAGE</h6>
          <input
            type="text"
            v-model="newPost.image"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-primary"
            style="margin-top: 20px"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      apiResponse: {},
      newPost: {
        tittle: "",
        writtenBy: "",
        content:"",
        image: "",
        token:localStorage.getItem('wattpad_token')
      },
      error: {}
    };
  },

  components: {},
  mounted() {},
		methods:{
			add:function(){
            console.log(this.newPost)
        
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('wattpad_token')
           this.$http.post ('http://localhost:3000/user/create',this.newPost)
            .then(response=>{
			console.log(response.data)
		
            this.newPost = {};
           
            })
                  

			
		}, 
	}
};
</script>

<style scoped>
.whole-body {
  height: 100%;
}

form {
  /* margin-top: 300px; */
  padding-bottom: 30px;
  width: 600px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  padding-top: 20px;
}

input {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

button {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
