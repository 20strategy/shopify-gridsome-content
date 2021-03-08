<template>
  <div class="subscribe">
   <div class="form mt-4 mx-auto"><form action="https://api.form-data.com/f/hcpbhwifqfhflst8m41ig"
      method="post" class="mt-5 mx-auto">
      <div class="header">
         <p>Sign Up For Newsletter</p>
      </div>
      <div class="description-sub">
        <p>We are bringing new things. Sign up now to receive the exclusive offer.</p>
      </div>
      <div class="innerbox is-flex-wrap-wrap">
      <div class="input">
        <input type="text" class="button is-primary is-outlined" id="email" name="email" placeholder="email address"> </div>
      <div>
        <input type="submit" class="button is-primary is-outlined" id="submit" value="Sign Up">
      </div></div>
    </form>
  </div></div>
</template>

<style scoped >
* {
    box-sizing: initial;}
.subscribe {
  background: #F8A434;
  font-family: Lato, sans-serif;
  color: #FDFCFB;
  text-align: center;
  height:330px;
}

form {
  max-width: 430px;
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
.innerbox{
    width:90%;
    margin-left:auto;
    margin-right:auto;
}
.input {
  width:90%;
 margin-left:auto;
margin-right:auto;
margin-bottom: 5px;
}


.header {
  font-size: 30px;
  letter-spacing: 2px;
  padding-top:28px;
}


.description-sub {
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 1.5em;
  margin: -0 0 40px;
}

.button {
  height: 35px;
  border: none;
}

  
#email {
  width: 100%;
  background: #FDFCFB;
  font-family: inherit;
  color: #737373;
  text-indent: 1%;
  }


#submit {
  width: 15%;
  height: 100px;
  margin-left:auto;
  margin-right: auto;
  background: #E86C8D;
  font-family: inherit;
  font-weight: bold;
  color: inherit;
  letter-spacing: 2px;
  
  cursor: pointer;
  transition: background .3s ease-in-out;
}
  

#submit:hover {
  background: #d45d7d;
}
  

input:focus {
  outline: none;
  
  
}
</style>