(function(a){a(window).on("load",function(){a(".preloader").fadeOut(1000);var b=a(".grid-memberlist").isotope({itemSelector:".filter-item",layoutMode:"fitRows",});var c={ium:function(){var d=a(this).find(".name").text();return d.match(/ium$/)}};a(".button-group").on("click",".filter-btn",function(){var d=a(this).attr("data-filter");d=c[d]||d;b.isotope({filter:d})});a(".button-group").each(function(f,e){var d=a(e);d.on("click",".filter-btn",function(){d.find(".is-checked").removeClass("is-checked");a(this).addClass("is-checked")})})});a(document).ready(function(){a("ul>li>.submenu").parent("li").addClass("menu-item-has-children");a("ul").parent("li").on("hover",function(){var d=a(this).find("ul");var e=a(d).offset();if(e.left+d.width()>a(window).width()){var f=-a(d).width();d.css({left:f})}});a(".menu li a").on("click",function(d){var f=a(this).parent("li");if(f.hasClass("open")){f.removeClass("open");f.find("li").removeClass("open");f.find("ul").slideUp(300,"swing")}else{f.addClass("open");f.children("ul").slideDown(300,"swing");f.siblings("li").children("ul").slideUp(300,"swing");f.siblings("li").removeClass("open");f.siblings("li").find("li").removeClass("open");f.siblings("li").find("ul").slideUp(300,"swing")}});a(".ellepsis-bar").on("click",function(d){var f=a(".header-top");if(f.hasClass("open")){f.removeClass("open");f.slideUp(300,"swing");a(".overlayTwo").removeClass("active")}else{f.addClass("open");f.slideDown(300,"swing");a(".overlayTwo").addClass("active")}});a(".header-bar").on("click",function(){a(this).toggleClass("active");a(".menu").toggleClass("active")});var b=a("header");a(window).on("scroll",function(){if(a(this).scrollTop()>300){b.addClass("header-fixed fadeInUp")}else{b.removeClass("header-fixed fadeInUp")}});a(function(){a(window).on("scroll",function(){if(a(this).scrollTop()>300){a(".scrollToTop").css({bottom:"5%",opacity:"1",transition:"all .5s ease"})}else{a(".scrollToTop").css({bottom:"-30%",opacity:"0",transition:"all .5s ease"})}});a("a.scrollToTop").on("click",function(){a("html, body").animate({scrollTop:0},500);return false})});a(".counter").counterUp({delay:10,time:2000});var c=new Swiper(".blog-slider",{slidesPerView:1,spaceBetween:0,speed:1200,navigation:{nextEl:".blog-slider-next",prevEl:".blog-slider-prev",},autoplay:{delay:2500,disableOnInteraction:false,},loop:true});a(".price-item").on("mouseenter",function(){a(this).addClass("active").parent().siblings().find(".price-item").removeClass("active")})});a(function(){var b=a("#contact-form");var c=a(".form-message");a(b).submit(function(d){d.preventDefault();var f=a(b).serialize();a.ajax({type:"POST",url:a(b).attr("action"),data:f}).done(function(e){a(c).removeClass("error");a(c).addClass("success");a(c).text(e);a("#contact-form input, #contact-form textarea").val("")}).fail(function(e){a(c).removeClass("success");a(c).addClass("error");if(e.responseText!==""){a(c).text(e.responseText)}else{a(c).text("Oops! An error occured and your message could not be sent.")}})})})}(jQuery));