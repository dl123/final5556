import axios from 'axios';
import router from '@/router';

export default{
    state:{  
         msg:'Log in (DavidLee)',
         logintitle:'login-title',
    },
    getters:{
       getmsg(state){            
            return state.msg;
       },
       getLogintitle(state){            
            return state.logintitle;
       },
    },
    actions:{
        signin(context,status){
            context.commit('changeLoadingOverlay',true,{root:true});           
            axios.post(`${process.env.APIPATH1}/admin/signin`,status).then((response) => 
            { 
               context.commit('isloginSuccess',response);              
               context.commit('changeLoadingOverlay',false,{root:true});
            })           
        },
        signout(context,status){
            const api=`${process.env.APIPATH1}/logout`;
            console.log(api);
            context.commit('changeLoadingOverlay',true,{root:true}); 
            axios.post(api).then((response) => 
            {              
              if(response.data.success)
               {                
                router.push('/LoginNew');
               }
               context.commit('changeLoadingOverlay',false,{root:true}); 
            })
        },
    },
    mutations:{
      isloginSuccess(context,payload){
           if(payload.data.success)
           {              
               router.push('/admin/products');              
           }
           else
           {              
               context.msg='Login Information Error';
               context.logintitle='login-titleError';
           }          
      },
    }
}