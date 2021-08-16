<template>
    	<!-- Start project Area -->
			<section class="project-area section-gap" id="project">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-70 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10">{{$t('projectArea.title')}}</h1>
								<p>{{$t('projectArea.title_descrition')}}</p>
							</div>
						</div>
					</div>		
				
					<div class="row">
						<div class="col-lg-6 project-left">
							<div class="single-project  pb-100" v-for="(item,key) in project_List_L" :key="key">														
								<img class="img-fluid" :src="item.imgSrc" alt=""><br>
								<h4 class="pt-50 pb-20">
                                 <i class="col-lg-4 fa fa-angle-double-down locentre"></i></h4>		
								<h4 class="pt-30 pb-20"><a href="#">{{item.title}}</a></h4>
								<p>
									{{item.description}} 
									<a v-if="item.Is_Link" :href="item.Link" target="_blank" style="color: red; font-weight: bold; font-size: larger;">點選參觀網站</a>
								</p>
							</div>	
												
						</div>
						<div class="col-lg-6 project-right">
							<div class="single-project" v-for="(item,key) in project_List_R" :key="key">
								<h4 class="pt-100 pb-30"><a href="#">{{item.title}}</a></h4>
								<p class=" pb-60">
									{{item.description}} 
									<a v-if="item.Is_Link" :href="item.Link" target="_blank" style="color: red; font-weight: bold; font-size: larger;">點選參觀網站</a>
								</p>
						        	<h4 class=" pb-30">
                                 <i class="col-lg-4 fa fa-angle-double-up locentre"></i></h4>
								<img class="img-fluid" :src="item.imgSrc" alt="">								
							</div>		
						</div>
					</div>
				</div>	
			</section>
			<!-- End project Area -->
</template>

<script>
export default {
	data(){
		return{		
			// project_List:[			
			// 	{imgSrc:require('@/assets/resume_01/images/API.jpg'),title:'Litang 八字App Api撰寫(WEB API)',Year:'201503'
			// 	,description:'-	撰寫Api提供Android及ios APP串接，使用WEB API C#所開發，並透過JOSON傳遞資料。測試API方面是透過Postman來測試API是否可行。',side:'R'},
				
			//     {imgSrc:require('@/assets/resume_01/images/美科.jpg'),title:'美科美髮頭皮檢測軟體系統(Win Form, Web Form 功能新增)',Year:'201506'
			// 	,description:': 美科美髮護髮:頭皮檢測軟體系統(Win Form)，搭配顯微頭皮放大鏡拍攝頭皮建立客戶相關資料，使用內部連線的系統。新增建立筆電自拍功能，當建立客戶資料時，可使用筆電攝影拍攝來建立客戶資料，新增頭皮拍攝異動比對(拍攝前後圖片)。。新增建立筆電自拍功能，使用第三方套件AForge，來呼叫WebCam，資料庫連線使用Spring.NET。▪	新增頭皮拍攝異動比對: 新增異動比對於系統Win Form 及 Web Form讓客戶可下載。',side:'L'},

			// 	{imgSrc:require('@/assets/resume_01/images/acmebooks.jpg'),title:'世一官網(ASP.NET MVC)',Year:'201510'
			// 	,description:'-	此網站為購物平台，前台網頁切版套用MVC，撰寫後台管理=>產生一組barcode匯出成PDF擋(產生pdf擋用第三方套件itextsharp來產生)，將設計師網頁需做切版分割成主共用畫面及次共用畫面。資料庫連線使用MSSQL搭配CODE FIRST來做DB連建及取相關資料。',side:'R'},
				 
			// 	{imgSrc:require('@/assets/resume/img/l1.jpg'),title:'MagicNLP官網(ASP.NET MVC)',Year:'201610'
			// 	,description:'-	此網站為海彙企管Magicnlp官網介紹此公司課程及最近活動等..，從網頁設計師拿來Template，切割master pages，將相關資料套入其中，其後端網頁管理編輯撰寫。資料庫連線使用MSSQL搭配CODE FIRST來做DB連建及取相關資料。',side:'R'},
							    
            //     {imgSrc:require('@/assets/resume_01/images/MBS.jpg'),title:'DISCOVER卡收單系統自建案及維運(VB)',Year:'201703'
			// 	,description:'台新MBS系統用VB語言，台新VB DISCOVER系統建置案，在舊系統VB底成架構下建置一套DISCOVER專屬的收單系統，架構批次及使用者用的系統沿用舊有之前MBS一般信用卡系統做建置及MBS台新VB信用卡系統維運。',side:'R'},				
				
            //     {imgSrc:require('@/assets/resume_01/images/APSS.jpg'),title:'台新信用卡網站自建站(ASP.NET WEB FORM)',Year:'201810'
			// 	,description:'台新信用卡收單帳務卡自建案，台新收單信用卡自建案VB系統轉APS.NET WEB FORM系統，主要負責進件特店系統轉至及一些帳務系統外掛系統轉至(EXCEL報表建置及相關檔案結轉如每日卡片BIN檔結轉等..)。',side:'L'},
			   
		    //  	{imgSrc:require('@/assets/resume_01/images/APSS2.jpg'),title:'台新信用卡系統及APSS維運及開發(ASP.NET WEB FORM)',Year:'201903'
			// 	,description:'台新信用卡收單帳務卡自建案，開發的內容從台新信用卡特店系統開發及維護，新增功能特店業務系統(財稅繳費平台)開發，PCI-DSS信用卡安全規範開發。▪PCI-DSS主要DB裡面存相關敏感資料如卡號等，使用SQL SERVER DMK(Database Master key)建立加密金鑰、儲存加密金鑰的憑證及並在WEB建立UI管理金鑰，每三個月必須換金鑰憑證。▪	跨境系統相關報表撰寫使用Epplus客製化撰寫並搭配Stored Procedure。▪	程式更新時必須先更新台新測試環境內的測試環境，台新作業人員測試通過，才讓台新的資訊協助更新正式環境。',side:'L'},
			// ]
			project_List_R:[
			  {imgSrc:require('@/assets/resume_01/images/美科.jpg'),title:'美科美髮頭皮檢測軟體系統(Win Form, Web Form 功能新增)',Year:'201506',Is_Link:false,Link:''
				,description:'- 美科美髮護髮:頭皮檢測軟體系統(Win Form)，搭配顯微頭皮放大鏡拍攝頭皮建立客戶相關資料，使用內部連線的系統。新增建立筆電自拍功能，當建立客戶資料時，可使用筆電攝影拍攝來建立客戶資料，新增頭皮拍攝異動比對(拍攝前後圖片)。。新增建立筆電自拍功能，使用第三方套件AForge，來呼叫WebCam，資料庫連線使用Spring.NET。▪	新增頭皮拍攝異動比對: 新增異動比對於系統Win Form 及 Web Form讓客戶可下載。',side:'L'},
			
			  {imgSrc:require('@/assets/resume/img/l1.jpg'),title:'MagicNLP官網(ASP.NET MVC)',Year:'201610',Is_Link:false,Link:''
				,description:'-	此網站為海彙企管Magicnlp官網介紹此公司課程及最近活動等..，從網頁設計師拿來Template，切割master pages，將相關資料套入其中，其後端網頁管理編輯撰寫。資料庫連線使用MSSQL搭配CODE FIRST來做DB連建及取相關資料。',side:'R'},
		 
		     {imgSrc:require('@/assets/resume_01/images/APSS.jpg'),title:'台新信用卡網站自建站(ASP.NET WEB FORM)',Year:'201810',Is_Link:false,Link:''
				,description:'- 台新信用卡收單帳務卡自建案，台新收單信用卡自建案VB系統轉APS.NET WEB FORM系統，主要負責進件特店系統轉至及一些帳務系統外掛系統轉至(EXCEL報表建置及相關檔案結轉如每日卡片BIN檔結轉等..)。',side:'L'},

			 {imgSrc:require('@/assets/resume_01/images/weather.jpg'),title:'氣象預報網站',Year:'202011',Is_Link:true,Link:'https://dl123.github.io/weather_part2/#/'
				,description:'- 練習vue串接政府氣象API預測，根據中間搜尋欄位出入步行縣市，最上面將會顯示給個縣市的所有區域，點選區域下面將會顯示，該區域一個星期的氣象預報，同時點選非當日時，會顯示細節。',side:'L'},
		     ],
				project_List_L:[
				{imgSrc:require('@/assets/resume_01/images/API.jpg'),title:'Litang 八字App Api撰寫(WEB API)',Year:'201503',Is_Link:false,Link:''
				,description:'-	撰寫Api提供Android及ios APP串接，使用WEB API C#所開發，並透過JOSON傳遞資料。測試API方面是透過Postman來測試API是否可行。',side:'R'},
				
				{imgSrc:require('@/assets/resume_01/images/acmebooks.jpg'),title:'世一官網(ASP.NET MVC)',Year:'201510',Is_Link:false,Link:''
				,description:'-	此網站為購物平台，前台網頁切版套用MVC，撰寫後台管理=>產生一組barcode匯出成PDF擋(產生pdf擋用第三方套件itextsharp來產生)，將設計師網頁需做切版分割成主共用畫面及次共用畫面。資料庫連線使用MSSQL搭配CODE FIRST來做DB連建及取相關資料。',side:'R'},
				 							    
                {imgSrc:require('@/assets/resume_01/images/MBS.jpg'),title:'DISCOVER卡收單系統自建案及維運(VB)',Year:'201703',Is_Link:false,Link:''
				,description:'- 台新MBS系統用VB語言，台新VB DISCOVER系統建置案，在舊系統VB底成架構下建置一套DISCOVER專屬的收單系統，架構批次及使用者用的系統沿用舊有之前MBS一般信用卡系統做建置及MBS台新VB信用卡系統維運。',side:'R'},				
							   
		     	{imgSrc:require('@/assets/resume_01/images/APSS2.jpg'),title:'台新信用卡系統及APSS維運及開發(ASP.NET WEB FORM)',Year:'201903',Is_Link:false,Link:''
				,description:'- 台新信用卡收單帳務卡自建案，開發的內容從台新信用卡特店系統開發及維護，新增功能特店業務系統(財稅繳費平台)開發，PCI-DSS信用卡安全規範開發。▪PCI-DSS主要DB裡面存相關敏感資料如卡號等，使用SQL SERVER DMK(Database Master key)建立加密金鑰、儲存加密金鑰的憑證及並在WEB建立UI管理金鑰，每三個月必須換金鑰憑證。▪	跨境系統相關報表撰寫使用Epplus客製化撰寫並搭配Stored Procedure。▪	程式更新時必須先更新台新測試環境內的測試環境，台新作業人員測試通過，才讓台新的資訊協助更新正式環境。',side:'L'},

				{imgSrc:require('@/assets/resume_01/images/UBIKEMAP.jpg'),title:'UBIKE MAP 查詢租借狀態',Year:'202102',Is_Link:true,Link:'https://dl123.github.io/taipei_bikemap/#/'
				,description:'- 練習vue串接UBIKE API。使用第三方套件vue2-leaflet，建立map。使用政府官方UBIKE API，來串接。依據縣市來連動區域，並顯示每個區域的UBIKE的可租借數量，即可還車數量。',side:'R'},
			],
		}//return
	},//Data()
	computed:{
        //   Cproject_List_R(){			
		// 	  var vm=this;	
		// 	  var resultArray=[];		  
		// 	  var testOrder=vm.project_List.sort(function (a, b) { return a.Year < b.Year ? 1 : -1;});						 	  
		// 	  var test= testOrder.map(function(item,index,arrary){				  
		// 		  if(index % 2!=0)
		// 		  {					
		// 			resultArray.push(item);					 
		// 		  }					 
		// 	  });			 
		// 	  return resultArray;
		//   },
		//    Cproject_List_L(){			  
		// 	  var vm=this;	
		// 	  var resultArray=[];		  
		// 	  var testOrder=vm.project_List.sort(function (a, b) { return a.Year < b.Year ? 1 : -1;});			  
		// 	  var test= testOrder.map(function(item,index,arrary){
		// 		  if(index % 2==0)
		// 		  { 							
        //             resultArray.push(item);
		// 		  }	
		// 	  });
		// 	   return resultArray;
		//   },
	},//Computed
}
</script>

<style lang="scss" scoped>     
	  //@/assets/resume_01/images/APSS.jpg
	.locentre
	{
		// position: absolute;
    bottom: 7%;
    left: 50%;
    width: 40px;
    height: 40px;
    font-size: 40px;
    line-height: 40px;
	-webkit-animation: bounce 2s infinite ease-in-out;	
	color: rgb(158, 152, 145);
	}

</style>