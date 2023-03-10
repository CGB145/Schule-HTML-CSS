var ball = document.getElementById('ball1');


function move(elem){

    r = Math.random() * 256  
    g = Math.random() * 256
    b = Math.random() * 256

    let ball = document.getElementById('ball1');
    ball.style.marginLeft = '100px';
    ball.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    ball.style.transition = 'all 1s ease-in-out';
    
    r = Math.random() * 256  
    g = Math.random() * 256
    b = Math.random() * 256
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    // document.getElementsByTagName('body')[0].style.transition = 'all 1s ease-in-out';
    setTimeout(function(){
        // document.getElementsByTagName('body')[0].style.backgroundColor = '#fafafa';

        ball.style.marginLeft = '0px';
        ball.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }, 1000);

}

var x = 0;
var y = 0;
document.addEventListener('keydown', function(event) {
    var ball = document.getElementById('ball1');
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
    if(event.keyCode === 32){
        move();
    }
    ball.style.transform = `translateY(+${x}% ) translateX(+${y}%)`;
    ball.style.transition = 'all 1s ease-in-out';
    



}) 

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38 || event.keyCode === 40) { // 38 is the keycode for the up arrow key, 40 is the keycode for the down arrow key
      event.preventDefault(); // prevent the default behavior of scrolling with arrow keys
    }
    if (event.keyCode === 32 || event.keyCode === 40) { // 38 is the keycode for the up arrow key, 40 is the keycode for the down arrow key
        event.preventDefault(); // prevent the default behavior of scrolling with arrow keys
      }
});

// keydown spacebar


// left = 37
// up = 38
// right = 39
// down = 40


