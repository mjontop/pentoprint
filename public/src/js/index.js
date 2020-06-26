var name = './src/img/book';
i = 1;

function slidebanner() {
	$('#banner').fadeToggle(300, function () {
		$('.banner > div > div').css('background-color', 'red');
		$('.imgposition' + i).css('background-color', 'black');
		i = i + 1;
		if (i > 3) {
			i = 1;
		}
		var newname = name + i + '.jpg';
		$('#banner').attr('src', newname);
	});
	$('#banner').fadeToggle(100);
}

setInterval(slidebanner, 3000);
