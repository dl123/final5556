import axios from 'axios'
import VueAxios from 'vue-axios'


export default{
    data(){
        return {
            result:{},
        }
    },
    httpPost(api){
        this.$http.get(api).then((response) => {              
            vm.Products=response.data.products;
            this.hideModal();
            })
    },
    httpGet(api,object){    
        var vm=this;  
        //vm.upteLoadingOverlay(true);       
        axios.post(api,object).then((response) => 
        { 
             return response;
        })
    },
}