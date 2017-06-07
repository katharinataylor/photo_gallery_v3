// LIGHTBOX PLUGIN

$('.gallery-item a').vanillabox({
	animation: 'default',
    closeButton: true,
    keyboard: true,
    loop: true
});

// SEARCH BOX

var galleryImage = $(".gallery-item");

$('#search').on('keyup', function() {
    var title = $.trim($(this).val()).toLowerCase();
    galleryImage.each(function() {
        var caption = $(this).children('a').children('img').attr('alt').toLowerCase();
        if (caption.indexOf(title) > -1) {
            $(this).removeClass('hide').fadeIn(500);
        } else {
            $(this).fadeOut(500).addClass('hide');
		}
	});
});