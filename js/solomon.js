function navTransform() {
    var elmt = document.getElementsByTagName('html')[0];
    var nav = document.getElementsByClassName('nav')[0];
    if (elmt.scrollTop == 0) {
        // Top of page
        if (nav.classList.contains('nav-scroll')) {
            nav.classList.remove('nav-scroll');
            nav.classList.add('nav-top');
            if (nav.classList.contains('material')) nav.classList.remove('material')
        }
    }
    else {
        // Scrolled
        if (nav.classList.contains('nav-top')) {
            nav.classList.remove('nav-top');
            nav.classList.add('nav-scroll', 'material');
        }
    }
}

function tabSwitch(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("panel-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("panel-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }
    document.getElementById(tabId).style.display = "block";

    evt.currentTarget.className += " tab-active";
}

function labelMove(inputId) {
    let elm = document.getElementById("l-"+inputId);
    let ipt = document.getElementById(inputId);
    if (elm.classList.contains("label-up")) {
        if (ipt.value === "") elm.classList.remove("label-up");
    }
    else elm.classList.add("label-up")
    if (inputId==="birth") ipt.removeAttribute("onfocus");
}

function passwordReadability(elm, pwdid) {
    let pwd = document.getElementById(pwdid);
    if (elm.classList.contains("icon-show-small")) {
        pwd.type = "text";
        elm.classList.remove("icon-show-small");
        elm.classList.add("icon-hide-small");
    }
    else {
        pwd.type = "password";
        elm.classList.remove("icon-hide-small");
        elm.classList.add("icon-show-small");
    }
}