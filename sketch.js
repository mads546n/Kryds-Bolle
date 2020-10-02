let braet = [ 
['','',''],
['','',''],
['','',''],
];

let spiller = ['X', 'O'];
let nuvaerendeSpiller;
let available = []; 

function setup() {
    createCanvas(400, 400);
    nuvaerendeSpiller = floor(random(spiller.length)); 
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            available.push([i, j]); 
        }
    }
}

function checkVinder() {
    let vinder = null; 

    // horisontalt tjek
    for (let i = 0; i < 3; i++) {
        if (braet[i][0] == braet[i][1] == braet[i][2]) {
            vinder = braet[i][0];
        }
    }

    // vertikalt tjek
    for (let i = 0; i < 3; i++) {
        if (braet[0][i] == braet[0][i] == braet[0][i]) {
            vinder = braet[0][i];
        }
    }
   
    if (available.length == 0) {
        console.log("uafgjort");
    }
}

function naesteTur() {
    let index = floor(random(available.length));
    let felt = available.splice(index, 1)[0];
    let i = felt[0];
    let j = felt[1]; 
    braet[i][j] = spiller[nuvaerendeSpiller];
    nuvaerendeSpiller =  (nuvaerendeSpiller + 1) % spiller.length;
}

//function mousePressed() {
//    naesteTur();
//}

function mousePressed() {
    naesteTur(); 
}
function draw() {
    background(255);
    let w = width / 3;
    let h = height / 3; 

    line(w, 0, w, height); 
    line(w*2, 0, w*2, height);
    line(0, h, width, h); 
    line(0, h*2, width, h*2);

    for(let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let x = w * i + w/2;
            let y = h * j + h/2; 
            let felt = braet[i][j];
            textSize(32);
            strokeWeight(4); 
            if (felt == spiller[1]) {
                noFill();
                //ellipseMode(CORNER); 
                ellipse(x,y,w/2);
            } else if (felt == spiller[0]) {
                let xr = w/4; 
                line(x-xr, y-xr, x + xr, y + xr);
                line(x + xr, y-xr, x-xr, y + xr);
            }
            }
            //text(felt, x, y)
        }
        naesteTur();
        checkVinder();
    }
