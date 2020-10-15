(function (blink) {
	'use strict';

	var panamericana2020Style = function () {
		blink.theme.styles.modern.apply(this, arguments);
	},
	page = blink.currentPage;

	panamericana2020Style.prototype = {
		parent: blink.theme.styles.modern.prototype,
		bodyClassName: 'content_type_clase_panamericana2020',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'panamericana2020',
			styles: [

				{ name: 'Tit Actividades', element: 'h4', attributes: { 'class': 'bck-title4'} },
				{ name: 'Tit Actividades2', element: 'h4', attributes: { 'class': 'bck-title5'} },
				{ name: 'Tit LovingLondon', element: 'h4', attributes: { 'class': 'bck-title6'} },
				{ name: 'Tit-Blanco-LovingLondon', element: 'h4', attributes: { 'class': 'bck-title7'} },
				{ name: 'Tit-NewYork1', element: 'h4', attributes: { 'class': 'bck-title8'} },
				{ name: 'TitActivid-NewY', element: 'h4', attributes: { 'class': 'bck-title9'} },
				{ name: 'Tit-Rojo', element: 'h4', attributes: { 'class': 'bck-title10'} },
				{ name: 'Tit-Blanco', element: 'h4', attributes: { 'class': 'bck-title11'} },
				{ name: 'Tit-Negro', element: 'h4', attributes: { 'class': 'bck-title12'} },
				{ name: 'Tit-FestivalsArefun', element: 'h4', attributes: { 'class': 'bck-title13'} },
				{ name: 'Tit-Festi-Subrayado', element: 'h4', attributes: { 'class': 'bck-title15'} },
				{ name: 'Tit-Festiv-Blanco', element: 'h4', attributes: { 'class': 'bck-title14'} },
				{ name: 'Tit-Scotland', element: 'h4', attributes: { 'class': 'bck-title16'} },

				{ name: 'Color-popup', element: 'span', attributes: { 'class': 'bck-enfasis2' }},
				{ name: 'Color Azul', element: 'span', attributes: { 'class': 'bck-enfasis3' }},
				{ name: 'Color Rojo', element: 'span', attributes: { 'class': 'bck-enfasis5' }},
				{ name: 'Color Naranja', element: 'span', attributes: { 'class': 'bck-enfasis4' }},
				{ name: 'Font Monofonto', element: 'span', attributes: { 'class': 'bck-enfasis6' }},
				{ name: 'Font Festivals', element: 'span', attributes: { 'class': 'bck-enfasis10' }},
				{ name: 'Font Gelato', element: 'span', attributes: { 'class': 'bck-enfasis9' }},
				{ name: 'CirculoTITULO', element: 'span', attributes: { 'class': 'bck-enfasis7' }},
				{ name: 'FondoAzul', element: 'span', attributes: { 'class': 'bck-enfasis8' }},
				
				{ name: 'Lista Desordenada1', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'Lista Desordenada2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
							
				{ name: 'Lista NumeroNaranja', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista Letra', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Numero', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Letra-minus', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Circu-Rojo', element: 'ol', attributes: { 'class': 'bck-ol-5' } },

				{ name: 'CajaBordesColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'CajaPuntosAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'CajaPuntosRojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'CajaPuntosNegro', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'CajaPuntosBlanco', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'CajaPuntosRojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'CajaPuntosVerde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-15' } },
				{ name: 'CajaPuntosNaranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-16' } },
				{ name: 'CajaNaranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'CajaAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'CajaBlanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'CajaNegra', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'CajaRojaBorde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
				{ name: 'CajaNEWyork', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'CajaJapon1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-17' } },
				{ name: 'CajaJapon2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-18' } },
				{ name: 'CajaJapon3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-19' } },
				{ name: 'CajaJapon4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-20' } },
				{ name: 'CajaJapon5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-21' } },
				{ name: 'CajaBordesScotland', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-22' } }
			]
		},

		init: function () {
			this.parent.init.call(this.parent, this);
		},

		removeFinalSlide: function () {
			this.parent.removeFinalSlide.call(this.parent, this, true);
		}
	};

	panamericana2020Style.prototype = _.extend({}, new blink.theme.styles.modern(), panamericana2020Style.prototype);
	blink.theme.styles.panamericana2020 = panamericana2020Style;

})( blink );

$(document).ready(function () {
	var src_logo = $('.content_type_clase_panamericana2020').find('.logo_slide').attr('logo_dominio');
	if (typeof(src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.content_type_clase_panamericana2020').find('.logo-publisher').css('background-image', "url('"+src_logo+"')");
	}
});
