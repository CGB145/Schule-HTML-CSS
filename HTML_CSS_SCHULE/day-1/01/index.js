var ball = document.getElementById('ball');


function move(elem){

    r = Math.random() * 256  
    g = Math.random() * 256
    b = Math.random() * 256

    let ball = document.getElementById('ball');
    ball.style.marginLeft = '100%';
    ball.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    ball.style.transition = 'all 1s ease-in-out';
    
    r = Math.random() * 256  
    g = Math.random() * 256
    b = Math.random() * 256
    

    setTimeout(function(){
    ball.style.marginLeft = '0px';
    ball.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }, 1000);

}

var x = 0;
var y = 0;
document.addEventListener('keydown', function(event) {
    var ball = document.getElementById('ball');
    if (event.keyCode === 38) { 
        x = x - 100;


    }
    if (event.keyCode === 40) { 
        x = x + 100;

    }
    if (event.keyCode === 39) { 
        y = y + 100;

    }
    if (event.keyCode === 37) { 
        y = y - 100;

    }
    ball.style.transform = `translateY(+${x}% ) translateX(+${y}%)`;
    ball.style.transition = 'all 1s ease-in-out';

});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38 || event.keyCode === 40) { // 38 is the keycode for the up arrow key, 40 is the keycode for the down arrow key
      event.preventDefault(); // prevent the default behavior of scrolling with arrow keys
    }
});




// left = 37
// up = 38
// right = 39
// down = 40


