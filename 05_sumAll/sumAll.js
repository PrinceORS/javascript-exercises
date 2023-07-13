const sumAll = function(loNum, hiNum){
	let sum = 0;
	if(isNaN(loNum) || isNaN(hiNum)){
		return 'ERROR';
	}else if(typeof loNum == 'string' || typeof hiNum == 'string'){
		return 'ERROR';
	}else if(loNum < 0 || hiNum < 0){
		return 'ERROR';
	}else if(loNum < hiNum){
		for(let i = loNum; i <= hiNum; i++)
			sum += i;
	}else{
		// High number first
		for(let i = hiNum; i <= loNum; i++){
			sum += i;
	}
	}
	return sum;
}

// Do not edit below this line
module.exports = sumAll;
