/* Вызов функции отправки почтового сообщения обратного звонка*/

$(document).ready(function () {
		$('.callback-send').on('submit', function(e) {
		e.preventDefault();
		this.reset();
		console.log($(this).serialize());
		sendCallbackEmail($(this));

	});

	// Функция отправки email-сообщения: Обратный звонок
	function sendCallbackEmail(mailForm) {
		$.ajax({
		type: 'POST',
		// beforeSend:,
		data: mailForm.serialize(),
		url: mailForm.attr('action'),
		dataType: 'html',
		success: function(status) {

			alert("Ваше письмо отправлено!");
		}
		});
	}
});


