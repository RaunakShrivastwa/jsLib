class HeartAnimation {
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

    createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.position = 'absolute';
        heart.style.bottom = '0';
        heart.style.left = Math.random() * this.container.offsetWidth + 'px';

        // Random horizontal movement
        const randomX = (Math.random() - 0.5) * 100;

        // Heart animation from small to large and then blast
        heart.animate([
            { transform: 'translate(0, 0) scale(0.5)', opacity: this.obj.opacity || 1 },   // Start small
            { transform: `translate(${randomX}px, -40vh) scale(1)`, opacity: this.obj.opacity || 1 },  // Grow in size
            { transform: `translate(${randomX}px, -60vh) scale(1.5)`, opacity: 0.9 },  // Larger size, nearing blast
        ], {
            duration: 4000,  // Duration before blast
            iterations: 1,
            easing: 'ease-in-out'
        });

        setTimeout(() => {
            const rect = heart.getBoundingClientRect();
            this.createBlastEffect(rect.left, rect.top, heart);
        }, 4000);  // Timing for blast and removal

        this.container.appendChild(heart);
    }

    createBlastEffect(left, top, heart) {
        const numParticles = 10;
        const heartSize = parseInt(getComputedStyle(heart).width);
        const fragmentSize = heartSize / 2;

        for (let i = 0; i < numParticles; i++) {
            const fragment = document.createElement('div');
            fragment.style.position = 'absolute';
            fragment.style.width = fragmentSize + 'px';
            fragment.style.height = fragmentSize + 'px';
            fragment.style.backgroundColor = this.obj.blast.blastBG || 'red';
            fragment.style.left = left + 'px';
            fragment.style.top = top + 'px';
            fragment.style.borderRadius = '50%';

            const randomX = (Math.random() - 0.5) * 100;
            const randomFallY = Math.random() * 200 + 100;  // Falling distance

            fragment.animate([
                { transform: `translate(0, 0) scale(1)`, opacity: 1 },
                { transform: `translate(${randomX}px, ${randomFallY}px) scale(0.5)`, opacity: 0 }
            ], {
                duration: 1500,
                iterations: 1,
                easing: 'ease-in'
            });

            this.container.appendChild(fragment);

            setTimeout(() => {
                fragment.remove();
            }, 1500);
        }

        heart.remove(); // Remove the original heart after the explosion
    }

    startAnimation() {
        this.intervalId = setInterval(() => this.createHeart(), this.obj.delay || 1000);
    }

    stopAnimation() {
        clearInterval(this.intervalId);
    }
}

// Add CSS for heart shape
const style = document.createElement('style');
style.textContent = `
    .heart {
        width: 50px;
        height: 50px;
        background-color: red;
        position: absolute;
    }

    .heart::before,
    .heart::after {
        content: '';
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
    }

    .heart::before {
        top: -25px;
        left: 0;
    }

    .heart::after {
        left: 25px;
        top: 0;
    }
`;
document.head.appendChild(style);

// const heartAnimation = new HeartAnimation();
// heartAnimation.init('#div1', {
//     width: 30,
//     height: 30,
//     heartBG: 'pink',
//     delay: 1000,  // Time interval for heart creation
//     opacity: 0.3,
//     blast: {
//         width: 25,
//         height: 125,
//         blastBG: 'red',  // Color of heart fragments
//         radius: 50,
//         border: 1,
//         opacity: 0.3
//     }
// });
