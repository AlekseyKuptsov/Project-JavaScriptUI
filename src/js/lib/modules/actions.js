import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

// находим элемент по индексу
$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    return childs.findIndex(item => item == this[0]);
};

//поиск по элементам

$.prototype.find = function (selector) {
    let items = [];

    for (let i = 0; i < this.length; i++) {
        let arr = this[i].querySelectorAll(selector);
        items.push(...arr);
        delete this[i];
    }

    Object.assign(this, items);
    this.length = items.length;

    return this;
};

//поиск ближайших родителей
$.prototype.close = function (selector) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) continue;
        this[counter] = this[i].closest(selector);
        counter++;
    }
    this.length = counter;

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    return this;
};

//поиск всех соседей
$.prototype.siblings = function() {
    let items = [];
    for (let i = 0; i < this.length; i++) {
        const arr = this[i].parentNode.children;
        for (let j = 0; j < arr.length; j++) {
            if (this[i] === arr[j]) continue;
            items.push(arr[j]);
        }
        delete this[i];
    }

    Object.assign(this, items);
    this.length = items.length;

    return this;
};
