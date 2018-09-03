let sentence = 'Amazon takes your account security very seriously. Amazon will never email you and ask you to disclose or verify your Amazon password, credit card, or banking account number.';


function longest(sen){
   	let newsen = sen.replace(/,|\./g, " ")
    let arr = newsen.split(' ');
    let longest = 's';
    for(let i = 0; i < arr.length; i++){
        if(longest.length < arr[i].length){
            longest = arr[i];
        }
    }return longest
}

console.log(longest(sentence))