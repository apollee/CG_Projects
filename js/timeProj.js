class timeProj {
    constructor() {
        this.currentTime = new Date();
        this.lastTime = this.currentTime;
    }

    updateTime() {
        this.lastTime = this.currentTime;
        this.currentTime = new Date();
    }

    getTimeDiff() {
        this.currentTime.getTime() - this.lastTime.getTime();
    }
}