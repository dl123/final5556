<template>
    <div>
        <body>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper">
          <div class="brand-wrapper">
            <img src="@/images/logo.svg" alt="logo" class="logo"> 
              <i class="fas fa-spinner fa-spin"></i>
  <i class="fas fa-circle-notch fa-spin"></i>
  <i class="fas fa-sync fa-spin"></i>
  <i class="fas fa-cog fa-spin"></i>
  <i class="fas fa-spinner fa-pulse"></i>
  <i class="fas fa-stroopwafel fa-spin"></i>
   <i data-feather="circle"></i>
   
          </div>
          <div class="login-wrapper my-auto">
            <h1 :class="logintitle">{{msg}}</h1>
            <form action="#!">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com" v-model="user.username">
              </div>
              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword" v-model="user.password">
              </div>
              <input name="login" id="login" class="btn btn-block login-btn" type="button" value="Login" @click="signin(user)">
            </form>
            <a href="#!" class="forgot-password-link">Forgot password?</a>
            <p class="login-wrapper-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="@/images/login.jpg" alt="login image" class="login-img">
        </div>
      </div>
    </div>
  
  </main>  
</body>
    </div>
</template>

<script> 
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'; 
export default {
     name: 'LoginNew',
  data () {
    return {
     user:{
        username:'banni442@gmail.com',
        password:'teco1212',
        //username:'cycy001@yahoo.com.tw',
        //password:'1qaz2wsx!',
         },
           }
  },
  methods:{        
         ...mapActions({           
           signin:'signin',
         }),  
  },
  computed:{
      ...mapGetters(
        {
          msg:'getmsg',
          logintitle:'getLogintitle',
        }),
  },
}
</script>

