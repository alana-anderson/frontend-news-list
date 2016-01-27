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
						$('#articles').append('<tr><td><div class="col-md-1"><a href="'+a.url+'"><img src="'+a.image+' " height="50" width="50"/></a></div><div class="col-md-11"><h4><a href="'+a.url+'">'+ a.title+'</a></h4></div></td><td>'+a.profile.first_name+' '+a.profile.last_name+'</td><td>'+a.words+'</td><td>'+a.publish_at+'</td></tr>');
					});
					i = i+10;
				}
			});
		}

		// dataTable sort
		$('#dataTable').DataTable( {
			'paging': false,
			'autoWidth': false,
			'stateSave': true,
			'jQueryUI': false,
			'scrollX': false,
			'scrollY': false,
			'searching': false,
			'bLengthChange' : false,
			'bInfo':false,
			'columns': [
			    { 'orderable': false },
			    null,
			    null,
			    null
			]
		});
	});
})(jQuery);

