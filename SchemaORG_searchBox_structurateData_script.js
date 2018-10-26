<script>
(function() {
	var jsonData = {
		"@context": "http://schema.org",
		"@type": "WebSite",
		"url": "https://www.example.com/",
		"potentialAction": {
		    "@type": "SearchAction",
		    "target": "https://query.example.com/search?q={search_term_string}",
		    "query-input": "required name=search_term_string"
	}
};
var el = document.createElement('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsonData);
document.head.appendChild(el);
})();
</script>