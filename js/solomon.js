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
    let i, tabcontent, tablinks;
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
    else elm.classList.add("label-up");
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

function checkBlank() {
    let dd = document.getElementById("dd").value;
    let mm = document.getElementById("mm").value;
    let yyyy = document.getElementById("yyyy").value;
    let btn = document.getElementById("ageSubmit");
    if (dd!="" && mm!="" && yyyy!="") {
        if (btn.classList.contains("button-disabled")) {
            btn.classList.remove("button-disabled");
            btn.classList.add("button-solid");
            btn.setAttribute("onclick", "ageConfirmation()");
        }
    }
    else {
        if (btn.classList.contains("button-solid")) {
            btn.classList.remove("button-solid");
            btn.classList.add("button-disabled");
            btn.removeAttribute("onclick");
        }
    }
}

function ageConfirmed() {
    window.location.assign("home.html");
}

function ageConfirmation() {
    let dd = parseInt(document.getElementById("dd").value);
    let mm = parseInt(document.getElementById("mm").value);
    let yyyy = parseInt(document.getElementById("yyyy").value);
    let today = new Date();
    if (today.getFullYear()-yyyy>18) {ageConfirmed();}
    else if (today.getFullYear()-yyyy==18) {
        if (today.getMonth()-mm>0) {ageConfirmed();}
        else if (today.getMonth()-mm==0) {
            if (today.getDay()-dd>=0) {ageConfirmed();}
            else alert("Bạn tuổi gì xem được web chúng tôi?");
        }
        else alert("Bạn tuổi gì xem được web chúng tôi?");
    }
    else alert("Bạn tuổi gì xem được web chúng tôi?");
}

function splashFadeout() {
    let spl = document.getElementsByClassName("splash")[0];
    spl.classList.replace("splash-shown", "splash-fadeout");
    setTimeout(function () {
        document.body.removeChild(spl);
    }, 2500);
}