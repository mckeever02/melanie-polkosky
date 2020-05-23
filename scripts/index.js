function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab-active";
}

// var venn = bodymovin.loadAnimation({
//     container: document.getElementById('venn'), // Required
//     path: '/animations/venn.json', // Required
//     renderer: 'svg', // Required
//     loop: false, // Optional
//     autoplay: true, // Optional
//     name: "Venn Animation", // Name for future reference. Optional.
// })

// var venn = bodymovin.loadAnimation({
//     container: document.getElementById('diamond'), // Required
//     path: '/animations/diamond.json', // Required
//     renderer: 'svg', // Required
//     loop: false, // Optional
//     autoplay: true, // Optional
//     name: "Diamond Animation", // Name for future reference. Optional.
// })

// var h_and_w = bodymovin.loadAnimation({
//     container: document.getElementById('h-and-w'), // Required
//     path: '/animations/h-and-w.json', // Required
//     renderer: 'html', // Required
//     loop: false, // Optional
//     autoplay: true, // Optional
//     name: "H & W Animation", // Name for future reference. Optional.
// })

if (document.getElementById('petals')) {
    HaikuComponentEmbed_mckvr4_petals(
        document.getElementById('petals'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}


if(document.getElementById('venn')) {
    HaikuComponentEmbed_mckvr4_venn2(
        document.getElementById('venn'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}



if (document.getElementById('h-and-w')) {
    HaikuComponentEmbed_mckvr4_HandW(
        document.getElementById('h-and-w'),
        { loop: false,
        contextMenu: 'disabled',
        sizing: "contain"
    }
    );
}

if (document.getElementById('bowls')) {
    HaikuComponentEmbed_mckvr4_Bowls(
        document.getElementById('bowls'),
        { loop: false,
        contextMenu: 'disabled',
        sizing: "contain"
    }
);
}

if (document.getElementById('sweepr')) {

    HaikuComponentEmbed_mckvr4_sweepr(
        document.getElementById('sweepr'),
        { loop: false,
        contextMenu: 'disabled',
        sizing: "contain"
    }
    );
}

if (document.getElementById('diamond')) {
    HaikuComponentEmbed_mckvr4_Diamond(
        document.getElementById('diamond'),
        { loop: false,
        contextMenu: 'disabled',
        sizing: "contain"
        }
    );
}

if (document.getElementById('mickey-mouse')) {
    HaikuComponentEmbed_mckvr4_mickeyMouse(
        document.getElementById('mickey-mouse'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}

if (document.getElementById('uae')) {
    HaikuComponentEmbed_mckvr4_uae(
        document.getElementById('uae'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}

if (document.getElementById('website')) {
    HaikuComponentEmbed_mckvr4_Website(
        document.getElementById('website'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}

if (document.getElementById('voice')) {
    HaikuComponentEmbed_mckvr4_Voice(
        document.getElementById('voice'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}

if (document.getElementById('copywriting')) {
    HaikuComponentEmbed_mckvr4_Copywriting(
        document.getElementById('copywriting'),
        {
            loop: false,
            contextMenu: 'disabled',
            sizing: "contain"
        }
    );
}

let coachingPacket = document.querySelector('#coaching-packet');
let coachingSession = document.querySelector('#coaching-session');


var polygonAnim;
var triangleAnim;


if (document.getElementById('polygon')) {
    polygonAnim = HaikuComponentEmbed_mckvr4_Polygon(
        document.getElementById('polygon'),
        {
            loop: true,
            autoplay: false,
            contextMenu: 'disabled'
        }
    );
}


if (document.getElementById('triangle')) {
    triangleAnim = HaikuComponentEmbed_mckvr4_Triangle(
        document.getElementById('triangle'),
        {
            loop: true,
            autoplay: false,
            contextMenu: 'disabled'
        }
    );
}

if (coachingPacket) {
    coachingPacket.addEventListener('mouseenter', function () {
        polygonAnim.play()
    })
}

if (coachingPacket) {
    coachingPacket.addEventListener('mouseleave', function () {
        polygonAnim.stop()
    })
}

if (coachingSession) {
    coachingSession.addEventListener('mouseenter', function () {
        triangleAnim.play()
    })
}

if (coachingSession) {
    coachingSession.addEventListener('mouseleave', function () {
        triangleAnim.stop()
    })
}

// if (document.getElementById('case-slider')) {
//     var slider = tns({
//         container: '.slider',
//         items: 1,
//         arrowKeys: true,
//         lazyload: true,
//         mouseDrag: true,
//         center: true,
//         gutter: 16,
//         edgePadding: 16,
//         controlsContainer: ".slider-arrows",
//         nextButton: '.slider-arrow--prev',
//         nextButton: 'slider-arrow--next',
//         responsive: {
//             640: {
//                 gutter: 24,
//             },
//             768: {
//                 gutter: 24,
//                 items: 2,
//                 edgePadding: 0
//             }
//         }
//     });
// }

// if (document.getElementById('testimonial-slider')) {
//     var slider = tns({
//         container: '.testimonial-slider',
//         items: 2,
//         center: true,
//         axis: "horizontal",
//         gutter: 24,
//         controls: true,
//         loop: true,
//         mouseDrag: true,
//         slideBy: 1
//     });
// }


var nav = responsiveNav(".nav-collapse", { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 284, // Integer: Speed of the transition, in milliseconds
    label: "", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "menu-toggle", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to <html> element
    init: function () { }, // Function: Init callback
    open: function () { }, // Function: Open callback
    close: function () { } // Function: Close callback
});

if (document.querySelector('.audio-element')) {
    GreenAudioPlayer.init({
        selector: '.audio-element',
        stopOthersOnPlay: true
    });
}

if (document.querySelector('.testimonial-glide')) {
    var testimonialGlide = new Glide('.testimonial-glide', {
        type: 'slider',
        startAt: 0,
        gap: 0,
        keyboard: true,
        focusAt: "center",
        perView: 2,
        breakpoints: {
            768: {
                perView: 1,
            }
        }
    });
    testimonialGlide.mount()
}

if (document.querySelector('.image-glide')) {
    var imageGlide = new Glide('.image-glide', {
        type: 'slider',
        startAt: 0,
        gap: 40,
        keyboard: true,
        focusAt: "center",
        perView: 2,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    });
    imageGlide.mount()
}
