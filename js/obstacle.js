class Obstacle {
    constructor(x, y, width, height){
        this.x= x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawObstacle() {
        AudioContext.fillstyle = 'orange';
        AudioContext.fillRect(this.x,this.y,this.width,this.height);
    }
}