/*var i2;
var s;
var t=Date.now();
for(var i=1,j=0; i<10000000; i++){
  i2=i;
  while(!(i2&3)){
    i2 = i2 >> 2;
  }
  if(i2 & 2 || i2 & 7 === 5){
    continue;
  }
  s = Math.sqrt(i2);
  j+=( s == Math.floor(s));
}
console.log(Date.now()-t,' ',j);
*/
var i2;
var s;
var t=Date.now();
for(var i=1,j=0; i<10000000; i++){
  i2=i;
  while(!(i2&3)){
    i2 = i2 >> 2;
  }
  if(i2 & 2 || i2 & 7 === 5 || ((i2 & 15) != 1 && (i2 & 15) != 4 && (i2 & 15) != 9)){
    continue;
  }
  s = Math.sqrt(i2);
  j+=( s == Math.floor(s));
}
console.log(Date.now()-t,' ',j);


var i2;
var s;
var t=Date.now();
for(var i=1,j=0; i<10000000; i++){
  i2=i;
  while(!(i2&3)){
    i2 = i2 >> 2;
  }
  if((i2 & 7) != 1){
    continue;
  }
  s = Math.sqrt(i2);
  j+=( s == Math.floor(s));
}
console.log(Date.now()-t,' ',j);



/*
var i2;
var s;
var t=Date.now();
for(var i=1,j=0; i<10000000; i++){
  i2=i;
  while(!(i2&3)){
    i2 = i2 >> 2;
  }
  if(i2 & 2 || i2 & 7 === 5){
    continue;
  }
  s = Math.sqrt(i2);
  j+=( s == Math.floor(s));
}
console.log(Date.now()-t);
*/
