$(document).ready(function () {

    // cards

    function addItemToShuffle(categoryDIV, categoryTitle, rating, title, duration, price, image) {

        var $container = $('.shuffle-container');

        var item = `
            <div data-groups='["all","${categoryDIV}"]'
                class="m-2 h-card w-card bg-white rounded-2xl p-3 flex-col flex justify-between cursor-default group max-sm:w-11/12">
                <div class="">
                    <div class="h-56 rounded-xl bg-black overflow-hidden flex items-center justify-center">
                        <img src="${image}" class="h-full object-cover select-none max-sm:w-full">
                    </div>
                    <div class="w-full my-4 flex justify-between items-center">
                        <div class="h-full flex justify-between items-center bg-three px-2 py-1 rounded">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"
                                viewBox="0 0 16 16" fill="none">
                                <path class="fill-one" d="M8 3a5 5 0 100 10A5 5 0 008 3z" />
                            </svg>
                            <h1 class="font-semibold text-xs select-none">${categoryTitle}</h1>
                        </div>
                        <div class="h-full flex justify-between items-center bg-one px-2 py-1 rounded">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px"
                                viewBox="0 0 24 24" fill="none">
                                <path class="fill-yellow-300"
                                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    fill="#1C274C" />
                            </svg>
                            <h1 class="font-semibold text-xs text-white select-none">${rating}</h1>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h1 class="font-bold text-2xl w-full text-center max-sm:text-xl">${title}
                    </h1>
                </div>
                <div class="">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                            class="stroke-one">
                            <path
                                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                                fill="#0F0F0F" />
                            <path
                                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                                fill="#0F0F0F" />
                        </svg>
                        <h1 class="ml-3 text-sm font-semibold">Срок выполнения: ${duration}</h1>
                    </div>
                    <div class="h-1 w-full bg-gray-300 my-3 rounded-full group-hover:bg-one transition-all duration-300"></div>
                    <h1 class="font-bold text-2xl w-full text-center">${price}</h1>
                </div>
            </div>
        `

        $container.append(item);

    }

    addItemToShuffle("one", "Графический дизайн", "5.0", "Разработка основного графического слайда", "1 - 3 дня", "300 ₽ | 12 BYN", "./img/yslyg-1.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Создание дополнительного графического слайда", "1 - 3 дня", "250 ₽ | 10 BYN", "./img/yslyg-2.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Разработка дизайна баннера", "от 2 часов до 1 дня", "400 ₽ | 15 BYN", "./img/yslyg-3.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Разработка дизайна плаката", "от 2 часов до 1 дня", "300 ₽ | 12 BYN", "./img/yslyg-4.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Разработка дизайна визитной карточки", "от 2 часов до 1 дня", "300 ₽ | 12 BYN", "./img/yslyg-5.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Разработка дизайна сертификата", "от 2 часов до 1 дня", "300 ₽ | 12 BYN", "./img/yslyg-6.jpg");
    addItemToShuffle("one", "Графический дизайн", "5.0", "Создание логотипа", "от 2 часов до 1 дня", "300 ₽ | 12 BYN", "./img/yslyg-7.jpg");
    addItemToShuffle("two", "Видеомонтаж", "5.0", "Анимация главного слайда", "1 - 3 дня", "450 ₽ | 18 BYN", "./img/yslyg-8.jpg");
    addItemToShuffle("two", "Видеомонтаж", "5.0", "Создание видеоконтента (от 6 сек. до 3 мин.)", "1 - 3 дня", "1200 ₽ | 45 BYN", "./img/yslyg-9.jpg");
    addItemToShuffle("three", "Реклама", "5.0", "Публикация рекламного характера", "сразу", "300 ₽ | 12 BYN", "./img/yslyg-10.jpg");
    addItemToShuffle("three", "Реклама", "5.0", "Сторис для социальных сетей", "сразу", "300 ₽ | 12 BYN", "./img/yslyg-11.jpg");

    //Slider

    function createSwiper(slidesPerView) {
        return new Swiper(".mySwiper", {
            slidesPerView: slidesPerView,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true
        });
    }

    let swiper = createSwiper($(window).width() < 450 ? 1 : $(window).width() < 1280 ? 2 : 3);

    $(window).on('resize', function() {
        let newSlidesPerView;
        if ($(window).width() < 624) {
            newSlidesPerView = 1;
        } else if ($(window).width() < 1280) {
            newSlidesPerView = 2;
        } else {
            newSlidesPerView = 3;
        }

        if (swiper.params.slidesPerView !== newSlidesPerView) {
            swiper.destroy(true, true);
            swiper = createSwiper(newSlidesPerView);
        }
    });

    // Hand hello animation

    let rotateLeft = true;
            
    function rotateElement() {
        const $element = $('#hello');
        if (rotateLeft) {
            $element.css('transform', 'rotate(0deg)');
        } else {
            $element.css('transform', 'rotate(30deg)');
        }
        rotateLeft = !rotateLeft;
    }

    setInterval(rotateElement, 1000);

    // Icons animation
    
    function animateImage($image, amplitude, speed, delay) {
        var position = 0;
        var direction = 1;
        var step = speed / 10;

        function update() {
            if (position >= amplitude) {
                direction = -1;
            } else if (position <= -amplitude) {
                direction = 1;
            }

            position += direction * step;
            $image.css('transform', 'translateY(' + position + 'px)');

            requestAnimationFrame(update);
        }

        setTimeout(update, delay);
    }

    animateImage($('#ozon'), 10, 2.3, Math.random() * 100);
    animateImage($('#wb'), 10, 2, Math.random() * 100);

    // filter 

    var Shuffle = window.Shuffle;
    var element = document.querySelector('.shuffle-container');

    var shuffleInstance = new Shuffle(element, {
        itemSelector: 'div'
    });


    $('.shuffle-filter li').on('click', function (e) {
        e.preventDefault();
        $('.shuffle-filter li').removeClass('selected');
        $(this).addClass('selected');
        var keyword = $(this).attr('data-target');
        shuffleInstance.filter(keyword);
    });
});
