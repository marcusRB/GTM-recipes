<script>
  var dataLayer = window.dataLayer || [];
  if ({{Event}} == 'gtm.linkClick'){
  	dataLayer.push({
    	'event' : 'event',
      		'eventCategory': 'CategoriaLink',
      		'eventAction': 'link_{{Click Text}}',
      		'eventLabel': '{{Click URL}}',
      		'eventValue': 50
        });
  }else if({{Event}} == 'gtm.click'){
  	dataLayer.push({
    	'event' : 'event',
      		'eventCategory': 'CategoriaClick',
      		'eventAction': 'btn_{{Click Element}}',
      		'eventLabel': '{{Click Element}}',
      		'eventValue': 20
  		});
  }
</script>
