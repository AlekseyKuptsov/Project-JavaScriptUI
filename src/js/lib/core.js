const $ = function(selector) {
    return new init(selector); //создается новый объект
};

function init(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    } // проверка нужна для обработчиков, чтобы назначать события на эл-т, на который нажали. проверяем является ли selector нодой.

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
}

init.prototype = $.prototype; //записали к возвращаемому объекту прототип главной ф-ии, чтобы использовать на нем любые созданные ф-ии для $

window.$ = $;

export default $;