

export default{
    state:{      
        lang: 'tw',        
    },
    getters:{
      // getIsLoading(state){         
     //      return state.isLoading;
      // },
    },
    actions:{      
       setLang(context,status){  
           context.commit('changelang',status.target.dataset.lang);
       },
    },
    mutations:{       
       changelang(state,payload){
         state.lang=payload;
         localStorage.setItem('language', payload)
         history.go(0)
       },
     
    }
}