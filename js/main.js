var startProductBarPos=-1;
window.onscroll=function(){
  var bar = document.getElementById('nav');
  if(startProductBarPos<0)startProductBarPos=findPosY(bar);

  if(pageYOffset>startProductBarPos){
    bar.style.position='fixed';
    bar.style.top=0;
  }else{
    bar.style.position='relative';
  }

};

function findPosY(obj) {
  var curtop = 0;
  if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    curtop += obj.offsetTop;
  }
  else if (obj.y)
    curtop += obj.y;
  return curtop;
}

$('.textWord_about').hide();
$('.text2').show();

$('.link').click(function() {
    $('.textWord_about').hide();       
    $('.textWord_about[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});