<script>
(function() {
	var jsonData = {
	  "@context" : "http://schema.org",
	  "@type" : "Person",
	  "url" : "https://www.marcusrb.com/", //change this URL with yours
	  "name" : "Marco Russo", //change this with yours
	  "sameAs" : [ "http://es.linkedin.com/in/marcusrusso80", //modify social networds with yours, add or remove lines
	       "http://www.twitter.com/rb_marcus" ] 
	}
};
var el = document.createElement('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsonData);
document.head.appendChild(el);
})();
</script>
