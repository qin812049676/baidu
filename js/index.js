$(function(){
    $('.out').fullpage({
        onLeave: function(index, nextIndex, direction){
            // if (index == 1) {
            //     // $('.in-left').hide();
            //     // $('.in-right').fadeIn();
            $('.in-left').attr("id","");
             $('.in-right').attr("id","");
            //     // alert(index);
            // }
            // if (nextIndex == 1) {
            //     // $('.in-right').fadeOut();
            //    $('.in-left').attr("id","active"); 
            // }
            // $("in-left").attr("id",'active');
            // alert(1);
        },
        afterLoad: function(anchorLink, index){
            // if (index == 1) {
                $('.in-left').attr("id","active");
                 $('.in-right').attr("id","active2");
            //     // $('#fullpage').css('transform', 'none'); //fix FF uc don't show bug.
            // }
            // alert(2);
        },
    })
    $(".downs").click(function(){
    	 $.fn.fullpage.moveSectionDown();
    })
});