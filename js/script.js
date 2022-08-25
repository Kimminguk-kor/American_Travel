$(function () {
  $("#nav>li>a").click(function () {
    $(this)
      .next()
      .slideToggle(300)
      .parent()
      .siblings()
      .children(".sub")
      .slideUp(300);
    $(this).parent().toggleClass("active").siblings().removeClass("active");
  });
  $(".hamBox").click(function () {
    if ($("#nav").css("display") == "none") {
      $("#nav").show(500); //display :none 일떄
    } else {
      $("#nav").hide(500); //display :block 일떄
    }
  });
  $(".hamBox").click(function () {
    $(this).children().toggleClass("active");
  });
  let showBanner = 0;

  function fadeBanner() {
    $(".mainBannerWrap>div")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".mainBannerPagerText>.pager")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".jsMobilePager>.pager")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".mainBannerPagerText>.pager").click(function () {
    showBanner = $(this).index();
    fadeBanner();
  });
  $(".jsMobilePager>.pager").click(function () {
    showBanner = $(this).index();
    fadeBanner;
  });

  $(".detailImg01 .viewImg").click(function () {
    $(".popupImg01").css("display", "block");
    $(".viewImg").css("display", "none");
  });
  $(".closePopup").click(function () {
    $(".popupImg01").css("display", "none");
    $(".viewImg").css("display", "block");
  });
  $(".detailImg02 .viewImg02").click(function () {
    $(".popupImg02").css("display", "block");
    $(".viewImg02").css("display", "none");
  });
  $(".closePopup02").click(function () {
    $(".popupImg02").css("display", "none");
    $(".viewImg02").css("display", "block");
  });
});
