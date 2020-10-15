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

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
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
