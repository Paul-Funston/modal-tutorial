'use strict';
/*
    JavaScript Basics
    Paul Funston

    Utility Functions
*/

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}


const button = select('.show-modal');
const modal = select('.modal');
const box = select('.white-box');

onEvent('click', button, () => {
  modal.classList.remove('hidden');
});

onEvent('click', box, () => {
  modal.classList.add('hidden');
})