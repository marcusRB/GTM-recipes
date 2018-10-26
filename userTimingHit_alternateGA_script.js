<!-- Set Tag firing priority -- Tag firing options Unlimited -- Tag Sequencing load before GA tag -->

<script>
  	try{
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
  ga('userTiming.send', {
    hitType:'timing',
  	timingCategory: 'formOK_{{PD - lut - resultadoEstudio-Autorizado}}',
    timingVar: 'Enviado @ {{PD - cJS timestamp - localtime}}',
    timingLabel: 'mobileCredit_{{PD - cJS clientID}}',
    timingValue: {{PD - cJS - formCompletationTime - cookie}}
  });
   ga('userTiming.set', 'dimension1','{{PD - cJS clientID}}');
    }catch(e){
    window.console(e);
    }
</script>

