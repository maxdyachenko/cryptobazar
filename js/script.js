$(document).ready(function () {
	//script for popup
	var root = $('body,html'),
		underLayerId = $('#underLayer'),
		underlayer = $('.underlayer');
    $('[data-popup-open]').on('click', function(e)  {
        var targetPopupclass = $(this).attr('data-popup-open');
        $('[data-popup="' + targetPopupclass + '"]').fadeIn(350);
        underlayer.fadeIn(350);
        e.stopPropagation();
    });
    underlayer.click(function(e){
        $('.popup-inner').fadeOut();
        underlayer.fadeOut();
    });


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
            zoomerImage.src = imageSrc;

            zoomerImage.onload = function () {
                $('#zoomerWrapper').addClass('active');
            }
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
		if ($('window').width() > '640') {
			section1.height($('window').width() * 480 / 1200);
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
    	console.log(1);
        var section1 = $('#section1');
        if ($('window').width() > '640') {
            section1.height($('window').width() * 480 / 1200);
        } else {
            section1.attr('style', '');
        }
    });

	$('#loading').delay(500).fadeOut(1000);
});