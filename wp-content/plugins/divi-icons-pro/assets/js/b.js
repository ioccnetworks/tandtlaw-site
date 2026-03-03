(function( $ ) {
	var divi_module_list = [
		'.et_overlay',
		'.et-pb-icon',
		'.et_pb_shop',
		'.single_add_to_cart_button',
		'.dipi_btt_wrapper',
		'.et_pb_button.et_pb_custom_button_icon',
		'.et_pb_de_mach_view_button .et_pb_button',
		'.et_pb_more_button',
		'.et_pb_dmb_breadcrumbs li[data-icon]',
		'.et_pb_dmb_breadcrumbs a[data-icon]',
		'.dgpc_product_carousel .swiper-button-prev',
		'.dgpc_product_carousel .swiper-button-next',
		'.et_pb_b3_testimonial_grid_slider .swiper-button-next',
		'.et_pb_b3_testimonial_grid_slider .swiper-button-prev',
		'.dipi_blog_slider .swiper-button-next',
		'.dipi_blog_slider .swiper-button-prev',
		'.et_pb_testimonial_slider .swiper-button-next',
		'.et_pb_testimonial_slider .swiper-button-prev',
		'.dipi-blog-slider-main .swiper-button-prev',
		'.dipi-blog-slider-main .swiper-button-next',
		'.swiper-button-prev',
		'.swiper-button-next',
		'.dsm_icon_list_icon',
		'.dp-dfg-search-icon',
		'.dgbc_blog_carousel .dgbc_post_item .dg_read_more_wrapper a',
		'.dnext-sid-text-divider-icon',
		'.dnext-3d-transform-flpb-inner.dnext-3d-flpb-flibbox-icon-front .et_pb_animation_top',
		'.dnext-3d-transform-flpb-inner.dnext-3d-flpb-flibbox-icon-back .et_pb_animation_top',
		'.dnext-flpb-flibbox-front span.dnext-flpb-flibbox-icon-font',
		'.dnext-flpb-flibbox-back span.dnext-flpb-flibbox-icon-back',
		'.dnxt-nie-uih-btn',
		'.dnxte-badge-icon',
		'.dnxte-feature-list-icon',
		'.dnxte-hotspot_icon',
		'.dnxt-btn-icon i',
		'.elegantshop-add-button .add_to_cart_button',
		'.elegantshop-add-button .elegantshop-click-etfonts',
		'.elegantshop-nav.elegantshop-carousel-button-prev',
		'.elegantshop-nav.elegantshop-carousel-button-next',
		'.elegantshop-cart-icon',
		'.et_pb_button.dp-dfg-more-button',
		'.owl-carousel .owl-next',
		'.owl-carousel .owl-prev',
		'.elegantshop-cart-button',
		'.ribbon-icon',
		'.dipl_button_icon',
		'.et_pb_inline_icon',
		'.single_add_to_cart_button',
		'.dnxt-blurb-btn i',
		'.dipi-faq-icon-closed',
		'.dipi-faq-icon-open',
		'.dipl-breadcrumb-inner li',
		'.reset-filters.et_pb_button',
		'.et_pb_button'
	];

	var divi_module_list_toggles = [
		'.et-core-control-toggle',
		'.et-fb-form__toggle[data-name="button"]',
		'.et-fb-form__toggle[data-name="button_one"]',
		'.et-fb-form__toggle[data-name="button_two"]',
		'.et-fb-form__toggle[data-name="image"]',
		'.et-fb-form__toggle[data-name="overlay"]',
	];

	let all_divi_module_list         = divi_module_list.join();
	let all_divi_module_list_toggles = divi_module_list_toggles.join();
	let fb_list                      = '.et-fb-font-icon-list';
	let fb_frame_selector            = 'et-fb-app-frame';
	let icons_container_selector     = '.et-fb-font-icon-list div';
    let clear_filter_selector = 'div.et-fb-options-filter-button-wrap > div > button:nth-child(2)';
    let filter__item_selector = '.et-fb-icons-filter-dropdown-wrap li';

	function is_et_fb_pro() {
		if( $( '#et-fb-app' ).length ) { return true; } // is page builder app
		return false;
	}
	if( $('#et-fb-app').length && inIframe() ) {	// frontend visual builder
		var targetNode = document.getElementById( 'et-fb-app' );
		var config = { characterData: true, childList: true, subtree: true, attributes: true };
		var callback = function( mutationsList ) {
			mutationsList.forEach(function (thisMutation) {
				if (  thisMutation.type == "attributes" || thisMutation.type ==  "characterData" ) {
					var target = thisMutation.target;
					if ( $(target).attr('id') === 'et-fb-app' || $(target).attr('id') === 'et_fb_root' || $(target).hasClass('et_pb_section') || $(target).hasClass('et_pb_row') || $(target).hasClass('et_pb_column') ) {
						b3_process_moudle_icons(false)
					}
				}
			});
		}
		var observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	} else { // Frontent
		b3_process_moudle_icons(true)
	}
	if(($('#et-fb-app').length && !inIframe()) ||
		($('body.extra_page_et_theme_builder').length && !inIframe()) ||
	 	($('body.divi_page_et_theme_builder').length && !inIframe()) ||
	 	($('body.et-bfb').length && !inIframe())) {
		var targetNode = null;

		if($('#et-fb-app').length)
			targetNode = document.getElementById( 'et-fb-app' );
		else if($('body.divi_page_et_theme_builder').length)
			targetNode = $('body.divi_page_et_theme_builder')[0];
		else if($('body.extra_page_et_theme_builder').length)
			targetNode = $('body.extra_page_et_theme_builder')[0];
		else
			targetNode = $('body.et-bfb')[0];

		var config = { childList: true, subtree: true };
		var callback = function( mutationsList ) {
			mutationsList.forEach(function (thisMutation) {
				if ( thisMutation.type == 'childList' ) {
					if($('.et-fb-font-icon-list').length){
							$('.et-fb-font-icon-list').each(function(i, elem){
								setTimeout(function(){
									b3_process_fb_icon_lists();
								}, 100);
								 
							})
					}
				}
			});
		}
		var observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	}

	$(document).on('click', fb_list + ' div > li', function(e) {
		let item = this;
		b3_hide_icons();
		setTimeout(function() {
			b3_process_icon_list_item(item)

			$(icons_container_selector).each(function(i, el){
				var icon_list_ul = $(el)
				var icon_list_children = icon_list_ul.children();
				for( var i = 0; i < icon_list_children.length; i++ ) {
					var icon_item = icon_list_children[i];
					if(!icon_item.classList.contains('b3-divi-processed'))
						b3_process_icon_list_item(icon_item);
				}
			});

			b3_process_icons();
			b3_show_icons();
		}, 100);
	});
	// $(document).ajaxComplete(function() {
	// 	b3_hide_icons();
	// 	setTimeout(function() {
	// 		//   b3_process_fb_icon_lists();
	// 		  b3_process_icons();
	// 		  b3_show_icons();
	// 	}, 100);
	// });

	function b3_process_moudle_icons(hide){
		if(hide)
			b3_hide_icons();
		setTimeout(function() {
			b3_process_icons();
			if(hide)
				b3_show_icons();
		}, 100);
	}
	function inIframe () {
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	}
 
	function is_iic($element){ // is icon in content not in pseudo element (before|after)
		if($element.hasClass('b3-iic') || $element.html().indexOf("|") > -1 || $element.html().indexOf("~|") > -1)
			return true;
		return false;
	}

	function b3_process_element_icon($element, data_icon) {
		var symbol_data,
			iconContent
			icon_in_content = false;

		if($element.hasClass('b3-iic') || $element.html().indexOf("|") > -1 || $element.html().indexOf("~|") > -1)
			icon_in_content = true;
			
		if(typeof(data_icon) != 'undefined' ) {
			iconContent = data_icon;
		} else {
			if ( is_iic($element) )
				iconContent = $element.html();
			else
				iconContent = $element.attr('data-icon')
		}
		if(!$element.hasClass('b3_divi_icon_fd')){
			$element.attr('data-b3c', '');
			$element.attr('data-iconfamily', '');
			$element.css("visibility", 'visible');
		}
		if(typeof (iconContent) == 'undefined') return;
		if(iconContent.indexOf("~|") >-1 )
			symbol_data = iconContent.split("~|");
		else if(iconContent.indexOf("|") >-1 )
			symbol_data = iconContent.split("|");
		else
			return

		$element.attr( 'data-icon', symbol_data[2] );
		$element.removeClass('b3_divi_et_icon_fd b3_divi_b3holidayicon_icon_fd b3_divi_fas_icon_fd b3_divi_far_icon_fd b3_divi_fab_icon_fd b3_divi_et_icon_fd b3_divi_mt_icon_fd b3_divi_b3lineicon_icon_fd');
		$element.addClass( 'b3_divi_' + symbol_data[0] + '_icon_fd ' );
		$element.addClass( 'b3_divi_icon_fd' );
		$element.attr('data-b3c',  'b3_divi_' + symbol_data[0].trim() + '_icon_fd');
		$element.attr('data-icon',  b3_decode_html_entries(symbol_data[2]));
		$element.attr('data-iconfamily', symbol_data[0]);

		if(icon_in_content){
			$element.html( symbol_data[2] );
			$element.addClass('b3_iic');
		}
	}

	function b3_decode_html_entries(str){
		var elem = document.createElement('textarea');
		elem.innerHTML = str;
		return elem.value;
	}

	function b3_process_fb_icon_lists(){
		$('.et-fb-font-icon-list div, .b3_icon_lists div').each(function(i, el){
			b3_process_fb_icon_list($(el));
		})
	}
 
	document.addEventListener('scroll', function (event) {
		if(typeof event.target !== 'undefined' && typeof event.target.classList !== 'undefined') {
			if(event.target.classList.contains('et-fb-font-icon-list')){
				b3_process_fb_icon_list($(event.target).find('div'))
			}
		}
	}, true);
 
	// Fix icons when Add/Remove filter
	$(document).on('click', clear_filter_selector + ',' + filter__item_selector , function() {
		$(icons_container_selector).css("visibility", 'hidden')
		setTimeout(function(){
			setTimeout(function(){$(icons_container_selector).css("visibility", 'visible')}, 100);
			$(icons_container_selector).each(function(i, el){
				var icon_list_ul = $(el)
				var icon_list_children = icon_list_ul.children();
				for( var i = 0; i < icon_list_children.length; i++ ) {
					var icon_item = icon_list_children[i];
					b3_process_icon_list_item(icon_item);
				}
			});
		}, 100);
	})
 
	function b3_process_fb_icon_list(icon_list_ul) {
		var icon_list_children = icon_list_ul.children();
		for( var i = 0; i < icon_list_children.length; i++ ) {
		  	var icon_item = icon_list_children[i];
			if(!is_divi_icon(icon_item) && !is_processed_icon(icon_item)) {
				b3_process_icon_list_item(icon_item);
			}
 		}
	}
	function is_divi_icon(icon_item) {
		return  (
					(icon_item.getAttribute('data-icon-type') === 'divi' || icon_item.getAttribute('data-icon-type') === 'fa') &&  
					icon_item.getAttribute('data-icon').indexOf('|') === -1
				);
	}
	function is_processed_icon(icon_item) {
		return icon_item.classList.contains('b3-divi-processed') && icon_item.getAttribute('data-icon').indexOf('|') === -1;
	}
	function clear_b3_classes(icon_item){
		let $icon_item = $(icon_item);
		$(icon_item).removeClass('b3-divi-processed')
		$icon_item.removeAttr("data-iconfamily");
		$icon_item.removeAttr("data-iconname");
		$icon_item.removeAttr("title");
		$(icon_item).removeClass (function (index, className) {
			return (className.match (/\bb3_\S+/g) || []).join(' ');
		});
	}

	function b3_process_icon_list_item(icon_item){
		var $icon_item = $(icon_item);
		clear_b3_classes(icon_item);
		$icon_item.hide();
		let icon_data = $icon_item.attr('data-icon-utf') + '';
		if (icon_data.indexOf('icon_quotations_alt2') > -1){
				icon_data = icon_data.split("~|");
		}else{
			icon_data = icon_data.split("|");
		}
		let b3ProcessFontIcon = (typeof window.ET_Builder.API.Utils === 'undefined') ? window.frames[0].ET_Builder.API.Utils.processFontIcon: window.ET_Builder.API.Utils.processFontIcon

		if( icon_data.length > 1 ) {
			icon_set_name = icon_data[0];
			$icon_item.attr({ 
				"data-iconfamily" : icon_data[0],
				"data-iconname" : icon_data[1],
				"title" : icon_data[1],
				"data-icon" : b3ProcessFontIcon(icon_data[2])
			 });
			$icon_item.addClass( 'b3_divi_icons_list b3_divi_' + icon_data[0] + '_icon_fd' );
		} else {
			$icon_item.attr({ "data-icon" : b3ProcessFontIcon(icon_data[0])});
		}
		$icon_item.addClass('b3-divi-processed')
		$icon_item.show();
		  
	}

	 
	jQuery(document).on('keyup', '.et-fb-settings-option-input', function(){
		setTimeout(function(){
			$('.et-fb-font-icon-list div, .b3_icon_lists div').each(function(i, el){
				var icon_list_ul = $(el)
				var icon_list_children = icon_list_ul.children();
				for( var i = 0; i < icon_list_children.length; i++ ) {
					var icon_item = icon_list_children[i];
					b3_process_icon_list_item(icon_item);
				}
			});
		}, 100);
	})

	function b3_hide_icons() {
		
		if( is_et_fb_pro() && $('iframe#' + fb_frame_selector).length ) {
			var builder_frame = $('iframe#' + fb_frame_selector);
			$( all_divi_module_list, builder_frame.contents() ).removeClass('show_icon');
			$( all_divi_module_list, builder_frame.contents() ).addClass('hide_icon');
		} else {
			$( all_divi_module_list ).removeClass('show_icon');
			  $( all_divi_module_list ).addClass('hide_icon');
		}
	}
	function b3_show_icons() {
		if( is_et_fb_pro() && $('iframe#' + fb_frame_selector).length ) {
		  var builder_frame = $('iframe#' + fb_frame_selector);
		  $( all_divi_module_list, builder_frame.contents() ).removeClass('hide_icon');
		  $( all_divi_module_list, builder_frame.contents() ).addClass('show_icon');
		} else {
		  $( all_divi_module_list ).removeClass('hide_icon');
		  $( all_divi_module_list ).addClass('show_icon');
		}
	}

	function b3_process_icons_with_after(){
		var items = document.querySelectorAll('.single_add_to_cart_button');
		items.forEach(function(el, i){
			var style = window.getComputedStyle(el, '::after')
			var elem = document.createElement('textarea');
			elem.innerHTML = style.content;
			var decoded = elem.value;
			decoded = decoded.replace('\\', '')
			decoded = decoded.replace(' ', '')
			decoded = decoded.replace('"', '')
			decoded = decoded.replace('"', '')
			decoded = decoded.replace('ú', 'fa')
			decoded = decoded.replace('³', 'b3')
			b3_process_element_icon($(el), decoded)
		})
	}
	
	function b3_process_icons() {
		b3_process_dmach_icons();
		b3_process_divi_plus_icons();
		b3_process_icons_with_after();
		$( all_divi_module_list ).each(function(i, module){
				b3_process_element_icon($(module))
		});
	}
  
	// $(document).on('click', all_divi_module_list_toggles, function(e) {
	// 	setTimeout(function(){
	// 		// b3_process_fb_icon_lists();
	// 	}, 100);
	// });

	$( document).on('mousedown','.et-fb-font-icon-list li', function(event){
		var iframeName = false;
		if($('iframe#' + fb_frame_selector).length)
			iframeName = fb_frame_selector

		if($('iframe#et-bfb-app-frame').length)
			iframeName = 'et-bfb-app-frame';

		if( is_et_fb_pro() && iframeName ) {
			var builder_frame = $('iframe#' + iframeName);
			$('.et_fb_editing_enabled', builder_frame.contents()).find(all_divi_module_list).removeClass('show_icon');
			$('.et_fb_editing_enabled', builder_frame.contents()).find(all_divi_module_list).addClass('hide_icon');
		}
	});

	$( document).on('mouseup','.et-fb-font-icon-list li', function(event){
		var iframeName = false;
		if($('iframe#' + fb_frame_selector).length)
			iframeName = fb_frame_selector

		if($('iframe#et-bfb-app-frame').length)
			iframeName = 'et-bfb-app-frame';

			window.setTimeout(function(){
				if( is_et_fb_pro() && iframeName ) {
					var builder_frame = $('iframe#' + iframeName);

					$('.et_fb_editing_enabled', builder_frame.contents()).find(all_divi_module_list).each(function(i, module){
						b3_process_element_icon($(module))
					  });
					$( all_divi_module_list, builder_frame.contents() ).removeClass('hide_icon');
					$( all_divi_module_list, builder_frame.contents() ).addClass('show_icon');
				}
			},0);

	});


	/**************** Third Party Compatibility ****************/
	/* Support for Divi FilterGrid */
	if(document.querySelector('.dp-dfg-search-icon')){
		let dfg_observer = new MutationObserver(dfg_callback);
		function dfg_callback (mutations) {
			$('.dp-dfg-search-icon').removeAttr('data-icon')
			b3_process_icons();
		}
		dfg_observer.observe(document.querySelector('.dp-dfg-search-icon'), { characterData: false, attributes: false, childList: true, subtree: false });
	} /* End of  Divi FilterGrid */

	/*Support for Divi Supreme popup*/
	if(document.querySelector('.dsm-popup-module')){
		let dsm_observer = new MutationObserver(dsm_callback);
		function dsm_callback (mutation) {
			mutation.forEach(function(record, i){
			if (record.addedNodes && record.addedNodes.length > 0) {
					var hasClass = [].some.call(record.addedNodes, function(el) {
						if(el.classList)
							return el.classList.contains('dsm-popup')
						return false;
					});
					if (hasClass) {
						b3_process_icons();			
					}
				}
			})
		}
		dsm_observer.observe(document.querySelector('#main-content'), { characterData: false, attributes: false, childList: true, subtree: true });
	}
	/*End of Support for Divi Supreme popup*/

	/* Support for Divi FilterGrid */
	if(document.querySelector('.elegantshop-add-button .add_to_cart_button')){
		let dfg_observer = new MutationObserver(dfg_callback);
		function dfg_callback (mutations) { b3_process_icons(); }
		dfg_observer.observe(document.querySelector('.elegantshop-add-button .add_to_cart_button'), { childList: true  });
		document.querySelectorAll('.elegantshop-add-button .add_to_cart_button').forEach(function(el){ dfg_observer.observe(el, { childList: true  }); })
	}

	if(document.querySelector('.dpdfg_filtergrid')){
		let dpdfg_observer = new MutationObserver(dfg_callback);
		function dfg_callback (mutations) { b3_process_icons(); }
		document.querySelectorAll('.dpdfg_filtergrid').forEach(function(el){ dpdfg_observer.observe(el, { childList: true  }); })
	}

	if(document.querySelector('.dp-dfg-items')){
		let dfg_items_observer = new MutationObserver(dfg_callback);
		function dfg_callback (mutations) { b3_process_icons(); }
		document.querySelectorAll('.dp-dfg-items').forEach(function(el){ dfg_items_observer.observe(el, { childList: true  }); })
	}
	/* End of  Divi FilterGrid */

	/* 	Divi Machine Compataplity */
	function b3_process_dmach_icons(){
		var items = document.querySelectorAll('.dmach-icon, .et_overlay, .owl-next, .owl-prev');
		items.forEach(function(el, i){
			var style = window.getComputedStyle(el, '::before')
			var elem = document.createElement('textarea');
			elem.innerHTML = style.content;
			var decoded = elem.value;
			decoded = decoded.replace('\\', '')
			decoded = decoded.replace(' ', '')
			decoded = decoded.replace('"', '')
			decoded = decoded.replace('"', '')
			decoded = decoded.replace('ú', 'fa')
			decoded = decoded.replace('³', 'b3')
			 
			b3_process_element_icon($(el), decoded)
		})
	}

	function b3_process_divi_plus_icons(){
		var items = document.querySelectorAll('.dipl_swiper_navigation .swiper-button-next');
		items.forEach(function(el, i){
			var icon = $(el).attr('data-next_slide_arrow');
			b3_process_element_icon($(el), icon)
		})
		var items = document.querySelectorAll('.dipl_swiper_navigation .swiper-button-prev');
		items.forEach(function(el, i){
			var icon = $(el).attr('data-previous_slide_arrow');
			b3_process_element_icon($(el), icon)
		})
	}
})( jQuery );
