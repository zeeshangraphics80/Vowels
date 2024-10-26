let vowels = 'aeiou';
let input = document.getElementById('input');
let vwl = document.getElementById('vwl');
let btn = document.getElementById('btn');
let con = document.getElementById('con');

btn.addEventListener('click', function () {
    let newValue = input.value.split('');
    console.log(newValue);
    newValue.forEach(e => {
        if (vowels.includes(e)) {
            vwl.innerHTML += e;  
        } else {
            con.innerHTML += e; 
        }
    });
});
