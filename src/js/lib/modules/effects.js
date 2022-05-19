import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, final) {
    let timeStart;

    function _animation(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let progress = time - timeStart; // time приходит автоматически
        let complection = Math.min(progress / duration, 1);

        callback(complection);

        if (progress < duration) {
            requestAnimationFrame(_animation);
        } else {
            if (typeof final === 'function') {
                final();
            }
        }
    }

    return _animation;
};

$.prototype.fadeIn = function (duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, final);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function (duration, final) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;

            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, final);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function (duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(duration, display, final);
        } else {
            $(this[i]).fadeOut(duration, final);
        }
    }

    return this;
};