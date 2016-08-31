//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 1.0 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字
//主要功能5 : 使用DOM方法，依照語系更換對應的Image

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======
function chg_lang(lang_index){

        forceChangeLangSetCookie();
        auto_chg_lang(lang_index);
}



// 切換語系
function auto_chg_lang(lang_index){

      //寫入Cookie
      setCookie('lang_code',lang_index,'365');
      var xck= getCookie('lang_code');
			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}



    // 設定cookie 並將 forceChangeLang_index 值填上1,cookie一小時後失效
    function   forceChangeLangSetCookie(){
      //寫入Cookie
      setCookie('forceChangeLang_index',1,'0.1');
      var xcka= getCookie('forceChangeLang_index');

    }

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}


// 根據lang_index更換IMG標籤圖片

function changeImageByLang(lang_index){

  // 圖片路徑 請自行更換，不夠用也可以自己新增
  console.log("change image function start now");
  var tw_img1_src="images/pcstick_banner_v2_0808.jpg";
  var eng_img1_src="images/pcstick_banner_v2_0808_eng.jpg";
  var jp_img1_src="images/pcstick_banner_v2_0808.jpg";

  var tw_img2_src="images/pcstick_banner_v1_0808.jpg";
  var eng_img2_src="images/pcstick_banner_v1_0808_eng.jpg";
  var jp_img2_src="images/pcstick_banner_v1_0808.jpg";

  //var tw_img3_src="images/slider_example_3_tw.jpg";
  //var eng_img3_src="images/slider_example_3_eng.jpg";
  //var jp_img3_src="images/slider_example_3_jp.jpg";

  switch (lang_index) {
    case 0:
        document.getElementById('slideshowImage1').src=tw_img1_src;
        document.getElementById('slideshowImage2').src=tw_img2_src;
        console.log("change image to CHT version");
      break;
    case 1:
        document.getElementById('slideshowImage1').src=eng_img1_src;
        document.getElementById('slideshowImage2').src=eng_img2_src;
        console.log("change image to ENG version");
      break;
    case 2:
        document.getElementById('slideshowImage1').src=jp_img1_src;
        document.getElementById('slideshowImage2').src=jp_img2_src;
        console.log("change image to JP version");
      break;
    default:

  }


}



// 根據語系更改所有文字
function changeAllNavBarUIWording(arr,lang_index){

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_navproduct').innerHTML = arr[lang_index].lang_navproduct;
  document.getElementById('lang_navscenario').innerHTML = arr[lang_index].lang_navscenario;
  document.getElementById('lang_navspec').innerHTML = arr[lang_index].lang_navspec;
  document.getElementById('lang_navload').innerHTML = arr[lang_index].lang_navload;
  document.getElementById('lang_navfaq').innerHTML = arr[lang_index].lang_navfaq;
  document.getElementById('lang_navch').innerHTML = arr[lang_index].lang_navch;
  document.getElementById('lang_naven').innerHTML = arr[lang_index].lang_naven;
  document.getElementById('lang_Pdt_intro').innerHTML = arr[lang_index].lang_Pdt_intro;

  document.getElementById('lang_smartestpc').innerHTML = arr[lang_index].lang_smartestpc;
  document.getElementById('lang_smartestpc_cont').innerHTML = arr[lang_index].lang_smartestpc_cont;
  document.getElementById('lang_pcperformance').innerHTML = arr[lang_index].lang_pcperformance;
  document.getElementById('lang_pcperformance_cont').innerHTML = arr[lang_index].lang_pcperformance_cont;
  document.getElementById('lang_HDMI').innerHTML = arr[lang_index].lang_HDMI;
  document.getElementById('lang_HDMI_cont').innerHTML = arr[lang_index].lang_HDMI_cont;
  document.getElementById('lang_SKT').innerHTML = arr[lang_index].lang_SKT;
  document.getElementById('lang_SKT_cont').innerHTML = arr[lang_index].lang_SKT_cont;
  document.getElementById('lang_pluginfor').innerHTML = arr[lang_index].lang_pluginfor;
  document.getElementById('lang_pluginfor_cont').innerHTML = arr[lang_index].lang_pluginfor_cont;
  document.getElementById('lang_usb_comp').innerHTML = arr[lang_index].lang_usb_comp;
  document.getElementById('lang_usb_cont').innerHTML = arr[lang_index].lang_usb_cont;

  document.getElementById('lang_scenario_title').innerHTML = arr[lang_index].lang_scenario_title;
  document.getElementById('lang_APPLIC_title').innerHTML = arr[lang_index].lang_APPLIC_title;

  document.getElementById('lang_Pdt_spec').innerHTML = arr[lang_index].lang_Pdt_spec;
  document.getElementById('lang_spec_SOC').innerHTML = arr[lang_index].lang_spec_SOC;
  document.getElementById('lang_spec_MTK').innerHTML = arr[lang_index].lang_spec_MTK;
  document.getElementById('lang_spec_mem').innerHTML = arr[lang_index].lang_spec_mem;
  document.getElementById('lang_spec_mem_cont').innerHTML = arr[lang_index].lang_spec_mem_cont;
  document.getElementById('lang_spec_sd').innerHTML = arr[lang_index].lang_spec_sd;
  document.getElementById('lang_spec_sd_cont').innerHTML = arr[lang_index].lang_spec_sd_cont;
  document.getElementById('lang_spec_extcard').innerHTML = arr[lang_index].lang_spec_extcard;
  document.getElementById('lang_spec_extcard_cont').innerHTML = arr[lang_index].lang_spec_extcard_cont;
  document.getElementById('lang_spec_conne').innerHTML = arr[lang_index].lang_spec_conne;
  document.getElementById('lang_spec_conne_cont').innerHTML = arr[lang_index].lang_spec_conne_cont;
  document.getElementById('lang_spec_io').innerHTML = arr[lang_index].lang_spec_io;
  document.getElementById('lang_spec_iocont').innerHTML = arr[lang_index].lang_spec_iocont;
  document.getElementById('lang_spec_adap').innerHTML = arr[lang_index].lang_spec_adap;
  document.getElementById('lang_spec_adap_cont').innerHTML = arr[lang_index].lang_spec_adap_cont;
  document.getElementById('lang_spec_sys').innerHTML = arr[lang_index].lang_spec_sys;
  document.getElementById('lang_spec_win10').innerHTML = arr[lang_index].lang_spec_win10;
  document.getElementById('lang_spec_dim').innerHTML = arr[lang_index].lang_spec_dim;
  document.getElementById('lang_spec_dim_cont').innerHTML = arr[lang_index].lang_spec_dim_cont;

  document.getElementById('lang_Suport').innerHTML = arr[lang_index].lang_Suport;
  document.getElementById('lang_bl_title').innerHTML = arr[lang_index].lang_bl_title;
  document.getElementById('lang_bl_text').innerHTML = arr[lang_index].lang_bl_text;
  document.getElementById('lang_download_text01').innerHTML = arr[lang_index].lang_download_text01;
  document.getElementById('lang_iphone_title').innerHTML = arr[lang_index].lang_iphone_title;
  document.getElementById('lang_iphone_text').innerHTML = arr[lang_index].lang_iphone_text;
  document.getElementById('lang_download_text02').innerHTML = arr[lang_index].lang_download_text02;
  document.getElementById('lang_skt_title').innerHTML = arr[lang_index].lang_skt_title;
  document.getElementById('lang_skt_text01').innerHTML = arr[lang_index].lang_skt_text01;
  document.getElementById('lang_download_text03').innerHTML = arr[lang_index].lang_download_text03;

  return;
}





function detectUserLang(){

    var IsforceChangeLang_index= getCookie('forceChangeLang_index');
    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();

  if (IsforceChangeLang_index!=1){
    switch (currentBrowserLang) {
      case "zh-tw":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-cn":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-hk":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "ja":
            auto_chg_lang(2);
            autolang_index=2;
        break;

      default:
            auto_chg_lang(1);
            autolang_index=1;
        break;
    }

    setCookie('lang_code',autolang_index,'365');

  } else {
    var Previous_Lang_index= getCookie('lang_code');
    auto_chg_lang(Previous_Lang_index);
  }
}


//設定cookie的function
function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires+"; "+ 'path=/';
  }
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires+"; "+ 'path=/';
}

// 讀取cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}



//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";


//=====文字儲存區 END======