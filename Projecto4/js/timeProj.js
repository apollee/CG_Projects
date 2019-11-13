class timeProj {
    constructor() {
        this.freezed = false;
        this.currentTime = new Date();
        this.lastTime = this.currentTime;
    }

    updateTime() {
        this.lastTime = this.currentTime;
        this.currentTime = new Date();
    }

    getTimeDiff() {
        if (this.freezed)
            return 0;

        return this.currentTime.getTime() - this.lastTime.getTime();
    }

    freezeUnfreeze() {
        this.freezed = !this.freezed;
    }

    isFreezed() {
        return this.freezed;
    }
}
