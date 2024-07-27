class Dom {
    constructor() {
        this.elems = [];
    }

    // Getting elements
    getE = (id) => {
        let elements = [];
        if (id.includes('#')) {
            let temp = id.split('#');
            elements = [document.getElementById(temp[1])];
        } else if (id.includes('.')) {
            let temp = id.split('.');
            elements = Array.from(document.getElementsByClassName(temp[1]));
        } else {
            elements = Array.from(document.getElementsByTagName(id));
        }
        this.elems = elements;
        return this;
    }

    // Click Event
    click = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('click', callback);
            }
        });
        return this;
    }

    // Mouse Events
    mouseover(callback) {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mouseover', callback);
            }
        });
        return this;
    }

    mouseout(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mouseout', callback);
            }
        });
        return this;
    }

    mouseenter(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mouseenter', callback);
            }
        });
        return this;
    }

    mouseleave(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mouseleave', callback);
            }
        });
        return this;
    }


    dblclick(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('dblclick', callback);
            }
        });
        return this;
    }

    mousedown(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mousedown', callback);
            }
        });
        return this;
    }

    mouseup(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mouseup', callback);
            }
        });
        return this;
    }

    mousemove(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('mousemove', callback);
            }
        });
        return this;
    }

    // Keyboard Events
    keydown(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('keydown', callback);
            }
        });
        return this;
    }

    keyup(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('keyup', callback);
            }
        });
        return this;
    }

    keypress(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('keypress', callback);
            }
        });
        return this;
    }

    // Form Events
    submit(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('submit', callback);
            }
        });
        return this;
    }

    reset(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('reset', callback);
            }
        });
        return this;
    }

    change(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('change', callback);
            }
        });
        return this;
    }

    input(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('input', callback);
            }
        });
        return this;
    }

    focus(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('focus', callback);
            }
        });
        return this;
    }

    blur(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('blur', callback);
            }
        });
        return this;
    }

    // Window Events
    load(callback) {
        window.addEventListener('load', callback);
        return this;
    }

    resize(callback) {
        window.addEventListener('resize', callback);
        return this;
    }

    scroll(callback) {
        window.addEventListener('scroll', callback);
        return this;
    }

    unload(callback) {
        window.addEventListener('unload', callback);
        return this;
    }

    beforeunload(callback) {
        window.addEventListener('beforeunload', callback);
        return this;
    }

    // Touch Events
    touchstart(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('touchstart', callback);
            }
        });
        return this;
    }

    touchend(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('touchend', callback);
            }
        });
        return this;
    }

    touchmove(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('touchmove', callback);
            }
        });
        return this;
    }

    touchcancel(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('touchcancel', callback);
            }
        });
        return this;
    }

    // Pointer Events
    pointerdown(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointerdown', callback);
            }
        });
        return this;
    }

    pointerup(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointerup', callback);
            }
        });
        return this;
    }

    pointermove(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointermove', callback);
            }
        });
        return this;
    }

    pointercancel(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointercancel', callback);
            }
        });
        return this;
    }

    pointerover(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointerover', callback);
            }
        });
        return this;
    }

    pointerout(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('pointerout', callback);
            }
        });
        return this;
    }

    // Other Events
    error(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('error', callback);
            }
        });
        return this;
    }

    transitionend(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('transitionend', callback);
            }
        });
        return this;
    }

    animationend(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('animationend', callback);
            }
        });
        return this;
    }

    drag(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('drag', callback);
            }
        });
        return this;
    }

    drop(callback) {
        this.elems.forEach(elem => {
            if (elem) {
                elem.addEventListener('drop', callback);
            }
        });
        return this;
    }


    // Set width
    width = (width) => {
        this.elems.forEach(elem => {
            if (elem) {
                elem.style.width = `${width}px`;
            }
        });
        return this;
    }

    // Set height
    height = (height) => {
        this.elems.forEach(elem => {
            if (elem) {
                elem.style.height = `${height}px`;
            }
        });
        return this;
    }

    setDimension = (w,h)=>{
        this.elems.forEach(elem => {
            if (elem) {
                elem.style.height = `${h}px`;
                elem.style.width = `${w}px`;
            }
        });
        return this;
    }

    // write css
    setStyle = (str)=>{
        this.elems.forEach(elem => {
            if (elem) {
                elem.style.cssText = str;
            }
        });
        return this;
    }


}


   





