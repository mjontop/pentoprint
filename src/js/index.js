var name = '/src/img/book'
i = 1

function slidebanner() {
    i = i + 1
    if (i > 4) {
        i = 1
    }
    var newname = name + i + '.png'
    $("#banner").attr("src", newname)
}