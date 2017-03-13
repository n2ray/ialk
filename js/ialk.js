var transparent = true;

$(document).ready(function(){
    if($('.navbar-bg-on-scroll').length != 0){
        $(window).on('scroll', ialk.checkScrollForTransparentNavbar)
    }
});

ialk = {
    checkScrollForTransparentNavbar: debounce(function() {
        if($(document).scrollTop() > 160 ) {
            if(transparent) {
                transparent = false;
                $('.navbar-bg-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('.navbar-bg-on-scroll').addClass('navbar-transparent');
            }
        }
    }, 17)
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};