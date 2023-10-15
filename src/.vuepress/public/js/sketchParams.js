class SketchParams {
    constructor() {
        this.CANVAS_HEIGHT = 200;
        this.NOISE_STEP = 0.01;
        this.LINE_START = 512;
        this.LINE_MAX = 48;
        this.LINE_WEIGHT = 0.05;
        this.LINE_COLOR_R = 255;
        this.LINE_COLOR_G = 0;
        this.LINE_COLOR_B = 255;
        this.LINE_MAG_BASE = 6.0;
        this.LINE_MAG_NOISE = 2.0;
        this.FONT_R = 44;
        this.FONT_G = 62;
        this.FONT_B = 80;
        this.FONT_SIZE = 36;
        this.FONT_NAME = 'Syne Mono';
        this.FONT_FILE = 'SyneMono-Regular.ttf';
        this.HEADLINE = "Hey, I'm Grant.";
        this.HEADLINE_X = 64;
        this.HEADLINE_Y = 64;
        this.HEADLINE_FACTOR = 0.8;

        this.font = null;
        this.points = [];
        this.incr = 0;
    }
}

window.params = new SketchParams();
