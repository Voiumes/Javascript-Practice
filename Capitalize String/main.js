let lower = 'hello world hi';


const array = (string) =>{
  return string.split(' ')
}
const cap = (str) => {
  let arr = str.split(' ');
  let newArr = []
  arr.forEach(function(e){
    e = e.charAt(0).toUpperCase() + e.slice(1);
    newArr.push(e);
  })
  return newArr.join(' ')
}


console.log(cap(lower))