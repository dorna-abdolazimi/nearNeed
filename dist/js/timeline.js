var cw = $('.child').width();
$('.child').css({'height':cw+'px'});
$(document).ready(function(){
$(".navbar-brand").css({"font-size": "20px"});
$(".navbar-brand").css({"color": "#ffffff"});
$(".nav-button").css({"background-color": "#87B8B4"});
$("#header1").css({"color": "#ffffff"});
$("#header2").css({"color": "#ffffff"});
$("#theme1").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme2").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme3").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme4").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme5").hover(function () { $(this).css({"width": "2vw"});}, function () { $(this).css({"width": "1vw"});});
$("#theme1").click(function(){$(".nav-button").css({"background-color": "#87B8B4"});});
$("#theme2").click(function(){$(".nav-button").css({"background-color": "#4CA1D8"});});
$("#theme3").click(function(){$(".nav-button").css({"background-color": "#FFB745"});});
$("#theme4").click(function(){$(".nav-button").css({"background-color": "#806BAE"});});
$("#theme5").click(function(){$(".nav-button").css({"background-color": "#E3695C"});});
});