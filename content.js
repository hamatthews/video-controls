let video;
const findVideo = setInterval(() => {
    video = document.querySelector('video');
    if (video) {
        clearInterval(findVideo)
    };
}, 500);


const site = window.location.host;
console.log(site);

document.addEventListener('keydown', e => {
    if (!(e.target.localName === 'input'
    && e.target.type !== 'range')
    && e.target.id !== 'contenteditable-root'
    ) {

        if (site === 'www.youtube.com') {

        }
        else {


            if (e.code === 'Space') {
                e.preventDefault();
                e.stopImmediatePropagation();
    
                video.paused ? video.play() : video.pause();
            }
            
            if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
                e.preventDefault();
                e.stopImmediatePropagation();

                const slider = document.querySelector('[data-a-target="player-volume-slider"]');
                const sliderBackground = document.querySelector('.ScRangeFillValue-sc-q01wc3-3.dAvaFk');
                slider.focus();

                let value = Math.round(video.volume*100);

                // console.log(value)

                if (e.code === 'ArrowUp') {
                    value + 5 > 100
                    ? value = 100
                    : value += 5;     
                }
                else {
                    value - 5 < 0
                    ? value = 0
                    : value -= 5;     
                }

                console.log(slider.ariaValueNow);

                slider.setAttribute('aria-valuenow', value);
                slider.setAttribute('aria-valuetext', value + '%');
                slider.value = value/100;
                video.volume = value/100;
                sliderBackground.style.width = value + '%';
            }
        }


        if (e.code === 'ArrowRight') {
            e.preventDefault();
            e.stopImmediatePropagation();

            video.currentTime + 5 > video.duration
            ? video.currentTime = video.duration
            : video.currentTime += 5; 
        }

        if (e.code === 'ArrowLeft') {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            video.currentTime - 5 < 0
            ? video.currentTime = 0
            : video.currentTime -= 5; 
        }


    }
}, {capture: true})