import './base.scss';
import brand from './assets/images/brand.png';
import face from './assets/images/facebook.svg';
import twit from './assets/images/twitter.svg';
import yt from './assets/images/youtube.svg';
import inst from './assets/images/instagram.svg';
import banner from './assets/images/banner1.png';
import ancor from './assets/images/ancor.svg';
import rays from './assets/images/rays.svg';
import pointillism from './assets/images/pointillism.svg';
import pointillism2 from './assets/images/pointillisms2.png';
import cafe from './assets/images/coffe.png';
import cafe2 from './assets/images/coffes.png';
import cafe3 from './assets/images/semente_caffe.png';
import cafe4 from './assets/images/semente_coffes.png';
import banner1 from './assets/images/bannershows.png';
import maquina1 from './assets/images/maquina1.png';


class Nav {
    captureButton(_item) {
        const element = document.getElementById(_item);
        return element;
    }
    toggleNav(_item) {
        _item.classList.toggle("active");
        return _item;
    }
}

const nav = new Nav();
const selectCtaNav = nav.captureButton('a-navMobile');
const selectNav = nav.captureButton('nav-item');
const clickCta = selectCtaNav.addEventListener('click', function (event) {
    nav.toggleNav(selectCtaNav);
    nav.toggleNav(selectNav);
});

class Caroussel {
    bannerInital(_idx) {
        const SLIDER_TIMEOUT = 10000

        $(_idx).owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplayTimeout: SLIDER_TIMEOUT,
            autoplayHoverPause: true,
            loop: false,
            margin: 0,
            onInitialized: ({ target }) => {
                const animationStyle = `-webkit-animation-duration:${SLIDER_TIMEOUT}ms;animation-duration:${SLIDER_TIMEOUT}ms`
                const progressBar = $(
                    `<div class="slider-progress-bar"><span class="progress" style="${animationStyle}"></span></div>`
                )
                $(target).prepend(progressBar)
            },
            onChanged: ({ type, target }) => {
                if (type === 'changed') {
                    const $progressBar = $(target).find('.slider-progress-bar')
                    const clonedProgressBar = $progressBar.clone(true)

                    $progressBar.remove()
                    $(target).prepend(clonedProgressBar)
                }
            }
        });
    }
}
const crsl = new Caroussel();
const StartCrsl = crsl.bannerInital('#owl-banner');
const startCrslServices = crsl.bannerInital('#owl-events');

class Parallaxs {
    creatParallax(_idx) {
        const element = document.getElementById(_idx);
        const parallaxInstance = new Parallax(element);
    }
}
const prlxs = new Parallaxs();
const startCoffeOne = prlxs.creatParallax('coffeOne');
const startCoffeTwo = prlxs.creatParallax('coffeTwo');
const startCoffeThree = prlxs.creatParallax('coffethree');
const startCoffeFour = prlxs.creatParallax('coffeFour');
const startPointillism = prlxs.creatParallax('pointillism');

