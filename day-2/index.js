// create grid
var rightPressed = false
var leftPressed = false
var upPressed = false
var downPressed = false
var score = 0;




document.addEventListener("DOMContentLoaded", function (event) {

    // for (var i = 0; i < 10; i++) {
    //     if (i == 10) {
    //         i = 0;
    //     }
    //     var container = document.getElementsByClassName("container")[0];
    //     var newDiv = document.createElement("div");
    //     newDiv.id = "block0" + i;
    //     container.appendChild(newDiv);
    //     var blockId = `block0${i}`;
    //     var block = document.getElementById(blockId);
    //     block.style.width = "100%";
    //     block.style.height = "100%";
    //     block.style.backgroundColor = "green";
    //     block.style.gridColumn = i;

    //     if (i == 9) {

    //         for (var j = 0; j < 10; j++) {
    //             if (j == 10) {
    //                 j = 0;
    //             }

    //             var newDiv = document.createElement("div");
    //             newDiv.id = "block1" + j;
    //             container.appendChild(newDiv);
    //             var blockId = `block1${j}`
    //             var block = document.getElementById(blockId);
    //             block.style.width = "100%";
    //             block.style.height = "100%";
    //             block.style.backgroundColor = "green";
    //             block.style.gridColumn = j;
    //             block.style.row = 2;



    //             if (j == 9) {

    //                 for (var k = 0; k < 10; k++) {
    //                     if (k == 10) {
    //                         k = 0;
    //                     }
    //                     var newDiv = document.createElement("div");
    //                     newDiv.id = "block2" + k;
    //                     container.appendChild(newDiv);
    //                     var blockId = `block2${k}`
    //                     var block = document.getElementById(blockId);
    //                     block.style.width = "100%";
    //                     block.style.height = "100%";
    //                     block.style.backgroundColor = "green";
    //                     block.style.gridColumn = k;
    //                     block.style.row = 3;


    //                     if (k == 9) {

    //                         for (var h = 0; h < 10; h++) {
    //                             if (h == 10) {
    //                                 h = 0;
    //                             }
    //                             var newDiv = document.createElement("div");
    //                             newDiv.id = "block3" + h;
    //                             container.appendChild(newDiv);
    //                             var blockId = `block3${h}`
    //                             var block = document.getElementById(blockId);
    //                             block.style.width = "100%";
    //                             block.style.height = "100%";
    //                             block.style.backgroundColor = "green";
    //                             block.style.gridColumn = h;
    //                             block.style.row = 4;


    //                             if (h == 9) {

    //                                 for (var p = 0; p < 11; p++) {
    //                                     if (p == 10) {
    //                                         p = 0;
    //                                     }
    //                                     var newDiv = document.createElement("div");
    //                                     newDiv.id = "block4" + p;
    //                                     container.appendChild(newDiv);
    //                                     var blockId = `block4${p}`
    //                                     var block = document.getElementById(blockId);
    //                                     block.style.width = "100%";
    //                                     block.style.height = "100%";
    //                                     block.style.backgroundColor = "green";
    //                                     block.style.gridColumn = p;
    //                                     block.style.row = 5;

    //                                     if (p == 9) {

    //                                         for (var u = 0; u < 10; u++) {
    //                                             if (u == 10) {
    //                                                 u = 0;
    //                                             }
    //                                             var newDiv = document.createElement("div");
    //                                             newDiv.id = "block5" + u;
    //                                             container.appendChild(newDiv);
    //                                             var blockId = `block5${u}`
    //                                             var block = document.getElementById(blockId);
    //                                             block.style.width = "100%";
    //                                             block.style.height = "100%";
    //                                             block.style.backgroundColor = "green";
    //                                             block.style.gridColumn = u;
    //                                             block.style.row = 5;

    //                                             if (u == 9) {

    //                                                 for (var g = 0; g < 10; g++) {
    //                                                     if (g == 10) {
    //                                                         g = 0;
    //                                                     }
    //                                                     var newDiv = document.createElement("div");
    //                                                     newDiv.id = "block6" + g;
    //                                                     container.appendChild(newDiv);
    //                                                     var blockId = `block6${g}`
    //                                                     var block = document.getElementById(blockId);
    //                                                     block.style.width = "100%";
    //                                                     block.style.height = "100%";
    //                                                     block.style.backgroundColor = "green";
    //                                                     block.style.gridColumn = g;
    //                                                     block.style.row = 6;

    //                                                     if (g == 9) {

    //                                                         for (var f = 0; f < 10; f++) {
    //                                                             if (f == 10) {
    //                                                                 f = 0;
    //                                                             }
    //                                                             var newDiv = document.createElement("div");
    //                                                             newDiv.id = "block7" + f;
    //                                                             container.appendChild(newDiv);
    //                                                             var blockId = `block7${f}`
    //                                                             var block = document.getElementById(blockId);
    //                                                             block.style.width = "100%";
    //                                                             block.style.height = "100%";
    //                                                             block.style.backgroundColor = "green";
    //                                                             block.style.gridColumn = f;
    //                                                             block.style.row = 7;

    //                                                             if (f == 9) {

    //                                                                 for (var d = 0; d < 10; d++) {
    //                                                                     if (d == 10) {
    //                                                                         d = 0;
    //                                                                     }
    //                                                                     var newDiv = document.createElement("div");
    //                                                                     newDiv.id = "block8" + d;
    //                                                                     container.appendChild(newDiv);
    //                                                                     var blockId = `block8${d}`
    //                                                                     var block = document.getElementById(blockId);
    //                                                                     block.style.width = "100%";
    //                                                                     block.style.height = "100%";
    //                                                                     block.style.backgroundColor = "green";
    //                                                                     block.style.gridColumn = d;
    //                                                                     block.style.row = 8;

    //                                                                     if (d == 9) {

    //                                                                         for (var s = 0; s < 10; s++) {
    //                                                                             if (s == 10) {
    //                                                                                 s = 0;
    //                                                                             }
    //                                                                             var newDiv = document.createElement("div");
    //                                                                             newDiv.id = "block9" + s;
    //                                                                             container.appendChild(newDiv);
    //                                                                             var blockId = `block9${s}`
    //                                                                             var block = document.getElementById(blockId);
    //                                                                             block.style.width = "100%";
    //                                                                             block.style.height = "100%";
    //                                                                             block.style.backgroundColor = "green";
    //                                                                             block.style.gridColumn = s;
    //                                                                             block.style.row = 9;
    //                                                                             if (s == 0) {
    //                                                                                 s = 10;
    //                                                                             }

    //                                                                             if (s == 9) {

    //                                                                                 for (var a = 0; a < 10; a++) {
    //                                                                                     if (a == 10) {
    //                                                                                         a = 0;
    //                                                                                     }

    //                                                                                     var newDiv = document.createElement("div");
    //                                                                                     newDiv.id = "block10" + a;
    //                                                                                     container.appendChild(newDiv);
    //                                                                                     var blockId = `block10${a}`
    //                                                                                     var block = document.getElementById(blockId);
    //                                                                                     block.style.width = "100%";
    //                                                                                     block.style.height = "100%";
    //                                                                                     block.style.backgroundColor = "green";
    //                                                                                     block.style.gridColumn = a;
    //                                                                                     block.style.row = 10;
    //                                                                                     if (a == 0) {
    //                                                                                         a = 10;
    //                                                                                     }

    //                                                                                 }



    //                                                                             }


    //                                                                         }



    //                                                                     }


    //                                                                 }



    //                                                             }


    //                                                         }



    //                                                     }

    //                                                 }



    //                                             }


    //                                         }



    //                                     }
    //                                 }



    //                             }

    //                         }



    //                     }

    //                 }

    //             }
    //         }


    //     }


    // }

    // for (let firstRow = 1; firstRow <11; firstRow++){

    //     let block = document.getElementById(`block0${firstRow}`);
    //     block.style.backgroundColor = "black";
    //     block = document.getElementById(`block9${firstRow}`);
    //     block.style.backgroundColor = "black";
    //     block = document.getElementById(`block${firstRow}1`);
    //     block.style.backgroundColor = "black";
    //     block = document.getElementById(`block${firstRow}10`);
    //     block.style.backgroundColor = "black";

    // }
    // grid end

    var snakeHead = document.getElementById("block55");
    var currentColumn = 5;
    var currenRow = 5;
    snakeHead.style.backgroundColor = "darkgreen";
    var isPoint = false
    var col = 0;
    var row = 0;
    var point  = document.getElementById(`block${row}${col}`);
    var snakeBody = document.getElementById("block54");
    var snakeBody2 = document.getElementById("block53");
    var snakeBody3 = document.getElementById("block52");
    var bodyCurrentColumn = 5;
    var bodyCurrentRow = 5;
    var once = true;
    // keydown event arrow keys 
    // left = 37
    // up = 38
    // right = 39
    // down = 40
    
    const ArrowDown = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        code: 'ArrowDown',
        which: 40,
        keyCode: 40,
        bubbles: true,
    });

    while (0) {
        const interval = setInterval(function () {
            document.dispatchEvent(ArrowDown);
        }, 5000);
    }
    
    document.addEventListener('keydown', function(event) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        col = getRandomInt(2,9);
        row = getRandomInt(2,9);

        if(isPoint == false){
            point = document.getElementById(`block${row}${col}`);
            point.style.backgroundColor = "yellow";
            isPoint = true;
        }
        if (point.style.backgroundColor == "darkgreen") {
            score = score+1
            var scoreBoard = document.getElementsByTagName("h1")[0];
            scoreBoard.innerText = score;
            isPoint = false;
        }

        

        if (event.keyCode === 39) { 
            if(once == true){

                bodyCurrentColumn = currentColumn -1;
                bodyCurrentRow = currenRow;
                once=false;
            }
            // if (bodyCurrentColumn == 0) {
            //     bodyCurrentColumn = 10;
            // }
            if (currentColumn == 9 ) {
                currentColumn = -1;
            }
            if (bodyCurrentColumn == 9) {
                bodyCurrentColumn = -1;
            }
            bodyCurrentColumn = bodyCurrentColumn + 1;


            rightPressed = true
            leftPressed = false
            upPressed = false
            downPressed = false
            
            currentColumn = currentColumn + 1;
            snakeHead.style.backgroundColor = "green";
            snakeHead = document.getElementById(`block${currenRow}${currentColumn}`);
            snakeHead.style.backgroundColor = "darkgreen";
            snakeBody.style.backgroundColor = "green";
            snakeBody = document.getElementById(`block${bodyCurrentRow}${bodyCurrentColumn}`);
            snakeBody.style.backgroundColor = "darkgreen";
            

    
    
        }
        if (event.keyCode === 37) {

            if (currentColumn == 0) {
                currentColumn = 10;
            }
            currentColumn = currentColumn - 1;
            leftPressed = true
            rightPressed = false
            upPressed = false
            downPressed = false

            snakeHead.style.backgroundColor = "green";
            snakeHead = document.getElementById(`block${currenRow}${currentColumn}`);
            snakeHead.style.backgroundColor = "darkgreen";


    
    
        }
        if (event.keyCode === 38) {

            if(currenRow == 0){
                currenRow = 10;
            }

            upPressed = true
            downPressed = false
            leftPressed = false
            rightPressed = false

            currenRow = currenRow - 1;
            snakeHead.style.backgroundColor = "green";
            snakeHead = document.getElementById(`block${currenRow}${currentColumn}`);
            snakeHead.style.backgroundColor = "darkgreen";

            
    
    
        }
        if (event.keyCode === 40) {

            if(currenRow == 9){
                currenRow = -1;
            }

            downPressed = true
            upPressed = false
            leftPressed = false
            rightPressed = false

            currenRow = currenRow + 1;
            snakeHead.style.backgroundColor = "green";
            snakeHead = document.getElementById(`block${currenRow}${currentColumn}`);
            snakeHead.style.backgroundColor = "darkgreen";

            
            
    
        }
        
    });



});


setInterval(function() {
    console.log("Hello World!");
    if (rightPressed == true) {
    var event = new KeyboardEvent('keydown', {'keyCode': 39});
    document.dispatchEvent(event);
    }
    if (leftPressed == true) {
    var event = new KeyboardEvent('keydown', {'keyCode': 37});
    document.dispatchEvent(event);
    }
    if (upPressed == true) {
    var event = new KeyboardEvent('keydown', {'keyCode': 38});
    document.dispatchEvent(event);
    }
    if (downPressed == true) {
    var event = new KeyboardEvent('keydown', {'keyCode': 40});
    document.dispatchEvent(event);
    }
  }, 100);

