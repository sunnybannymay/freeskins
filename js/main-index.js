$(document).ready(function () {
    var items = [
        {
            "link": "https://csgopolygon.com",
            "name": "CSGOPOLYGON",
            "code": "MYASKOTYAS",
            "free": "0.5$"
        },
        {
            "link": "https://csgofast.ru/#r/23rvjn",
            "name": "CSGOFAST",
            "code": "23RVJN",
            "free": "2.5$"
        },
        {
            "link": "https://www.holyboost.com/get-free/MYASKOTYAS",
            "name": "HOLY BOOST",
            "code": "MYASKOTYAS",
            "free": "0.5$"
        },
        {
            "link": "https://www.csgoexclusive.com",
            "name": "CSGOEXCLUSIVE",
            "code": "MYASKOTYAS",
            "free": "0.5$"
        },
        {
            "link": "https://csgo-case.com/",
            "name": "CSGOCASE",
            "code": "MYASKOTYAS",
            "free": "0.15$"
        },
        {
            "link": "https://www.greenhunt.gg/promo-code/1190123",
            "name": "CSGOCASE",
            "code": "1190123",
            "free": "0.5$"
        },
        {
            "link": "http://csgobounty.com/#/r/myaskotyas",
            "name": "CSGO BOUNTY",
            "code": "myaskotyas",
            "free": "0.5$"
        },
        {
            "link": "http://csgoroll.com/promo/76561198087537523",
            "name": "CSGO ROLL",
            "code": "76561198087537523",
            "free": "0.5$"
        },
        {
            "link": "https://csgoc4.com/r/myaskotyas",
            "name": "DRAKE WING",
            "code": "myaskotyas",
            "free": "1$"
        },
        {
            "link": "https://csgoatse.com",
            "name": "CSGO500",
            "code": "myaskotyas",
            "free": "1$"
        },
        {
            "link": "https://csgo500.com/",
            "name": "CSGOatse",
            "code": "myaskotyas",
            "free": "1$"
        },
        {
            "link": "https://csgomassive.com",
            "name": "CSGO MASSIVE",
            "code": "JKA81W",
            "free": "0.5$"
        }

    ];
    $(function () {
        for (i = 0; i < items.length; i++) {
            var myCol = $('<div class="col-sm-3 col-md-3"></div>');
            var myPanel = '<div class="card">' +
                '<div class="card-block">' +
                '<h4 class="card-title">';
            myPanel += '<a class="btn btn-warning mt-5" href="';
            myPanel += items[i].link + '">' + items[i].name + '</a>' +
                '</h4>' +
                '<div class="card-body text-dark">';
            myPanel += 'CODE:' + items[i].code +
                '<p>FREE:' + items[i].free + '</p>' +
                '</div>' +
                '</div>';
            myCol.html(myPanel);
            myCol.appendTo('#contentPanel');
        }
        return false;
    });

});