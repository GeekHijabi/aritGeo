module.exports = {
aritGeo: (arr) =>{
	if (arr.length < 3){
		return 0;
	} 
else {
		const ari = arr[1] - arr[0];
		const geo = arr[1] / arr[0];

		let arithmetic = true;
		let geometric = true;

		for (let i=0; i < arr.length - 1; i++){

			if(arr[i+1] - arr[i] != ari)
				arithmetic = false;

		    if (arr[i+1] / arr[i] != geo)
		    	geometric = false;

		} 

		if (arithmetic === true){
			return 'Arithmetic';
		}

		if (geometric === true){
			return 'Geometric'
		}
   if(arithmetic === false && geometric === false){
    	return -1
    }

	}
}
}