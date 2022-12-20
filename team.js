var timeout = null;
$(".diamond").click(function () {
  var $diamond = $(this);
  var $diamondParent = $diamond.parent();
  clearTimeout(timeout);
  $("#userbg").toggleClass("on");
  $(".user, .userinfo").not(this).parent().removeClass("on");

  timeout = setTimeout(function () {
    $diamondParent.toggleClass("on");
    clearTimeout(timeout);
  }, 300);
  $diamondParent.next(".userinfo").toggleClass("on");
});

$(".close").click(function () {
  $(".user, .userinfo, #userbg").removeClass("on");
});

// nav-bar hover animation
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

// burger toggele button toggeling animation.

const toggelButton = document.getElementsByClassName('toggle-button')[0];
const navebarList= document.getElementsByClassName('nav-bar-list')[0]

toggelButton.addEventListener('click', () => {
    navebarList.classList.toggle('active')
})