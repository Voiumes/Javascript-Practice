let string = 'you should probably capitalize me';

const caps = (str) => {
  let split = str.split(' ');
  let newArr = []
	split.forEach(function(i){
    newArr.push(i.charAt(0).toUpperCase() + i.slice(1)) 
  })
	let capstring = newArr.join(' ')
  console.log(capstring)
}

console.log(caps(string));