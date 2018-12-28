// ==UserScript==
// @name         Ultimate user script(With AoPS scripts, and more)
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Make web browsing easier!
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function isblog(){
        // Requires Jquery
        return $(".cmty-cat-admin-heading:contains('Blog')").length > 0;
    }
    // Options
    const normalset = true;
    const reload_time = 1000;
    console.log("==== Thank You for using the best user script in the world =====");
    if(window.location.pathname.startsWith("/community/category-admin/") && window.location.hostname === "artofproblemsolving.com"){
       setInterval(function(){
           if ($("#blog-changer").length){return;}
           if(!(isblog())){
               return;
           }
           $.ajax({ type: "GET",url: "https://acscdn.pythonanywhere.com/aopsblog.html",success : function(text){if ($("#blog-changer").length){return;}$('.cmty-category-admin').prepend('<div id = "blog-changer">'+text+'</div>');}
    });},reload_time);
       }else if(window.location.hostname === "artofproblemsolving.com"){
       console.log("Ultimate user script is working on AoPS");
       }

})();
