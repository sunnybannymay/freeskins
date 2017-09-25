$(document).ready(function () {
    var items =
        {
            "link": "https://csgopolygon.com",
            "name": "CSGOPOLYGON",
            "code": "MYASKOTYAS"
        };
    // $(function () {
    //
    //     for (var i = 1; i <= 5; i++) {
    //         var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
    //         var myPanel = $('<div class="card" > <div class="card-block"></div> </div>');
    //         myPanel.appendTo(myCol);
    //         myCol.appendTo('#contentPanel');
    //         $('.container').append('<p>',{text:'Hello'}).css({background:'red'})
    //     }
    //     return false;
    // })
    $(function () {
        for (i = 0; i < 6; i++) {
            // var obj=$('<div>', {class: 'col-md-6'})
            //     .append('<div>', {class: 'card'})
            //     .append('<div>', {class: 'card-block'})
            //     .append('<div>', {class: 'card-title'})
            //     .append('<p>', {value: items.name});
            // obj.appendTo('#contentPanel');

            var myCol = $('<div class="col-sm-3 col-md-4"></div>');
            var myPanel = '<div class="card">'+
                '<div class="card-block">'+
                '<h4 class="card-title text-center">';
                myPanel+='<a class="text-display 2" href="';
            myPanel+=items.link+'">'+items.name+'</a>'+
                '</h4>'+
                '</div>';
            myCol.html(myPanel);
            myCol.appendTo('#contentPanel');

        }
        return false;
    })
});