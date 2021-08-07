/*
 *banner menu特效
 *日期：2020年12月27日
 *姓名：风微微 
 * 
 */
(function () {
    var banner_nav_ul = document.getElementById("banner_nav_ul");
    var banner_nav_list = banner_nav_ul.getElementsByTagName("li");
    var menus = document.querySelectorAll(".menus-box .menu");
    var banner_nav = document.getElementById("banner_nav");

    banner_nav_ul.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute("data-t");
            //nav li加current
            for (var i = 0; i < banner_nav_list.length; i++) {
                banner_nav_list[i].className =banner_nav_list[i].getAttribute("data-t");
            }
            e.target.className += " current";
            //menu加current
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = "menu";
            }
            var themenu = document.querySelector(".menus-box .menu[data-t=" + t + "]");
            themenu.className = "menu current";
        }
    }
    banner_nav.onmouseleave = function () {
        for (var i = 0; i < banner_nav_list.length; i++) {
            //1.把nav list的current去掉            
            banner_nav_list[i].className = banner_nav_list[i].getAttribute("data-t");
            //2.把menu的current去掉
            menus[i].className = "menu";
        }

    }
})();