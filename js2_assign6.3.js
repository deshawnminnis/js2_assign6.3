// Script to display sum up to 1000 using for and while loop //

function checkWhile() {
    var i = 0;
    var sum = 0;
    while (i < 500) {
        sum = sum + i;
        console.log(i);
        ++i;
    }
}


function forCheck() {
    var i = 0;
    var sum = 0;
    for (var i = 0; i < 500; i++) {
        console.log();
        sum = sum + i;

    }

}