
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

HaikuComponentEmbed_mckvr4_petals(
    document.getElementById('petals'),
    { loop: false,
    contextMenu: 'disabled',
    sizing: "contain"
}
);

HaikuComponentEmbed_mckvr4_venn2(
    document.getElementById('venn'),
    {
        loop: false,
        contextMenu: 'disabled',
        sizing: "contain"
    }
);

HaikuComponentEmbed_mckvr4_HandW(
    document.getElementById('h-and-w'),
    { loop: false,
    contextMenu: 'disabled',
    sizing: "contain"
}
);

HaikuComponentEmbed_mckvr4_Bowls(
    document.getElementById('bowls'),
    { loop: false,
    contextMenu: 'disabled',
    sizing: "contain"
}
);

HaikuComponentEmbed_mckvr4_sweepr(
    document.getElementById('sweepr'),
    { loop: false,
    contextMenu: 'disabled',
    sizing: "contain"
}
);

HaikuComponentEmbed_mckvr4_Diamond(
    document.getElementById('diamond'),
    { loop: false,
    contextMenu: 'disabled',
    sizing: "contain"
     }
);

let coachingPacket = document.querySelector('#coaching-packet');
let coachingSession = document.querySelector('#coaching-session');


var polygonAnim;

polygonAnim = HaikuComponentEmbed_mckvr4_Polygon(
    document.getElementById('polygon'),
    {
        loop: true,
        autoplay: false,
        contextMenu: 'disabled'
    }
);

var triangleAnim;

triangleAnim = HaikuComponentEmbed_mckvr4_Triangle(
    document.getElementById('triangle'),
    {
        loop: true,
        autoplay: false,
        contextMenu: 'disabled'
    }
);

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