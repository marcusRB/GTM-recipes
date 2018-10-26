function(){
   try {
	 var now = Date.now();
     var durationCookie = now - {{PD - setCookie_mcreditUserTiming}}; //set varCookie value before
  	 return durationCookie;
	} catch(e){
       window.console && window.console.log(e);
    };
}

