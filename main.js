// Thực hiện các hành động bên trong khi bắt đầu tải trang
$(document).ready(function() {
	var randomNum = 0;
	var char = '';
	function randomChar() {
		// Random từ 1 đến 10 . floor làm tròn xuống
		randomNum = Math.floor(Math.random() * 10 + 1);

		switch (
			randomNum // === not ==
		) {
			case 1:
				char = '<span class="glyphicon glyphicon-plus"></span>';
				break;
			case 2:
				char = '<span class="glyphicon glyphicon-euro"></span>';
				break;
			case 3:
				char = '<span class="glyphicon glyphicon-minus"></span>';
				break;
			case 4:
				char = '<span class="glyphicon glyphicon-cloud"></span>';
				break;
			case 5:
				char = '<span class="glyphicon glyphicon-music"></span>';
				break;
			case 6:
				char = '<span class="glyphicon glyphicon-search"></span>';
				break;
			case 7:
				char = '<span class="glyphicon glyphicon-heart"></span>';
				break;
			case 8:
				char = '<span class="glyphicon glyphicon-star"></span>';
				break;
			case 9:
				char = '<span class="glyphicon glyphicon-cog"></span>';
				break;
			case 10:
				char = '<span class="glyphicon glyphicon-asterisk"></span>';
				break;
			default:
				break;
		}
	}

	for (let i = 0; i <= 99; i++) {
		randomChar();

		// 1
		$('.box-numbers').append(
			'<div class="number" data-number=' +
				i +
				'>' +
				i +
				'</br>' +
				char +
				'</div>'
		);
		console.log($('.box-numbers').html());
	}

	randomChar();

	// 2
	$('.number[data-number="9"]').html('9</br>' + char);
	$('.number[data-number="18"]').html('18</br>' + char);
	$('.number[data-number="27"]').html('27</br>' + char);
	$('.number[data-number="36"]').html('36</br>' + char);
	$('.number[data-number="45"]').html('45</br>' + char);
	$('.number[data-number="54"]').html('54</br>' + char);
	$('.number[data-number="64"]').html('64</br>' + char);
	$('.number[data-number="72"]').html('72</br>' + char);
	$('.number[data-number="81"]').html('81</br>' + char);

	// After click button
	$('#btn').click(() => {
		// Ẩn những gì không cần thiết
		$('#btn').hide(); // dung $(this) -> loi

		$('p').hide();

		$('.box-numbers').html('<p>Hình bạn vừa ghi nhớ là: ' + char);
	});
});
