export class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this._seconds = (seconds + minutes*60 + hours*3600);

    }
    get seconds() {
        return parseInt(this._seconds % 60);
    }
    get minutes() {
        return parseInt((this._seconds % 3600)/60);
    }
    get hours() {
        return parseInt(this._seconds / 3600);
    }
    toString() {
        return `${(this.hours < 10 ? '0' + this.hours : '' + this.hours)}:${(this.minutes < 10 ? '0' + this.minutes : '' + this.minutes)}:${(this.seconds < 10 ? '0' + this.seconds : '' + this.seconds)}`;
    }
}

