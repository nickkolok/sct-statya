

var timeBefore = Date.now();

var triades=[];

for(var a = 2; a < 40000; a++){
	console.error(a);
	var a2a = a*(a+1);
	for(var t = 1; 4*(t+1) <= a2a; t++){
		var max_s = Math.sqrt(t*t+a2a);
		var s = Math.floor(max_s);
//		for(var s = t + 2; s <= max_s; s +=2){
			if( a2a == (s-t)*(s+t) ) {
//				console.log(a,s,t);
				triades.push([a,s,t]);
			}
//		}
	}
}

triades.sort((x,y)=>(x[2]-y[2]));
//console.log(triades);

triades.map((arr)=>console.log(arr));

console.error((Date.now() - timeBefore)/1000, 'c');
