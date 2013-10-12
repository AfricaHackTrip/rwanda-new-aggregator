$.get('articles.json', function(data){
	data = JSON.parse(data)
	var articles = data.news
	var templateString = document.getElementById('tpl-article').innerHTML
	var html = _.template(templateString, {articles: articles})
	document.getElementById('articles').innerHTML = html
})
