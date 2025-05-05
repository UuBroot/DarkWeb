let menuOpen = false;
function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=500,scrollbars=yes'); 
    return false; 
  }
  //////////////////////////Actual Sites //////////////////////////
  function openSite() {
    document.getElementById('main').innerHTML = "";
    document.getElementById('footer').style.display = "block";
    document.getElementById('body').style.backgroundImage = "background.webp";
  }
  function openMenu() {
    if (menuOpen==false){
        document.getElementById('menu').style.display = "block";
        menuOpen = true;
    }
    else {
        document.getElementById('menu').style.display = "none";
        menuOpen = false;
    }
  }