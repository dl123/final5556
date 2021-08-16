import Vue from 'vue'
import axios from 'axios'


export default{
    state:{
        product:[],
        tempProduct:{},
        result:true,   
        imageOverLoading:false,  
        pagination:{},   
    },
    getters:{
       getterProduct(state){ return state.product;},
       getterTemPrduct(state){return state.tempProduct;},
       getterResult(state){return state.result;}, //not work 
       getterImageOverLoading(state){return state.imageOverLoading;},   
       getterPagination(state){return state.pagination;},
    },
    actions:{
       getProduct(context,page=1){    //page=1 設定getProduct的page為預設值1，當getProduct()沒有填寫值時，將會預設page=1 (ES6 新寫法)   create by davidlee 20200714
            context.commit('changeLoadingOverlay',true,{root:true}); 
            const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/products?page=${page}`; 
            //console.log(api);
            axios.get(api).then((response) => {   
            //console.log(response.data);
            context.commit('getProductPagination',response.data.pagination);
            context.commit('getProductMutation',response.data.products); 
            context.commit('changeLoadingOverlay',false,{root:true}); 
           })

           // test Only order訂單API值
           //const apis=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/orders?page=${page}`; 
           //console.log(api);
           //axios.get(apis).then((response) => {
           //console.log('cj1');   
           //console.log(response.data);
           //console.log('cj2');
         
         // })
           
       }, 
       createProduct(context,status){            
          var data={data:status};
         console.log('aaaaa');
         console.log(status);
          const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/admin/product`;   
          //const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/product`;     
          console.log(api);  
          context.commit('changeLoadingOverlay',true,{root:true}); 
          axios.post(api,data).then((response) => {  
         console.log('cx');
          console.log(response);
          context.dispatch('getProduct');  
         })
       }, 
       deleteProduct(context,status){
         const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/admin/product/${status}`;     
         console.log(api);    
         context.commit('changeLoadingOverlay',true,{root:true}); 
         axios.delete(api).then((response) => {           
         context.dispatch('getProduct'); 
         })
     },   
       modifyProduct(context,status){                  
          var data={data:status};
          const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/admin/product/${status.id}`; 
          context.commit('changeLoadingOverlay',true,{root:true}); 
          axios.put(api,data).then((response) => {           
          context.dispatch('getProduct');
           })
       },  
       uploadFile(context,status){  
         context.commit('imageOverLoadingData',true);       
         const formData=new FormData();
         formData.append('file-to-upload',status);
         const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/admin/upload`;  
         axios.post(api,formData,{
           headers:{'Content-Type':'multipart/form-data'}
         }).then((response)=>{            
             console.log('uploadfile success Begin')
             if(response.data.success)
             {             
                context.commit('imageUrlData',response.data.imageUrl);
                context.commit('imageOverLoadingData',false);
             }             
         })         
        
       },      
    },
    mutations:{
       getProductMutation(context,payload){
           context.product=payload;
       },
       openModalData(context,{isNew,tempProduct}){
         if(isNew)
         {
            context.tempProduct={};
         }
         else
         {
            context.tempProduct=Object.assign({},tempProduct);
         }        
       },
       //not work
       changeResult(context,payload){
          context.result=payload;
       },
       imageUrlData(context,payload){ 
            Vue.set(context.tempProduct, 'imageUrl', payload);
           // vm.$set(vm.tempProduct,'imageUrl',response.data.imageUrl); //tempProduct物件要新加入imageUrl做雙向綁定，必須 vm.$set語法
       },
       imageOverLoadingData(context,payload){
           context.imageOverLoading=payload;
       },
       getProductPagination(context,payload){
          context.pagination=payload;
       },
    }
}