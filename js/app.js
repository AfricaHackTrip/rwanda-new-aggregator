(function() {

	var articles
	$.get('articles.json', function(data) {
		data = JSON.parse(data)
		articles = data.news
		init()
	})

	function init() {
		route()
		window.addEventListener('hashchange', route, false)
	}

	function route() {
		var id = location.hash.substr(1)
		if (id !== '') {
			renderArticle(id)
		} else {
			renderArticleList()
		}
	}

	function getArticle(id) {
		return _.find(articles, function(article) {
			return article.id == id
		})
	}

	function renderArticleList() {
		document.getElementById('article').innerHTML = ''
		var templateString = document.getElementById('tpl-articles').innerHTML
		var html = _.template(templateString, {articles: articles})
		document.getElementById('articles').innerHTML = html
	}

	function renderArticle(id) {
		document.getElementById('articles').innerHTML = ''
		var article = getArticle(id)
		var templateString = document.getElementById('tpl-article').innerHTML
		var html = _.template(templateString, {article: article})
		document.getElementById('article').innerHTML = html
	}
})()
