/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 10

		};
	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}
/*
	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			}); */
	// Scrolly.
		$('.scrolly-middle').scrolly({
			speed: 1000,
			anchor: 'middle'
		});

		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return (breakpoints.active('<=mobile') ? 70 : 190); }
		});
	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Parallax background.

		// Disable parallax on IE/Edge (smooth scrolling is jerky), and on mobile platforms (= better performance).
			if (browser.name == 'ie'
			||	browser.name == 'edge'
			||	browser.mobile)
				settings.parallax = false;

		if (settings.parallax) {

			var $dummy = $(), $bg;

			$window
				.on('scroll.overflow_parallax', function() {

					// Adjust background position.
						$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

				})
				.on('resize.overflow_parallax', function() {

					// If we're in a situation where we need to temporarily disable parallax, do so.
						if (breakpoints.active('<=narrow')) {

							$body.css('background-position', '');
							$bg = $dummy;

						}

					// Otherwise, continue as normal.
						else
							$bg = $body;

					// Trigger scroll handler.
						$window.triggerHandler('scroll.overflow_parallax');

				})
				.trigger('resize.overflow_parallax');

		}

	// Poptrox.
		$('.gallery, .device').poptrox({
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#0a1919',
			overlayOpacity: 0.75,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 10,
			usePopupNav: true
		});
})(jQuery);