var tabButton = $('.tab-button');
var tabContent = $('.tab-content');

for( let i = 0; i < 3; i++ ){ // var가 아니라 let을 써야하는 이유:
    $(tabButton).eq(i).on('click', function (){
        $(tabButton).removeClass('orange');
        $(tabButton).eq(i).addClass('orange');
        $(tabContent).removeClass('show');
        $(tabContent).eq(i).addClass('show');
    });
}

