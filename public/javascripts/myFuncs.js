function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height= (newheight) + "px";
    document.getElementById(id).width= (newwidth) + "px";
}


/****************************************
 * Floating Navigation jQuery feature
 ****************************************/
$(function() {
         
    // get initial top offset of navigation 
    var floating_navigation_offset_top = $('#navi').offset().top;
             
    // define the floating navigation function
    var floating_navigation = function(){
                // current vertical position from the top
        var scroll_top = $(window).scrollTop(); 
         
        // if scrolled more than the navigation, change its 
                // position to fixed to float to top, otherwise change 
                // it back to relative
        if (scroll_top > floating_navigation_offset_top) { 
            $('#navi').css({ 'position': 'fixed', 'top':0});
        } else {
            $('#navi').css({ 'position': 'relative' }); 
        }   
    };
     
    // run function on load
    floating_navigation();
     
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();
    });
 
});