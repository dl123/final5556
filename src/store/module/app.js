//import VueAxios from 'vue-axios'

export default{
    state:{
        isLoading:false,
    },
    getters:{
       getIsLoading(state){         
           return state.isLoading;
       },
    },
    actions:{
        updateLoadingOverlay(context,status){
            context.commit('changeLoadingOverlay',status);
        },
    },
    mutations:{
        changeLoadingOverlay(state,status){
            state.isLoading=status;
            //console.log('test');
        },
    }
}