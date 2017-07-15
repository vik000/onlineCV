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
  var jump=element.getBoundingClientRect().top;
  console.log(jump);
}


} //final de window.onload
