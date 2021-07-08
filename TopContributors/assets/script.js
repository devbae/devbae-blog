var contributorsDiv = document.getElementById("contributors");
var k=0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
	$("#loader").show();
	projectContributors();
});

function projectContributors()
{	
	// A 500ms delay so that the loader is shown before the request is made. Otherwise loader is not shown and page keeps on loading.
	sleep(500).then( () => {
		res = ["devbae-blog"]; //repos list to  be displayed on the site.
	
    	$.ajaxSetup({
      		async: false
    	});
		for (i=0; i<res.length; ++i)
		{	
			
			$.getJSON('https://api.github.com/repos/devbae/'+res[i]+'/contributors',
				function(data){
					data.sort((a,b) => b.contributions-a.contributions);
					var max_count = 0, iter=0;
					
					if(data.length>10)
						max_count=10;
					else
						max_count=data.length;

					projectTitle = res[k].toUpperCase();
					k++;

					child ="<a href='https://github.com/devbae/" + res[i] + "'><h2>"+ projectTitle +"</h2></a>";

					contributorsDiv.innerHTML += "<div class=\"row team-box\">";
					contributorsDiv.innerHTML += child;

					for(j=0; j<max_count; ++j, ++iter)
					{
						
						var login = data[iter].login, contributions = data[iter].contributions;
          				var avatar = data[iter].avatar_url;
            			var newChild = "\
           				<div class=\"col-lg-2 col-sm3 text-center member contributor-div\">\
              				<img class=\"img-circle img-responsive img-center team-img\" src=\" " + avatar + "\" alt=\"\">\
              				<h4><a class=\"github-profile\" target=\"_blank\" href=\"https://github.com/" + login + " \">@" + login + "</a></h3>\
              				<h5>Contributions: " + contributions + "</h5>\
            			</div>\
            			";
            			contributorsDiv.innerHTML += newChild;

					}
					contributorsDiv.innerHTML += "</div>\ <hr>";
				});
		}
		$("#loader").hide();
	});
};
