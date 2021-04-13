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