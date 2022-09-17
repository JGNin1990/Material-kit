import './style.scss';
import 'bootstrap/dist/js/bootstrap.min';
import 'waypoints/lib/noframework.waypoints';
import 'simple-parallax-js/dist/simpleParallax.min';
// import simpleParallax from 'simple-parallax-js';
// import { createPopper } from '@popperjs/core';
// import '@floating-ui/dom/dist/floating-ui.dom.mjs';
import {computePosition, size} from '@floating-ui/dom';



let waypoint = new Waypoint({
    element: document.getElementById('set-2'),
    handler: function(direction) {
        const way =document.getElementById('for-change');
        way.classList.toggle("for-way");
        way.classList.toggle('navbar-dark');
        way.classList.toggle('pt-4');
        way.classList.toggle('box-shadow');
        // console.log("hello")
    },
    offset: '75%'
});


// let image = document.getElementById('for-nav')
// new simpleParallax(image, {
//     maxTransition: 20
// });

const set2 = document.querySelector('#set-2');
const set1 = document.querySelector('#set-1');
// createPopper(popcorn, tooltip, {
//     placement: 'bottom',
// });

computePosition(set1, set2, {
    middleware: [
        size({
            apply({availableWidth:a1080, availableHeight:b1080, elements:set2}) {
                // Do things with the data, e.g.
                Object.assign(set2.floating.style, {
                    maxWidth: `${availableWidth}px`,
                    maxHeight: `${availableHeight}px`,
                });
            },
        }),
    ],
});

