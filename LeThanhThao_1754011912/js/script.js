$(document).ready(function() {
	//xử lý sự kiện
	$('img').each(function(index) {
		$(this).click(function() {
			$('#modal-view').append('<img src="'+$(this).attr('src')+'" />');
			$('#modal-view').removeClass('hidden');
		});
	});

	$('#modal-view').click(function() {
		$(this).addClass('hidden');
		$(this).html('');
	});
});