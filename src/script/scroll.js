const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = sectionEq => {
    return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemEq) => {
    elems
        .eq(elemEq)
        .addClass('active')
        .siblings()
        .removeClass('active')
};

const unBlockScroll = () => {
    setTimeout(() => {

        inscroll = false;

    });
}
 
const perform = sectionEq => {
    if (inscroll) return;

    inscroll = true;

    const position = countPosition(sectionEq);
    const switchFixedMenuActiveClass = () => switchActiveClass($('.pagination__item'), sectionEq);
    switchFixedMenuActiveClass();


    switchActiveClass(sections, sectionEq)
    
    display.css({
        transform: `translateY(${position})`

    });

    unBlockScroll();
}

const scrollViewport = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'next') {
        perform(nextSection.index());
    }
    if (direction === 'prev') {
        perform(prevSection.index());
    }
}



$(document).on('wheel', function (e) {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport('next')
    }
    if (deltaY < 0) {
        scrollViewport('prev')

    }

})


$(document).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    const userInputs = tagName === 'input' || tagName === 'textarea';

    if (userInputs) return;

    switch (e.keyCode) {

        case 38:
            scrollViewport('prev');
            break;
        case 40:
            scrollViewport('next');
            break;
    }
});


$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

    perform(target);
});

if (isMobile) {
    window.addEventListener('touchmove', e => {
        e.preventDefault()
    }, { passive: false });

    $('body').swipe({
        swipe: function (event, direction, ) {
            let scrollDirection;

            if (direction === 'up') scrollDirection = 'next';
            if (direction === 'down') scrollDirection = 'prev';

            scrollViewport(scrollDirection)
        }
    })
}

