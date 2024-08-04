jQuery(function($){
	$('#wlq2-results-all').click (function () {
		var checkedStatus = this.checked;
		var ids = [];
		$('.wlq2-results-remove').each(function () {
			$(this).prop('checked', checkedStatus);
			ids.push($(this).data('id'));
		});
		if(checkedStatus) {
			$("#QuizResultsIds").val(ids.join(','));
		} else {
			$("#QuizResultsIds").val('');
		}
	});

	var ids = new Array();
	var status = '';
	$('.wlq2-results-remove').click(function () {
		status = this.checked;
		$('#wlq2-results-all').prop('checked', '');
		var quiz_id = $(this).data('id');
		if(status && $.inArray(quiz_id, ids) == -1){
			ids.push(quiz_id);
			console.log(ids, status, $.inArray(quiz_id, ids));
		} else {
			var index = ids.indexOf(quiz_id);
			ids.splice(index, 1);
		}
		$("#QuizResultsIds").val(ids.join(','));
	});

	$("#wlqresults_actions").on('change', function(){
		$("#WLQuizClassAction").val(this.value);
	});

	$("#wql-result-action").on('submit', function(){
		var action = $("#wlqresults_actions").val();
		var ids = $("#QuizResultsIds").val();
		if(action == 'DeleteQuizResult' && ids.length > 0) {
			var c = confirm("Are you sure you want to delete the selected results?");
			return c;
		}
	});

	$(".del-result").on('click', function(e) {
		e.preventDefault();
		var id = $(this).data('id');
		$('#QuizResultsIds').val(id);
		$('#WLQuizClassAction').val('DeleteQuizResult');
		if(confirm("Are you sure you want to delete the quiz result?")) {
			$('#wql-result-action').submit();
		}
	});

	// QUIZ FRONTEND

	var pages = $('#wl-quiz .quiz-page');

	var nav = {
		next: function() {
			var el = pages.filter(':visible');
			var next = el.next();

			if(next.is('.quiz-page')) {
				pages.addClass('quiz-page-inactive');
				next.removeClass('quiz-page-inactive');
			}
		},
		back: function() {
			var el = pages.filter(':visible');
			var prev = el.prev();

			if(prev.is('.quiz-page')) {
				pages.addClass('quiz-page-inactive');
				prev.removeClass('quiz-page-inactive');
			}
		}
	}

	$('.quiz-page-nav').on('click', function(ev) {
		ev.preventDefault();
		var fn = $(this).attr('data-nav-direction')
		nav[fn]();
	});

});
