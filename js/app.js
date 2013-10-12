$.get('articles.json', function(data){
	data = JSON.parse(data)
	var articles = data.news
	var templateString = document.getElementById('tpl-articles').innerHTML
	var html = _.template(templateString, {articles: articles})
	document.getElementById('articles').innerHTML = html

	var firstArticle = articles[0]
	var templateString = document.getElementById('tpl-article').innerHTML
	var html = _.template(templateString, {article: firstArticle})
	document.getElementById('article').innerHTML = html
})
