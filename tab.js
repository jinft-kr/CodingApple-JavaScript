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
