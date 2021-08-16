<template>

  <body>
    <div id="login">
        <h3 class="text-center text-white pt-5">DavidLee</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control" placeholder="Email address" v-model="model.UserId">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="model.Password">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" @click.prevent="signin">
                                  
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#" class="text-info" @click.prevent="isAuthenticated">isAuthenticated</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</template>

<script>
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
    //  user:{
    //     username:'banni442@gmail.com',
    //     password:'teco1212',        
    //      },
        model:{
          UserId:'abc',
          Password:'123',
        },
         test:{
          Username:'abc11',
          Passwords: this.ConvertToByteArray('123'),
        },
       
           }
  },
  methods:{
        signin()
        {
         
             
             //const api=`http://localhost:50431/api/token/signIn`;
               const api=`http://localhost:50431/api/token/test`;
           
             
             console.log(api);
             var vm=this;
             console.log(qs.stringify(vm.model));
             console.log({model:vm.model});
             this.$http.post(api,vm.test).then((response) => 
             {
               console.log(response.data)   
               window.localStorage.setItem('Authoriaztion', response.data.access_token)           
             })
        },
        isAuthenticated(){
const config = {
    headers: { 
               'Content-Type': 'application/x-www-form-urlencoded'
             }
};

const bodyParameters = {
   key: "value"
};
          console.log(window.localStorage.getItem('Authoriaztion'));
 const api=`http://localhost:50431/api/token/isAuthenticated`;
             console.log(api);
             var vm=this;            
             this.$http.post(api,vm.model,config).then((response) => 
             {
               console.log(response.data)              
             })
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>
