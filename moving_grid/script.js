class Cube {
    constructor() {
        ctx = document.getElementById('canvas').getContext('2d');
        this.cubeWidth = 5;
        this.cubeHeight = 5;
        this.xPos = Math.random() * ((400 - this.cubeWidth) - 0 + 1) + 0;
        this.yPos = Math.random() * ((400 - this.cubeHeight) - 0 + 1) + 0;
        this.ctx = ctx;
        this.right = true;
        this.down = true;
        this.speedDivider = {
            x: (Math.random() * (0.2 - 0.03 + 1) + 0.03)/10,
            y: (Math.random() * (0.2 - 0.03 + 1) + 0.03)/20,
        }
    }
    // directions
    turnBack = () => {
        if (this.xPos + this.cubeWidth > canvas.width || this.xPos < 0) {
            this.right = !this.right;
        }
        if (this.yPos + this.cubeHeight > canvas.height || this.yPos < 0) {
            this.down = !this.down;
        }
    }
    draw = () => {
        ctx.strokeStyle = `rgba(191, 191, 191, 0.9`; // lines color
        if (this.right) {
            this.xPos += 10 * this.speedDivider.x;
        } else if (!this.right) {
            this.xPos -= 10 * this.speedDivider.x;
        }
        if (this.down) {
            this.yPos += 10 * this.speedDivider.y;
        } else if (!this.down) {
            this.yPos -= 10 * this.speedDivider.y;
        }
        this.turnBack();
        ctx.fillStyle = '#545454'; // cube color
        ctx.fillRect(this.xPos, this.yPos, this.cubeWidth, this.cubeHeight);
    }
    checkOthers = (cubes) =>{
        const cubesWithoutMe = [...cubes]
        const thisElement = cubesWithoutMe.findIndex(el => el == this)
        cubesWithoutMe.splice(thisElement, 1)

        const radius = 100;
        
        cubesWithoutMe.forEach(el =>{
            if ((Math.abs(el.xPos - this.xPos)) < radius && (Math.abs(el.yPos - this.yPos)) < radius){
                ctx.beginPath();
                ctx.moveTo(this.xPos + this.cubeWidth/2, this.yPos + this.cubeHeight/2);
                ctx.lineTo(el.xPos + el.cubeWidth/2, el.yPos + el.cubeHeight/2);
                ctx.stroke();
            }
        })
    }
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function createCubes () {
    var cubes = [];
    var howManyCubes = 40;
    for(let i=0; i < howManyCubes; i++){
        var x = new Cube();
        cubes.push(x)
    }
    drawGame(cubes)
    
}

// var x = new Cube();
// var y = new Cube();
function drawGame(cubes){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cubes.forEach(el => {
        el.draw();
        el.checkOthers(cubes);
    })
    setTimeout(drawGame, 1, cubes)    
}
    

window.onload=createCubes


