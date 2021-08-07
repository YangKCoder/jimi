/*
 *返回顶部特效
 *日期：2020年12月27日
 *姓名：风微微 
 * 
 */
(function(){
    var backtotop = document.getElementById("backtotop");

    var timer;

    backtotop.onclick = function(){
         clearInterval(timer);
         var timer = setInterval(() => {
             if(document.documentElement.scrollTop<=0){
                 clearInterval(timer);
             }
             document.documentElement.scrollTop-=100;
         }, 20);
    }

    window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop || window.scrollY;
        if(scrollTop==0){
            backtotop.style.display="none";
        }else{
            backtotop.style.display="block";
        }
    }

})();