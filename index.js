let body = document.querySelector('body');
let clr = document.querySelector('.colors .colors-text span');
let btn = document.querySelector('#colors button');
let menus = document.querySelectorAll('.header ul li a');


btn.addEventListener('click', function() {

    var a = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];
    var random1 = a[Math.floor(a.length * Math.random())];
    var random2 = a[Math.floor(a.length * Math.random())];
    var random3 = a[Math.floor(a.length * Math.random())];
    var random4 = a[Math.floor(a.length * Math.random())];
    var random5 = a[Math.floor(a.length * Math.random())];
    var random6 = a[Math.floor(a.length * Math.random())];

    var array = [random1, random2, random3, random4, random5, random6];

    var b = ['black','white','yellow','green','red','blue','purple'];
    var randomB = b[Math.floor(b.length * Math.random())];

    let result1 = '#x';
    result1 = result1.replace('x',array.join(''));

    let result2 = '';
    result2 = result2.replace('', randomB);

    var arrayTotal = [result1,result2];
    var randomTotal = arrayTotal[Math.floor(arrayTotal.length * Math.random())];

    let colorCode = '';
    colorCode = colorCode.replace('', randomTotal);

    body.style.background = colorCode;
    clr.innerHTML = colorCode;
});


menus.omclick = function() {
    body.style.background = '#f1f5f8';
}


