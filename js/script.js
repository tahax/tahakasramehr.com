function removeEffect(){
    // document.querySelector(".loading").style.display="none";
    console.log(onload(event));
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
/*********************************************/
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       350,          // default
        mobile:       true,       // default
        live:         false        // default
    }
)
new WOW().init();
/**********************************************/

var takMenuOP = 0;

$(document).ready(function(){
    $(".tak-menu , .tak-menu-a").click(function(){
        if (takMenuOP === 0){
            takMenuOP = 1;
            document.getElementsByClassName('t1-line-ab')[0].style.transform = "rotate(225deg)";
            document.getElementsByClassName('tak-menu-line')[0].style.opacity = "0";
            document.getElementsByClassName('tak-menu-line')[2].style.opacity = "0";
            document.getElementsByClassName('t2-line-ab')[0].style.transform = "rotate(-45deg)";
            document.getElementsByClassName('tak-menu-div')[0].style.top = 0 + "%";
            $('.tak-menu-a').addClass("fadeInUpBig");
        }else{
            takMenuOP = 0;
            document.getElementsByClassName('t1-line-ab')[0].style.transform = "rotate(0deg)";
            document.getElementsByClassName('tak-menu-line')[0].style.opacity = "1";
            document.getElementsByClassName('tak-menu-line')[1].style.opacity = "1";
            document.getElementsByClassName('tak-menu-line')[2].style.opacity = "1";
            document.getElementsByClassName('t2-line-ab')[0].style.transform = "rotate(0deg)";
            document.getElementsByClassName('tak-menu-div')[0].style.top = "calc(-100% + 70px)";
            $('.tak-menu-a').removeClass("fadeInUpBig");
        }
    });
});

// var x = 0 ;
// var y = 0 ;
// function ScrollFunc(event) {
//     log.style.Display = "block";
//     if (event.movementX > 0 && x <= 0){
//         console.log("right");
//         log.scrollLeft += 2;
//         log.style.transitionTimingFunction = "linear";
//     }else if(event.movementX < 0 && x <= 0){
//         console.log("left");
//         log.scrollLeft -= 2;
//         log.style.transitionTimingFunction = "linear";
//     }
//     else if(event.movementY > 0 && y >= 0){
//         console.log("bottom");
//         log.scrollTop += 2;
//         log.style.transitionTimingFunction = "linear";
//     }else if(event.movementY < 0 && y >= 0){
//         console.log("top");
//         log.scrollTop -= 2;
//         log.style.transitionTimingFunction = "linear";
//     }
//     // console.log(event.srcElement.scrollLeft , event.movementX , event.srcElement.scrollTop , event.movementY);
// }
//
// const log = document.getElementsByClassName('article-Three-half')[0];
// log.addEventListener('mousemove', ScrollFunc);
//
// (function() {
//     log.scrollLeft = -100;
//     log.scrollTop = 115;
// })();

// var x = 0 ;
// var y = 0 ;
// function ScrollFunc(event) {
//     if (event.movementX > 0 && x <= 0){
//         console.log("right");
//         event.srcElement.scrollLeft = 100;
//     }else if(event.movementX < 0 && x <= 0){
//         console.log("left");
//         event.srcElement.scrollLeft = 100;
//     }else if(event.movementY > 0 && y >= 0){
//         console.log("bottom");
//         event.srcElement.scrollTop = 100;
//     }else if(event.movementY < 0 && y >= 0){
//         console.log("top");
//         event.srcElement.scrollTop = 100;
//     }
//     console.log(event)
//     // console.log(event.srcElement.scrollLeft , event.movementX , event.srcElement.scrollTop , event.movementY);
// }
//
// const log = document.getElementsByClassName('article-Three-half-movers')[0];
// log.addEventListener('mousemove', ScrollFunc);



function moveToSelected(element) {
    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected("prev");
            break;

        case 39: // right
            moveToSelected("next");
            break;

        default:
            return;
    }
    e.preventDefault();
});

$("#carousel div").click(function () {
    moveToSelected($(this));
});

$("#prev").click(function () {
    moveToSelected("prev");
});

$("#next").click(function () {
    moveToSelected("next");
});



/*************************************************/



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Html', 'Css', 'JS', 'Jquery', 'React', 'Next', 'AntD'],
        datasets: [{
            responsive: true,
            label: 'My First dataset',
            backgroundColor: 'rgb(245, 175, 49)',
            borderColor: 'rgb(0, 0, 0)',
            data: [90, 90, 80, 70, 50, 50, 90, 10, 140]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        }
    }
});


/************************************************************************************/


var cty = document.getElementById('Doughnut-Pie').getContext('2d');
var myDoughnutChart = new Chart(cty, {
    type: 'doughnut',
    data: {
        datasets: [{
            responsive: true,
            borderColor: 'transparent',
            data: [60, 80, 90],
            backgroundColor: [
                'rgba(230,69,0,1)',
                'rgba(33,150,243,1)',
                '#f5af31',
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'HTML5',
            'CSS3',
            'JavaScript'
        ]
    },
    options: {
        legend: {
            position: "left",
            display: true,
            labels: {
                fontColor: '#666'
            }
        }
    }
});


/************************************************************************************/


var ctz = document.getElementById('Polar-Area').getContext('2d');
var myDoughnutChartt = new Chart(ctz, {
    type: 'polarArea',
    data: {
        datasets: [{
            responsive: true,
            borderColor: 'transparent',
            data: [60, 80, 90],
            backgroundColor: [
                '#f5af31',
                'rgba(230,69,0,1)',
                'rgba(33,150,243,1)',
            ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'JavaScript',
            'HTML5',
            'CSS3'
        ]
    },
    options: {
        legend: {
            position: "left",
            display: true,
            labels: {
                fontColor: '#666'
            }
        }
    }
});

/*********************************************************************/
const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow() {
    const target = this;
    const item = target.classList.contains("accordion-tab")
        ? target
        : target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function(tab) {
        if (tab.dataset.actabGroup === group) {
            if (tab.dataset.actabId === id) {
                tab.classList.add("accordion-active");
            } else {
                tab.classList.remove("accordion-active");
            }
        }
    });

    labels.forEach(function(label) {
        const tabItem = label.parentElement;

        if (tabItem.dataset.actabGroup === group) {
            if (tabItem.dataset.actabId === id) {
                tabItem.classList.add("accordion-active");
            } else {
                tabItem.classList.remove("accordion-active");
            }
        }
    });
}

labels.forEach(function(label) {
    label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
    tab.addEventListener("click", toggleShow);
});

/*********************************************************************/