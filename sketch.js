let braet = [ 
['','',''],
['','',''],
['','',''],
];

let w; 
let h; 

let ai = 'X'; 
let human = 'O';
let nuvaerendeSpiller = human; 

function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3; 
}

function equal3(a, b, c) {
    return (a==b && b==c && a != ""); 
}

function checkVinder() {
    let vinder = null; 

    // horisontalt tjek
    for (let i = 0; i < 3; i++) {
        if (equal3(braet[i][0], braet[i][1], braet[i][2])) {
            vinder = braet[i][0];
        }
    }

    // vertikalt tjek
    for (let i = 0; i < 3; i++) {
        if (equal3(braet[0][i], braet[1][i], braet[2][i])) {
            vinder = braet[0][i];
        }
    }

    // diagonalt tjek
    if (equal3(braet[0][0], braet[1][1], braet[2][2])) {
        vinder = braet[0][0]; 
    }

    // 2. diagonalt tjek
    if (equal3(braet[2][0], braet[1][1], braet[0][2])) {
        vinder = braet[2][0]; 
    }

    let ledigeFelter = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (braet[i][j] ==''){
                ledigeFelter++; 
            }
        }
    }
   
    if (vinder == null && ledigeFelter == 0) {
        return "uafgjort"; 
    } else {
        return vinder; 
    }
}

function mousePressed() {
    if (nuvaerendeSpiller == human) {
        //Menneskelig spiller
        let i = floor(mouseX / w);
        let j = floor(mouseY / h);
        if (braet[i][j] == '') {
            braet[i][j] = human; 
            nuvaerendeSpiller = ai; 

        //AI-spiller
        let available = [];
        for (let k = 0; k < 3; k++) {
            for (let l = 0; l < 3; l++) {
                if (braet[k][l] == ''){
                available.push({ k, l }); 
                }
            }
        }
        let runde = random(available); 
        braet[runde.k][runde.l] = ai; 
        nuvaerendeSpiller = human; 
        } 
    }
}

function draw() {
    background(255);

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
            if (felt == human) {
                noFill();
                //ellipseMode(CORNER); 
                ellipse(x,y,w/2);
            } else if (felt == ai) {
                let xr = w/4; 
                line(x-xr, y-xr, x + xr, y + xr);
                line(x + xr, y-xr, x-xr, y + xr);
            }
            }
        }
        let result = checkVinder();
        if (result != null) {
            noLoop();
            console.log(result);
        } 
    }
