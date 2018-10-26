function(){
  try{
	var today = new Date();
	var str = today.toString().split("(")[0]; //split GMT after "("
	return str;
	} catch(e){
  }
}


