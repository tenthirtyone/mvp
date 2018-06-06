let App = window.App || {};

App = (function($) {

	'use strict';

	// MEDIA QUERIES
	let handleDesktopWidthChange = (function() {
		let _$navLinks = $('.main-nav .main-nav-item-parent .main-nav-link');
		let _handleWidthChange = function(mqlVal) {
			if (mqlVal.matches) {
				_$navLinks.on('click', function(e) {
					e.preventDefault();
					$(this).parent().toggleClass('selected').siblings().removeClass('selected');
				});
			} else {
				_$navLinks.off('click');
			}
		};
		let init = function() {
			if (window.matchMedia) {
				let mql = window.matchMedia('(max-width: 1199px)');
				mql.addListener(_handleWidthChange);
				_handleWidthChange(mql);
			}
		};
		return {
			init: init,
		};
	})();

	// SLIDESHOW
	let slideshow = (function() {
		let _$el = $('.owl-carousel');
		let _config = {
			items: 1,
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			autoplay: false,
			autoplayTimeout: 10000,
			autoplayHoverPause: true,
			onInitialized: function(event) {
				let element = event.target;
				if (!$(element).find('.owl-dots').hasClass('disabled')) {
					$(element).addClass('owl-dots-enabled');
				}
			},
		};
		let init = function() {
			_$el.each(function() {
				let	self = $(this);
				let settings = self.data('slideshow-settings');
				self.owlCarousel($.extend(Object.create(_config), settings));
			});
		};
		return {
			init: init,
		};
	})();

	// COUNTDOWN
	let countdown = (function() {
		let _$el = $('.countdown');
		let init = function() {
			_$el.each(function() {
				let $this = $(this);
				let finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function(event) {
					$this.html(event.strftime('<span class="countdown-inner"><span class="countdown-value">%D</span> <small>Days</small></span>'
					+ '<span class="countdown-inner"><span class="countdown-value">%H</span> <small>Hr</small></span>'
					+ '<span class="countdown-inner"><span class="countdown-value">%M</span> <small>Min</small></span>'
					+ '<span class="countdown-inner"><span class="countdown-value">%S</span> <small>Sec</small></span>'));
				});
			});
		};
		return {
			init: init,
		};
	})();

	// BOOTSTRAP TOOLTIPS
	let tooltip = (function() {
		let _$el = $('[data-toggle="tooltip"]');
		let init = function() {
			_$el.tooltip();
		};
		return {
			init: init,
		};
	})();

	// POPUPS
	let popup = (function() {
		let _$popupBtn = $('.btn-popup');
		let _popupConfig = {
			removalDelay: 300,
		};
		let init = function() {
			_$popupBtn.magnificPopup(_popupConfig);
		};
		return {
			init: init,
		};
	})();

	// INPUT SPINNER
	let spinner = (function() {
		let _$el = $('.input-group-spinner');
		let init = function() {
			_$el.each(function() {
				let self = $(this);
				let $minus = self.find('.input-group-btn:first-of-type .btn');
				let $plus = self.find('.input-group-btn:last-of-type .btn');
				let $input = self.find('input');
				let inputVal = parseInt($input.val(), 10);
				$minus.on('click', function() {
					if ($input.val() > 1) {
						$input.val(--inputVal);
					}
				});
				$plus.on('click', function() {
					$input.val(++inputVal);
				});
				$input.on('blur', function() {
					if (!$input.val()) {
						$input.val(1);
					}
				});
			});
		};
		return {
			init: init,
		};
	})();

	// PRICE SLIDER
	let priceSlider = (function() {
		let _el = document.getElementById('price-slider');
		let _priceMinInput = document.getElementById('price-min');
		let _priceMaxInput = document.getElementById('price-max');
		let _prices = [_priceMinInput, _priceMaxInput];
		let _config = {
			start: [100, 500],
			connect: true,
			step: 10,
			range: {
				'min': 0,
				'max': 1000,
			},
		};
		function setSliderHandle(i, value) {
			let r = [null, null];
			r[i] = value;
			_el.noUiSlider.set(r);
		}
		let init = function() {
			if (_el) {
				noUiSlider.create(_el, _config);
				_el.noUiSlider.on('update', function(values, handle) {
					_prices[handle].value = values[handle];
				});
				_prices.forEach(function(input, handle) {
					input.addEventListener('change', function() {
						setSliderHandle(handle, this.value);
					});
					input.addEventListener('keydown', function( e ) {
						let values = _el.noUiSlider.get();
						let value = Number(values[handle]);
						let steps = _el.noUiSlider.steps();
						let step = steps[handle];
						let position;
						switch ( e.which ) {
							case 13:
							setSliderHandle(handle, this.value);
							break;
							case 38:
							position = step[1];
							if ( position === false ) {
								position = 1;
							}
							if ( position !== null ) {
								setSliderHandle(handle, value + position);
							}
							break;
							case 40:
							position = step[0];
							if ( position === false ) {
								position = 1;
							}
							if ( position !== null ) {
								setSliderHandle(handle, value - position);
							}
							break;
						}
					});
				});
			}
		};
		return {
			init: init,
		};
	})();

	// VALIDATION
	let validation = (function() {
		let _$el = $('form');
		let _config = {
			errorPlacement: function() {},
		};
		let init = function() {
			_$el.each(function() {
				$(this).validate(_config);
			});
		};
		return {
			init: init,
		};
	})();

	// SEARCH
	let toggleSearchForm = (function() {
		let _$el = $('.site-search');
		let _$elTrigger = $('.user-nav-search-link');
		let _$elClose = $('.site-search-close-btn');
		let init = function() {
			_$elTrigger.on('click', function() {
				_$el.addClass('is-visible');
			});
			_$elClose.on('click', function() {
				_$el.removeClass('is-visible');
			});
		};
		return {
			init: init,
		};
	})();

	// DONATION FORM
	let donationForm = (function() {
		let _$el = $('.donation-form');
		let _$elPaymentOnline = _$el.find('#payment-method-online');
		let _$elPaymentOffline = _$el.find('#payment-method-offline');
		let _$elRecurranceGroup = _$el.find('#recurrance-group');
		let init = function() {
			_$elPaymentOnline.on('click', function() {
				_$elRecurranceGroup.show();
			});
			_$elPaymentOffline.on('click', function() {
				_$elRecurranceGroup.hide();
			});
		};
		return {
			init: init,
		};
	})();

	// CHECKOUT FORM
	let checkoutForm = (function() {
		let _$el = $('.checkout-form');
		let _$elAccountInput = _$el.find('#create-account');
		let _$elPasswordGroup = _$el.find('#password-group');
		let init = function() {
			_$elAccountInput.on('click', function() {
				_$elPasswordGroup.toggle();
			});
		};
		return {
			init: init,
		};
	})();

	// CONTACT FORM
	let contactForm = (function() {
		let _$el = $('.contact-form');
		let _$elSubmit = _$el.find('[type="submit"]');
		let init = function() {
			_$el.submit(function(e) {
				e.preventDefault();
				_$el.find('.loader').remove();
				if(_$el.valid()) {
					let dataString = _$el.serialize();
					_$elSubmit.after('<div class="loader"></div>');
					$.ajax({
						type: _$el.attr('method'),
						url: _$el.attr('action'),
						data: dataString,
					}).done(function() {
						_$elSubmit.parent().after('<div class="alert alert-success">Your message was sent successfully!</div>');
					}).fail(function() {
						_$elSubmit.parent().after('<div class="alert alert-danger">Your message wasn\'t sent, please try again.</div>');
					}).always(function() {
						_$el.find('.loader').remove();
						_$el.find('.alert').fadeIn();
						setTimeout(function() {
							_$el.find('.alert').fadeOut(function() {
								$(this).remove();
							});
						}, 5000);
					});
				}
			});
		};
		return {
			init: init,
		};
	})();

	// TOGGLE MAIN NAV
	let toggleMainNav = (function() {
		let _$el = $('.main-nav');
		let _$elToggle = $('.main-nav-toggle-btn');
		let init = function() {
			_$elToggle.on('click', function() {
				_$el.toggleClass('is-visible');
			});
		};
		return {
			init: init,
		};
	})();

	// TOGGLE USER NAV
	let toggleUserNav = (function() {
		let _$el = $('.user-nav');
		let _$elToggle = $('.user-nav-toggle-btn');
		let init = function() {
			_$elToggle.on('click', function() {
				_$el.toggleClass('is-visible');
				_$elToggle.toggleClass('is-active');
			});
		};
		return {
			init: init,
		};
	})();

	// PROGRESS BARS
	let progress = (function() {
		let _$el = $('.progress');
		let _$tooltip = _$el.find('[data-toggle="progress-tooltip"]');
		let init = function() {
			_$el.each(function() {
				let self = $(this);
				let _$elProgress = self.find('.progress-bar');
				let val = _$elProgress.attr('aria-valuenow');
				_$elProgress.width(val + '%');
				setTimeout(function() {
					_$tooltip.tooltip({
						trigger: 'manual',
					}).tooltip('show');
				}, 600);
			});
		};
		return {
			init: init,
		};
	})();

	return {
		init: function() {
			slideshow.init();
			countdown.init();
			tooltip.init();
			popup.init();
			spinner.init();
			priceSlider.init();
			toggleSearchForm.init();
			validation.init();
			donationForm.init();
			checkoutForm.init();
			contactForm.init();
			toggleMainNav.init();
			toggleUserNav.init();
			handleDesktopWidthChange.init();
			progress.init();
		},
	};

}(jQuery));

jQuery(function() {
	'use strict';
	App.init();
});
