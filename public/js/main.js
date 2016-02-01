(function ($) {
	$(document).ready(function () {
		//var s = 0; // start at position 0
		var i = 10; // end at position 10 

		// get the sortToggled from localStorage
		var sortToggled = localStorage.sortToggled;

		// if previous sort session localStorage will take effect
		// on first load, sort the table
		if (sortToggled){
			ajaxSortTable(sortToggled);
		}

		// load more will launch ajaxLoadMore function
		$('#loadMore').click(function(e){
			e.preventDefault();
			ajaxLoadMore();
		});

		$('.tblsort').click(function(e){
			e.preventDefault();
			// toggle direction of the sort
			if (sortToggled){
				sortToggled = false;
			} else {
				sortToggled = true;
			}

			// store toggle
			localStorage.sortToggled = sortToggled;
			ajaxSortTable(sortToggled);
		});

		// load more articles from api 
		function ajaxLoadMore(){
			$.ajax({
				url: '/api/articles/0/'+ i +'/',
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function(data) {
					var content = '';
					$(data.data).each(function(i,a){
						content += '<tr>';
						content += '<td><div class="col-md-1"><a href="'+a.url+'">'+'<img src="'+a.image+'" height="60" width="60"/></a></div><div class="col-md-11"><h4 class="table-text"><a href="'+a.url+'">'+ a.title+'</a></h4></div></td>';
						content += '<td class="special-align align-left">'+a.profile.first_name+' '+a.profile.last_name+'</td>';
						content += '<td class="special-align">'+a.words+'</td>';
						content += '<td class="special-align">'+a.publish_at+'</td>';
						content += '</tr>';
					});
					// create new table
					$('#dataTable tbody').html(content);
					// iterate and add to next load more
					i = i+10;
				}
			});
		}

		function ajaxSortTable(){
			var direction = (sortToggled === true) ? 'asc' : 'desc';
			var route = '/api/articles/0/' + i + '?sort=true&direction=' + direction;

			$.ajax({
				url: route,
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function(data) {
					var content = '';
					$(data.data).each(function(i,a){
						content += '<tr>';
						content += '<td><div class="col-md-1"><a href="'+a.url+'">'+'<img src="'+a.image+'" height="60" width="60"/></a></div><div class="col-md-11"><a href="'+a.url+'"><h4 class="table-text">'+ a.title+'</a></h4></div></td>';
						content += '<td class="special-align align-left">'+a.profile.first_name+' '+a.profile.last_name+'</td>';
						content += '<td class="special-align">'+a.words+'</td>';
						content += '<td class="special-align">'+a.publish_at+'</td>';
						content += '</tr>';
					});
					// create new table
					$('#dataTable tbody').html(content);
				}
			});
		}

	});
})(jQuery);

