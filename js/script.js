$(document).ready(function () {
	//script for popup CURRENTLY NOT ACTIVE
	var root = $('body,html'),
		underLayerId = $('#underLayer'),
		underlayer = $('.underlayer');

    //for sections with logo
    $('.slick-carousel').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        infinite: false
    });


    //mobile and desktop menu functionality
	$('#menu').on('click','a', function (event) {
        menuGoTo(event, this);
	});
	$('#menuMobile').on('click','a', function (event) {
		menuGoTo(event, this);
        underLayerId.removeClass('active');
	});
	function menuGoTo(event, self) {
        event.preventDefault();
        var id = $(self).attr('href'),
            top = $(id).offset().top;
        root.animate({scrollTop: top}, 1500);
    }
    $('#menuButton').click(function (event) {
        $('#underLayer').addClass('active');
    });
    underLayerId.click(function (event) {
        removeActiveUnderlayer(event, this);
    });
    $('#closeMobileMenu').click(function (event) {
        removeActiveUnderlayer(event, this);
    });
    function removeActiveUnderlayer(event, self) {
        if (event.target === self)
            underLayerId.removeClass('active');
    }
    //highlight active menu item on scroll
    var menuListSelector = '.menu-list';
    function onScroll(){
        var scrollTop = $(document).scrollTop();
        $(menuListSelector + ' a').each(function(){
            var hash = $(this).attr('href');
            var target = $(hash);
            if (target.position().top <= scrollTop && target.position().top + target.outerHeight() > scrollTop) {
                $(menuListSelector + ' a.active').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }


	//functionality for zoom images
    $('.zoom-image').click(function (event) {
        var imageSrc = event.target.src,
            zoomerImage = $('#zoomerImage');

        if (imageSrc) {
            zoomerImage.attr('src', imageSrc);

            zoomerImage.on('load', function () {
                $('#zoomerWrapper').addClass('active');
            });
        }
    });
	var zoomerWrapper = $('#zoomerWrapper');
	zoomerWrapper.click(hideZoomerWrapper);
    function hideZoomerWrapper() {
        zoomerWrapper.removeClass('active');
    }

    $(document).scroll(function () {
        hideZoomerWrapper();

        //stick menu
        var header = $('#section-header');
        if($(this).scrollTop() > 0) {
            header.toggleClass('active', true);
        } else {
            header.toggleClass('active', false);
        }

        onScroll();
    });


    //functionality fior first section with video bg
    var videoEl = $('#videoBg'),
		section1 = $('#section1');

	function setSectionSize(){
		if ($(window).width() > '640') {
			section1.height($(window).width() * 480 / 1200);
		} else {
            section1.attr('style', '');
		}
    }
    videoEl.on('load', setSectionSize());


    $('a.more-button').click(function(e){
        e.preventDefault();

        $(document).off('scroll');
        $(menuListSelector + ' a.active').removeClass('active');
        $(this).addClass('active');
        var hash = $(this).attr('href');
        var target = $(hash);

        root.animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on('scroll', onScroll);
        });

    });

    $(window).resize(function(){
        var section1 = $('#section1');
        if ($(window).width() > '640') {
            section1.height($(window).width() * 480 / 1200);
        } else {
            section1.attr('style', '');
        }

        //for responsive of second block
        setBlock2Height();

    });
    setBlock2Height();
    function setBlock2Height() {
        if (!$(window).width() > 1024) {
            return;
        }
        var highest = 0;

        var block = $(".info-block-heading");
        for (var i = 0; i < block.length; i++) {
            // Using $() to re-wrap the element.
            var height = $(block[i]).height();
            if (height > highest) {
                highest = height;
            }
        }
        $(".info-block-heading").css('height', highest + 'px');
    }

	$('#loading').delay(500).fadeOut(1000);
    
    
    //map with popups
    $('.handler').hover(
        function () {
            $(this).addClass('hovered');
            $(this).find('.popup').slideDown('fast');
        },
        function() {
            $(this).removeClass('hovered');
            $(this).find('.popup').hide();
        }
    );
    $('.close-map-popup').click(function () {
        $(this).closest('.handler').removeClass('hovered').find('.popup').hide();
    });
    $('.video-btn').click(function () {
        var handler = $(this).closest('.handler');
        handler.find('.underlayer').fadeIn(350);
    });
    underlayer.click(function(e){
        closeMapPopup();
    });
    function closeMapPopup() {
        underlayer.fadeOut();
        $('.youtube-iframe').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    }

    //for section with logos
    $('.carousel-logos').slick({
        dots: true,
        speed: 300,
        slidesToShow: 5,
        arrows: false,
        adaptiveHeight: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

});