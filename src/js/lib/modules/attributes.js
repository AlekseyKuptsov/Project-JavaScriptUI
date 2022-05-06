import $ from '../core';

$.prototype.setAttr = function (attrName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, value);
    }
    return this;
};

$.prototype.removeAttr = function (attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) continue;
        this[i].removeAttribute(attrName);
    }
    return this;
};

$.prototype.toggleAttr = function(attrName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) {
            this[i].setAttribute(attrName, value);
        } else this[i].removeAttribute(attrName);
    }
    return this;
};