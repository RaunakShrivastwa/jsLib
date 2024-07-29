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

    // Click Event
    dblclick = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('dblclick', callback);
            }
        });
        return this;
    }

    // Click Event
    mousedown = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mousedown', callback);
            }
        });
        return this;
    }

    // Click Event
    mouseup = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mouseup', callback);
            }
        });
        return this;
    }

    // Click Event
    mousemove = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mousemove', callback);
            }
        });
        return this;
    }

    // Click Event
    mouseover = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mouseover', callback);
            }
        });
        return this;
    }

    // Click Event
    mouseover = (callback) => {
        console.log("this", this.elems);
        this.elems.forEach(elem => {
            if (elem) {
                console.log(elem);
                elem.addEventListener('mouseover', callback);
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


