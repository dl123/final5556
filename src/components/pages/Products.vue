<template>
    <div>
     
     <div class="text-right mt-4">    
         <button type="button" class="btn btn-primary" @click="openModal(true)">建立新產品</button>
     </div>
     <table class="table mt-4">
         <thead>
             <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="100">是否啟用</th>
                <th width="80">編輯</th>
             </tr>
         </thead>
         <tbody>
             <tr v-for="(item,key) in Products" :key="key">
                 <td>{{item.category}}</td>
                 <td>{{item.title}}</td>
                 <td class="text-left">
                     {{item.origin_price |currency}}
                 </td>
                   <td class="text-left">
                     {{item.price |currency}}
                 </td>
                 <td>
                     <span v-if="item.is_enabled" class="text-success">啟用</span>
                     <span v-else>未啟用</span>
                 </td>
                 <td>
                     <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
                 </td>
                 <td>
                      <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(item.id)">刪除</button>
                 </td>
             </tr>
         </tbody>
     </table>

<!--Pagination Component-->
<Pagination :pagination="pagination"></Pagination>


<v-client-table ref="myTable" :data="tableData" :columns="columns" :options="options"></v-client-table>



<!--Modal CreateProdcut-->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">輸入圖片網址</label>
              <input type="text" class="form-control" id="image"
                placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
            </div>
            <div class="form-group">
              <label for="customFile">或 上傳圖片
                <i v-if="Is_imageLoad" class="fas fa-spinner fa-spin"></i>
              </label>
              <input type="file" id="customFile" class="form-control"
                ref="files" @change="uploadfile()">               
            </div>
            <img :src="tempProduct.imageUrl"  class="img-fluid" alt="">
          </div>        
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
                placeholder="請輸入標題" v-model="tempProduct.title">
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input type="text" class="form-control" id="category"
                  placeholder="請輸入分類" v-model="tempProduct.category">
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input type="unit" class="form-control" id="unit"
                  placeholder="請輸入單位" v-model="tempProduct.unit">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
              <label for="origin_price">原價</label>
                <input type="number" class="form-control" id="origin_price"
                  placeholder="請輸入原價" v-model="tempProduct.origin_price">
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input type="number" class="form-control" id="price"
                  placeholder="請輸入售價" v-model="tempProduct.price">
              </div>
            </div>
            <hr>

            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea type="text" class="form-control" id="description"
                placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea type="text" class="form-control" id="content"
                placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  v-model="tempProduct.is_enabled" 
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="updateProduct()">確認</button>       
      </div>
    </div>
  </div>
</div>

<!--Modal DeleteProduct-->
<div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger"
          >確認刪除</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import $ from 'jquery';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import Pagination from '@/components/pages/Pagination';

export default{
    data()
    {
        return {
            //Products:[],
            //tempProduct:{
    // category: "測試分類4",   
    // image: "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=621e8231a4e714c2e85f5acbbcc6a730&auto=format&fit=crop&w=1352&q=80",
    // is_enabled: 1,
    // origin_price: "3000",
    // price: "300",
    // title: "測試的產品4",
    // unit: "單位",
    // num: 3
            //},
            isNew:false,      
            //imagesrc:'',    
             columns: ["id", "name", "gender"],
      tableData: [
    {id: 11, name:'Luke Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 22, name:'Luke2 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 3,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 4,  name:'Luke4 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 5,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 6,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 7,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 8,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'},
    {id: 9,  name:'Luke3 Skywalker',gender:'male', img:'https://goo.gl/KEUxHN'}
    ],
      options: {} 
        }
    },
    components:{
      Pagination,
    },
    methods:
    { ...mapActions({
           getProductData:'getProduct',
           createProduct:'createProduct',
           deleteProduct:'deleteProduct',
           modifyProductdata:'modifyProduct',
           uploadImage:'uploadFile',
        }),
       ...mapMutations({
          openModalData:'openModalData',
          imageOverLoadingData:'imageOverLoadingData',
       }),
       getProdcuts(){
         this.getProductData();
         this.hideModal();
       },
       openModal(isNew,item){
           var vm=this;
        vm.imageOverLoadingData(false);       
        vm.openModalData({isNew:isNew,tempProduct:item});
        $('#productModal').modal('show')
        vm.isNew=isNew;
         $('#customFile').val('');  
       },
       hideModal(){
           $('#productModal').modal('hide');           
       },
       updateProduct(){
         var vm=this;        
         if(vm.isNew){
           console.log('1');
           this.createProduct(vm.tempProduct);
         }
         else
         {console.log('2');
            this.modifyProductdata(vm.tempProduct);
         }        
         this.hideModal();
       },
       uploadfile(){
           var vm=this;
           this.uploadImage(this.$refs.files.files[0]); 
       },
      //  uploadfile(){
      //    const uploadedFile=this.$refs.files.files[0];
      //    const vm=this;
      //    const formData=new FormData();
      //    formData.append('file-to-upload',uploadedFile);
      //    const api=`${process.env.APIPATH1}/api/${process.env.CUSTOMPATH}/admin/upload`;  
      //    this.$http.post(api,formData,{
      //      headers:{'Content-Type':'multipart/form-data'}
      //    }).then((response)=>{            
      //        console.log('uploadfile success Begin')
      //        if(response.data.success)
      //        {
      //         vm.$set(vm.tempProduct,'imageUrl',response.data.imageUrl); //tempProduct物件要新加入imageUrl做雙向綁定，必須 vm.$set語法
      //        }             
      //    })
      //  },
    },
    mounted(){
      this.getProdcuts();      
      this.$bus.$emit('message:push','我家牛排','success');
    },
    computed:{
       ...mapGetters({
         Products:'getterProduct',
         tempProduct:'getterTemPrduct',
         result:'getterResult',//not work  
         Is_imageLoad:'getterImageOverLoading',
         pagination:'getterPagination',      
       }), 
    },
}
</script>