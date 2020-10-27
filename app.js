const boxesArray = [
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
];

boxesArray.forEach(function(item){
 if(item.box === true){
     $(`#mainContainer`).append(`<div class = 'greyBox' ></div>`);
 }
});

$(`.greyBox`).on('click', function(){
     $(this).toggleClass('toggleColor');


});

















