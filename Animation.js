class BubbleAnimation {
     init(id, obj) {
        this.obj = obj;
        this.container = this.getContainer(id);

        this.container.style.position = 'relative';
        this.container.style.overflow = 'hidden';
        this.startAnimation();
    }

    getContainer(id) {
        if (id.includes('#')) {
            return document.getElementById(id.slice(1));
        } else if (id.includes('.')) {
            return document.querySelector(id);
        } else {
            return document.getElementsByTagName(id)[0];
        }
    }

    createBubble() {
        const bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.bottom = '0';
        bubble.style.width = this.obj.width + 'px';
        bubble.style.height = this.obj.height + 'px';
        bubble.style.backgroundColor = this.obj.bubbleBG;
        bubble.style.borderRadius = this.obj.radius + '%';
        bubble.style.border = `${this.obj.border}px ${this.obj.borderStyle} ${this.obj.borderColor}`;
        bubble.style.transform = `rotate(${this.obj.rotate}deg)`;
        bubble.style.left = Math.random() * this.container.offsetWidth + 'px';
        

        bubble.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(-80vh)', opacity: 1 },
            { transform: 'translateY(-100vh) scale(1.5)', opacity: 0 }
        ], {
            duration: 5000,
            iterations: 1,
            easing: 'linear'
        });

        setTimeout(() => {
            this.createBlastEffect(bubble.offsetLeft, this.container.offsetHeight - parseFloat(getComputedStyle(bubble).top));
            bubble.remove();
        }, 5000);

        this.container.appendChild(bubble);
    }

    createBlastEffect(left, top) {
        const numParticles = 10;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = this.obj.blast.width + 'px';
            particle.style.height = this.obj.blast.height + 'px';
            particle.style.backgroundColor = this.obj.blast.blastBG;
            particle.style.borderRadius = this.obj.blast.radius + '%';
            particle.style.left = left + 'px';
            particle.style.top = top + 'px';
            particle.style.border = `${this.obj.blast.border}px ${this.obj.blast.borderStyle} ${this.obj.blast.borderColor}`;

            particle.animate([
                { transform: `translate(0, 0) scale(1)`, opacity: this.obj.blast.opacity },
                { transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0.5)`, opacity: 0 }
            ], {
                duration: 1000,
                iterations: 1,
                easing: 'ease-in-out'
            });

            this.container.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    startAnimation() {
        this.intervalId = setInterval(() => this.createBubble(), this.obj.delay);
    }

    stopAnimation() {
        clearInterval(this.intervalId);
    }
}

// const bubbleAnimation = new BubbleAnimation();
// bubbleAnimation.init('#div1', {
//     width: 10,
//     height: 10,
//     bubbleBG: 'white',
//     radius: 50,
//     delay: 100,
//     border: 2,
//     borderColor: 'black',
//     borderStyle: 'dotted',
//     rotate: 360,
//     blast: {
//         width: 10,
//         height: 10,
//         blastBG: 'black',
//         radius: 50,
//         border: 2,
//         borderColor: 'green',
//         borderStyle: 'solid',
//         opacity:1
//     }
// });
