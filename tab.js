var tabButton = $('.tab-button');
var tabContent = $('.tab-content');

// for( let i = 0; i < 3; i++ ){
//     $('.tab-button').eq(i).on('click', function (){
//         openTab(i)
//     })
// }

$('.list').click(function (e){
  openTab(e.target.dataset.id);
})

function openTab(num){
    $(tabButton).removeClass('orange');
    $(tabButton).eq(num).addClass('orange');
    $(tabContent).removeClass('show');
    $(tabContent).eq(num).addClass('show');
}

// var car = ['소나타', 50000, 'white']; // Array 자료형
var car2 = {name: '소나타', price: 50000}; //object 자료형 (key, value)
document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price;