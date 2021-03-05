<template>
  <div class="subscribe">
    <form accept-charset="UTF-8" action="https://getform.io/f/7ab187fb-8fc4-47e3-a93d-dde37be50abf" enctype="multipart/form-data" method="POST"  target="_blank">
      <div class="header">
         <p>Sign Up For Newsletter</p>
      </div>
      <div class="description-sub">
        <p>We are bringing new things. Sign up now to receive the exclusive offer.</p>
      </div>
      <div class="innerbox">
      <div class="input ">
        <input type="text" class="button is-primary is-outlined" id="email" name="email" placeholder="email address">
        <input type="submit" class="button is-primary is-outlined" id="submit" value="SIGN UP">
      </div></div>
    </form>
  </div>
</template>



<style scoped >
* {
    box-sizing: initial;}
.subscribe {
  background: #F8A434;
  font-family: Lato, sans-serif;
  color: #FDFCFB;
  text-align: center;
  height:300px;
}


form {
  width: 430px;
  margin: 30px auto;
}
.innerbox{
    width:100%;
}


.header {
  font-size: 35px;
 
  letter-spacing: 3px;
  padding-top:30px;
}


.description-sub {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5em;
  margin: -2px 0 45px;
}


.input {
  display: flex;
  align-items: center;

}


.button {
  height: 35px;
  border: none;
}

  
#email {
  width: 75%;
  background: #FDFCFB;
  font-family: inherit;
  color: #737373;
  letter-spacing: 1px;
  text-indent: 5%;
  }


#submit {
  width: 15%;
  height: 46px;
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
  outline: 20px solid #E86C8D;
  box-shadow: 0 0 2px #E86C8D;
}
</style>