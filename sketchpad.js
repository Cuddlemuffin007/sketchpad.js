createGrid = function () {
    var width = prompt("Width?");
    var height = prompt("Height?");
    addNewRow = function () {
        for (var i = 0; i < width; i++) {
            $('<div />').appendTo('.container');
        }
        $('<p />').appendTo('.container');
    };
    do {
        height -= 1;
        addNewRow();
    }
    while (height > 0);
    var activeClass = '';
    $('input').on('click', function () {
        if ($('input[name=color]:checked' !== null)) {
            activeClass = $('input[name=color]:checked').val();
        }
        $('.container').on('mouseenter', 'div', function () {
            $(this).removeClass().addClass(activeClass);
        });
    });
    $('.clear').on('click', function () {
        $('div').removeClass("black blue red yellow");
    });


};
$(document).ready(createGrid);

$('.new').on('click', function () {
    $('.container > div, p').detach();
    createGrid();
});