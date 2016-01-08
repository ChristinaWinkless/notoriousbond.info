var bond = function() {

        var self = {

            $navLinks: null,
            $scenes: null,
            $particles: null,

            init: function() {
                this.setup();
            },

            setup: function() {

                var _self = self;

                self.$navLinks = $('header#primary').find('ul li');
                self.$scenes = $('section.scene');

                $('header nav').find('ul li a').click(function(event) {
                    event.preventDefault();
                    var id = $(this).attr('href');
                    $('html,body').stop().animate({
                        scrollTop: $(id).offset().top,
                        easing: "easeInCubic"
                    }, 800);
                });

                $(window).stellar({
                    horizontalScrolling: false,
                    positionProperty: 'transform',
                });

                self.$scenes.waypoint({
                    offset: 250,
                    handler: function(event, direction) {
                        var scene = $(this).attr('data-slide');

                        if (direction === 'down') {
                            _self.$navLinks.find('a').removeClass('active');
                            _self.$navLinks.find('a[data-slide="' + scene + '"]').addClass('active');
                        } else {
                            _self.$navLinks.find('a').removeClass('active');
                            _self.$navLinks.find('a[data-slide="' + scene + '"]').addClass('active');
                        }
                    }
                });

                $(window).scroll(function() {
                    if ($(window).scrollTop() <= 400) {
                        self.$navLinks.find('a[data-slide="1"]').removeClass('active');
                    }
                });
            }


        }

        return self;
    }();



$(function() {
    bond.init();
});