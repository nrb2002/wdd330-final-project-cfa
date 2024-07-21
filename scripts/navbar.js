

    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('nav').addClass('dark');
        }
        else{
            $('nav').removeClass('dark');
        }
    })
/*menu button onclick function*/         $(document).ready(function(){
            $('.menu h4').click(function(){
                $("nav ul").toggleClass("active")
        })
        })
    