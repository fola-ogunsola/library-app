<template>
  <div class="body">
    <div class="first-bar">
      <p>Sign Up</p>
    </div>
    <div class="input-form">
      <form>
        <div class="form_item">
          <label for="name"></label>
          <input
            v-model="user.username"
            type="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div class="form_item">
          <label for="name"></label>
          <input
            v-model="user.email"
            type="eemail"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div class="form_item">
          <label for="name"></label>
          <input
            v-model="user.password"
            type="password"
            name="password"
            placeholder="Your password"
          />
        </div>
        <div>
          <button @click.prevent="register">SignUp</button>
        </div>
      </form>
    </div>
    <div class="signup-word">
      <p>Sign up for wattpad</p>
      <p>?</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: ""
      },
      error: {}
    };
  },
  mounted() {},
  methods: {

          register: function () {
      const baseURI = 'http://localhost:3000/api/register'
      this.$http.post(baseURI, {
        username: this.user.username,
          email: this.user.email,
          password: this.user.password
      })
        
        .then(response => {
          console.log(response);
          console.log(this.user);
          alert("Account Created Successful");
          this.$router.push("/loginPage");
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
.signup-word{
  color:white;
  padding-top:40px;
  text-decoration: underline;
}
.signup-word p{
    margin: 0;
}

.body{
  background-color:#0E99E7;
}
.form_item {
  margin: 2rem 0;
  font-weight:bold;
  font-style:italic;
}
.form_item input {
  width: 100%;
  padding: 1rem;
  background-color:white;
  font-size: 16px;
  color: black;
  margin-top: 0.5rem;
}
.form_item label {
  font-size: 16px;
  color: black;
}
.input-form {
    width:30%;
    display:block;
    margin:auto;
}
button{
    width: 30rem;
    border:none;
    height: 50px;
    color: white;
    background-color: #1F3D6A;
    font-style:italic;
    font-weight:bold;
    font-size:14px; 
}
.first-bar{
    background-color:#0E99E7;
    height:200px;
    margin-top: -20px;
    border:2px solid #0E99E7;
    bottom-left-radius:40px;
    bottom-right-radius:80px;
    width:100%;
}
.first-bar p {
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 40px;


}
</style>
