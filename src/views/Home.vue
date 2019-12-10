<template>
  <div class="home">
    <div>
      <img src="../assets/background.png.png" alt="" />
    </div><br><br><br>
    <div class="welcoming-word">
      <h1>Welcome!</h1>
      <p>
       If you are looking for books, articles, or information for your assignments,
        work, or personal interests<br>
       the Librarians can help. We have Librarians on staff that you can
        reach by phone, text, email, chat,<br>
        or in person for any questions you might have. <br>You can make an appointment if 
        you need in-depth help or 
        contact us by your preferred method for assistance.<br>
        If entertainment is what you are looking for, we have 
        a DVD collection and a large variety of literature to
         browse through to find your interests. There are various sitting<br>
          areas in the Libraries where you can relax, put up your feet, and 
          enjoy a nice quiet break from<br>
           classes. </p>
    </div><br><br><br>
    <div class="images">
      <img src="../assets/julian.png" alt="">
      <img src="../assets/hobbit.png" alt="">
      <img src="../assets/got.png" alt="">
    </div>
  </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  }
}

</script>
<style lang="stylus" scoped>
p{
  text-align:center;
}


.images {
    display: flex;
    justify-content:space-between;
}
.welcoming-word{
  font-style:italic;
  font-weight:bold;
}
</style>
