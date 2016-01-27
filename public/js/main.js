(function ($) {
	$(document).ready(function () {
		var i = 10; // load 10 at a time
		$('#loadMore').click(function(e){
			e.preventDefault();
			ajaxLoadMore();
		});

		function ajaxLoadMore(){
			$.ajax({
				url: '../resources/articles.json',
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function(data) {
					$(data).each(function(i,a){
						$('#articles').append('<tr><td><div class="col-md-1"><img src="'+a.thumbnail+'"/></div><div class="col-md-11"><a href="'+a.url+'">'+ a.title+'</a></div></td><td>'+a.profile.first_name+' '+a.profile.last_name+'</td><td>'+a.words+'</td><td>'+a.publish_at+'</td></tr>');
					});
					i = i+10;
				}
			});
		}
	});
})(jQuery);

