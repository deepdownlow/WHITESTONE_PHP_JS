$(document).ready(() => {
 const responsive = (...args) => {
  if (iPhoneX.matches) {
   $(".featured-title").css({ "font-size": "50px", "line-height": "1.1" });
   $(".home-banner-logo").css({ "width": "190px", "height": "auto", "margin-bottom": "44px", "margin-top": "100px" });
   $("#head").css({ "font-size": "24px", "margin-top": "22px" });
   $("#work-with-us").css("border", "2px solid white");
   $('#bg-vid').css("display", "none")
   $(".blue-slant").css({ "clip-path": "none", "left": "0" })
   $("section.home-banner").css({ "background-image": "url('https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')", "background-size": "cover" });
   $("h2.text-yellow").css({ "width": "181px", "margin-top": "250px" })
   //NAVBAR
   $('#nav_bar_top').css({ "position": "fixed", "top": "120px", "width": "375px" })
   $('.text-right > li').css({ "color": "red", "display": "block", "margin-bottom": "20px" })
   $('.text-right > li > a').css({ "display": "none", "letter-spaing": "2px", "color": "#494b50", "font-size": "32px" })
   $('.text-right > li:nth-child(1) > a').css({ "position": "relative", "top": "50px", "right": "-246px" })
   $('.text-right > li:nth-child(2)').css("width", "350px")
   $('.text-right > li:nth-child(2) > a').css({ "position": "relative", "top": "50px", "right": "-209px", })
   $('.text-right > li:nth-child(3) > a').css({ "position": "relative", "top": "50px", "right": "-240px" })
   $('.text-right > li:nth-child(4) > a').css({ "position": "relative", "top": "50px", "right": "-271px" })
   $('.text-right > li:nth-child(5) > a').css({ "position": "relative", "top": "50px", "right": "-260px", "color": "#002f87" })
   $('.text-right').css({ "position": "fixed", "top": "142px", "right": "200px" })
   $('.mobile_menu').css({ "position": "fixed", "top": "120px", "left": "0", "background-color": "white", "width": "375px", "height": "740px", "display": "none" })
   $('.home-community-logos > img').css({ "width": "88.7px", "width": "34.4px" })

   //HAMBURGER MENU
   $('.hamburger-menu').css({ "position": "fixed", "top": "66px", "right": "50px", "color": "#002f87", "font-size": "42px" })
   $('.hamburger-menu').click(() => {
    //change button color
    $('.mobile_menu').toggle()
    $('.text-right > li > a').toggle()
   })

   $('.home-about-top').css("height", "383px")
   $('#invest-h').css({ "font-size": "30px", "line-height": "1.1", "margin-top": "22px" })
   $('#invest-p').css({ "font-size": "12px", "line-height": "1.5", "width": "281px" })
   $('#invest-btn').css({ "margin-bottom": "50px", "font-size": "10px", "width": "144px", "height": "40px", "padding": "3.3%" })
   $('.home-about').css({ "background-size": "cover" })
   $('.about-blurb-container').css({ "width": "100%" })
   $('.text-yellow').css({ "font-size": "40px", "line-height": "1.1" })
   $('div.text-white > p').css({ "font-size": "12px", "line-height": "1.5", "width": "350px", "letter-spacing": "0.2px" })
   $('#text-box').css({ "position": "relative", "top": "-200px" })
   $('#community-btn').css({ "width": "220px", "height": "14px", "font-size": "10px", "position": "relative", "left": "50%", "transform": "translate(-50%,-50%)", "border": "2px solid #c2d500", "margin-top": "50px", "padding-bottom": "24.281px" })

   // community,featured-properties
   $('.page-header').css({ "height": "220px" })
   $('#header_text').css({ "font-size": "60px" })
   $('#top_community_text_box').css({ "position": "relative", "top": "20px" })
   $('#top_community_text_box h1').css({ "font-size": "24px" })
   $('#head_1').css({ "font-size": "40px", "line-height": "1.13", "letter-spacing": "2px", "width": "300px", "position": "relative", "top": "-60px" })
   $("#featured-properties-p p:nth-child(2)").css({ "position": "relative", "top": "-100px", "font-size": "12px", "left": "0", "line-height": "1.5", "letter-spacing": ".2px", "width": "370px" });
   $('#intro_section').css("height", "350px")
   $('#properties-h h6').css({ "font-size": "14px", "text-align": "center" })
   $('#properties-h h3').css({ "font-size": "32px", "text-align": "center" })
   $('#properties-h a').css({ "width": "140px", "font-size": "10px", "position": "relative", "left": "90px", "border": "2px solid #c2d500" })
   $('#properties-p p').css({ "text-align": "center", "font-size": "12px", "width": "312px", "line-height": "1.67" })
   $('#sub_menu').css({ "display": "none" })
   $('#tiny_p').css({ "height": "60px" })
   $('#tiny_p li').css({ "padding": "0" })
   $('#tiny_p li a').css({ "font-size": "10px", "margin-right": "25px", "top": "3px" })

   //footer responsive
   $('#footer_logo').css({ "width": "158px", "height": "17px" })
   $('.footer-social').css({ "margin-bottom": "25px" })
   $('#footer_p p').css({ "font-size": "10px", "margin-bottom": "5px" })
   $('#footer_a').css({ "position": "relative", "left": "20px", "margin": "25px 0" })
   $('#footer_a li').css({ "padding": "1%", "margin": "0" })
   $('#footer_a li a').css({ "font-size": "10px", "margin-right": "25px" })

   //WHO WE ARE => CAREER
   $('#menu_light').css({ "height": "60px", "width": "414px" })
   $('#menu_light').addClass("without-sub-menu-light")
   $('#header_two').css({ "font-size": "40px", "position": "relative", "top": "-61px", "letter-spacing": "1.13" })
   $('#now-hiring-p p').css({ "font-size": "12px", "line-height": "1.5", "position": "relative", "top": "-150px", "margin-bottom": "30px", "width": "360px", "letter-spacing": ".2px" })
   $('#job_title h6').css({ "font-size": "14px", "letter-spacing": "1.7" })
   $('#job_titles').css({ "position": "relative", "top": "-130px" })
   $('.career-item').css({ "margin-top": "0" })
   $('#career_loc img').css({ "position": "absolute", "top": "40px", "width": "11.2px", "height": "16px" })
   $('#career_loc p').css({ "position": "absolute", "top": "40px", "left": "30px" })
   $('#career_img img').css({ "width": "121.4px", "height": "91.2px", "position": "relative", "top": "-156px" })
   $('h3.text-blue').css({ "font-size": "32px", "line-height": "1.13", "letter-spacing": "1.6px", "color": "#002f87", "margin-left": "10px" })
   $('#career_content p').css({ "font-size": "12px", "line-height": "1.67", "letter-spacing": ".2px", "color": "#494b50", "width": "355px", "height": "75px", "margin-bottom": "40px", "margin-left": "10px" })
   $('#item_text p').css({ "font-size": "12px", "line-height": "1.5", "letter-spacing": ".2px", "color": "#494b50", "width": "320px", "height": "82px", "position": "relative", "left": "18px", "top": "-30px" })
   $('#img_container').css({ "position": "relative", "top": "-20px", "left": "-13px" })
   $('#culture_benefit').css({ "position": "relative", "top": "-20px" })
   $('.career_perks').css({ "height": "150px" })
   $('.career_perks > img').css({ "position": "relative", "left": "-49px" })
   $('.career_perks > h6').css({ "position": "relative", "left": "-43px" })
   $('section.careers-description::before').css({ "position": "relative", "top": "-389px", "clip-path": "polygon(0 36%, 100% 0, 100% 100%, 0% 100%)" })

   //WHO WE ARE => STORY
   $('h2.text-blue').css({ "font-size": "40px", "line-height": "1.13", "letter-spacing": "2px", "color": "#002f87", "width": "280px", "position": "relative", "top": "-70px", "left": "-2px" })
   $('#who_story_p').css({ "font-size": "12px", "line-height": "1.5", "letter-spacing": ".2px", "color": "#002f87", "width": "355px", "height": "51px", "position": "relative", "top": "-100px", "left": "-2px", "color": "#494b50" })
   $('#who_story_quote').css({ "font-size": "15px", "line-height": "1.6", "letter-spacing": "2px", "color": "#002f87", "width": "337px", "position": "relative", "top": "-100px", "left": "35px", "color": "#002f87" })
   $('#who_story_quote_name').css({ "font-size": "11px", "color": "#494b50", "height": "40px", "position": "relative", "top": "-95px", "right": "0", "margin-bottom": "70px" })
   $('#who_story_main').css({ "height": "100px" })
   $('#who_story_img').css({ "max-width": "325px", "height": "256.8px", "position": "relative", "top": "-316px" })
   $('#who_story_head').css({ "position": "relative", "top": "-285px", "left": "-10px" })
   $('#who_story_text_box img').css({ "position": "relative", "top": "-268px" })
   $('#who_story_text_box_2').css({ "margin-bottom": "-52px" })
   $('#who_story_text_box_2 h6').css({ "position": "relative", "top": "-307px", "left": "60px", "font-size": "14px", "width": "332px" })
   $('#who_story_text_box_2 p').css({ "position": "relative", "top": "-342px", "left": "60px", "font-size": "11px", "width": "294px", "line-height": "1.6" })
   $('#who_story_dis').css({ "height": "530px" })
   $('.dist-item').css({ "margin-bottom": "40px" })
   $('#who_story_container > div:nth-child(2)').css({ "position": "relative", "top": "-25px" })
   $('#who_story_container > div:nth-child(3)').css({ "position": "relative", "top": "75px" })
   $('#who_story_container > div:nth-child(4)').css({ "position": "relative", "top": "90px" })
   $('.play-icon > img').css({ "width": "82px", "height": "82px" })
   $('.intro-story').css({ "padding-bottom": "120px" })
   $('.hero-clip').css({ "clip-path": "polygon(0 0, 101% 0, 65% 100%, 0% 100%)" })
  } else if (iPad.matches) {
   $('.hamburger-menu').css({ "display": "none" })
   $('#slant-2').css({ "display": "none" })
  } else if (iPadPro.matches) {
   $('.hamburger-menu').css({ "display": "none" })
   $('#slant-2').css({ "display": "none" })
  } else {
   $('.hamburger-menu').css({ "display": "none" })
   $('#slant-2').css({ "display": "none" })
  }
 };

 const iPhoneX = window.matchMedia("(max-width: 375px)");
 const iPad = window.matchMedia("(max-width: 768px)");
 const iPadPro = window.matchMedia("(max-width: 1024px)");

 responsive();

})
