(function() {
    var $imgs = $('#gallery div.overflowDiv');
    var $buttons = $('#buttons');
    var tagged = {};
    $imgs.each(function() {
        var img = this;
        var tags = $(this).data('tags');
        if (tags) {
            tags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
    $('<button/>', {
        text: 'All',
        class: 'active',
        click: function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
            $imgs.show();
        }
    }).appendTo($buttons);
    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName,
            click: function() {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                $imgs
                    .hide()
                    .filter(tagged[tagName])
                    .show();
            }
        }).appendTo($buttons);
    });
}());



let once1 = 0;
let once2 = 0;
let once3 = 0;
let once4 = 0;
let once5 = 0;


let esimInch = window.addEventListener('scroll', function() {
    console.log(window.pageYOffset > 700);
    if (window.pageYOffset > 700 && once1 < 1) {
        window.onscroll = () => {};
        let elemClasslist = document.getElementsByClassName('firstSmallBox')[0].classList;
        elemClasslist.remove('js-loading');
    }
    if (window.pageYOffset > 700 && once1 < 1) {
        window.onscroll = () => {};
        let elemClasslist1 = document.getElementsByClassName('secondSmallBox')[0].classList;
        elemClasslist1.remove('js-loading2');
    }
    if (window.pageYOffset > 1188 && once2 < 1) {
        window.onscroll = () => {};
        let elemClasslist2 = document.getElementsByClassName('card')[0].classList;
        elemClasslist2.remove('js-loading3');
        let elemClasslist3 = document.getElementsByClassName('card')[1].classList;
        elemClasslist3.remove('js-loading3');
        let elemClasslist4 = document.getElementsByClassName('card')[2].classList;
        elemClasslist4.remove('js-loading3');
        let elemClasslist5 = document.getElementsByClassName('card')[3].classList;
        elemClasslist5.remove('js-loading3');
    }
    if (window.pageYOffset > 3800 && once3 < 1) {
        window.onscroll = () => {};
        let elemClasslist6 = document.getElementsByClassName('cont4Box1')[0].classList;
        elemClasslist6.remove('js-loading4');
        let elemClasslist7 = document.getElementsByClassName('cont4Box2')[0].classList;
        elemClasslist7.remove('js-loading4');
    }

    // HELP
    // if (window.pageYOffset > 6200 && once4 < 1) {
    //     window.onscroll = () => {};
    //     let elemClasslist8 = document.getElementsByClassName('box1_imgDiv')[0].classList;
    //     elemClasslist8.remove('js-loading5');
    //     let elemClasslist9 = document.getElementsByClassName('box2_imgDiv')[0].classList;
    //     elemClasslist9.remove('js-loading5');
    // }

    if (window.pageYOffset > 9300 && once5 < 1) {
        window.onscroll = () => {};
        let elemClasslist10 = document.getElementsByClassName('ad')[0].classList;
        elemClasslist10.remove('js-loading6');
        let elemClasslist11 = document.getElementsByClassName('ad')[1].classList;
        elemClasslist11.remove('js-loading6');
        let elemClasslist12 = document.getElementsByClassName('ad')[2].classList;
        elemClasslist12.remove('js-loading6');
        let elemClasslist13 = document.getElementsByClassName('ad')[3].classList;
        elemClasslist13.remove('js-loading6');
    }



    console.log(window.pageYOffset)
})