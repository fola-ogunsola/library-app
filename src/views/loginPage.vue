<template>
  <div class="body">
    <div class="first-bar">
      <p>Login</p>
    </div>
    <div class="input-form">
      <form>
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
          <button @click.prevent="login">Login</button>
        </div>
      </form>
    </div>
    <div class="signup-word">
      <p>Login on wattpad</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        password: "",
        email: ""
      },
      error: {}
    };
  },
  mounted() {},
  methods: {
    login: function() {
      const baseURI = "http://localhost:3000/api/login";
      this.$http
        .post(baseURI, {
          email: this.user.email,
          password: this.user.password
        })
        .then(response => {
          console.log(this.user);
          localStorage.setItem("wattpad_token", response.data.token);
          console.log(localStorage.getItem("wattpad_token"));
          alert("Login Successful");
          this.$router.push("/storyPage");
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
    height: 50px;
    color: white;
    background-color: #1F3D6A;
    font-style:italic;
    font-weight:bold;
    font-size:14px;
    border:none; 
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
    // padding-bottom: 40px;


}
</style>

