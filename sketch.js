let braet = [ 
['','',''],
['','',''],
['','',''],
];

let spiller = ['X', 'O'];

let nuvaerendeSpiller;
function setup() {
    createCanvas(400, 400);
    nuvaerendeSpiller = random(spiller); 
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
    }

