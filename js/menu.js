window.onload = function(){
var navItems = document.getElementsByClassName('tnav');

for (var i=0; i<navItems.length; i++){
  navItems[i].addEventListener('click',function(event){
    //console.log(this.getElementsByTagName('a')[0].href.split('#'));
    var sectionToGo=this.getElementsByTagName('a')[0].href.split('#');
    if (sectionToGo.length ===2){
      event.preventDefault();
      var goTo=sectionToGo[sectionToGo.length-1];
      //console.log(goTo);
      getelementByIdAndScroll(goTo);
    }
  });
}


function getelementByIdAndScroll(id){
  var element;

  element=document.getElementById(id);

  scrollToElement(element);
}

function scrollToElement(element){
  //console.log(element.getBoundingClientRect());
  var jump=element.getBoundingClientRect().top*0.2;
  console.log(jump);

  window.scroll(0,jump);
  //document.documentElement.scrollTop = jump;
  //document.body.scrollTop+=jump;

  if(!element.lastJump || element.lastJump > jump){
    element.lastJump=Math.abs(jump);

    setTimeout(function(){
      scrollToElement(element);
    },30);
  }else {
    element.lastJump=null;
  }
}


} //final de window.onload
