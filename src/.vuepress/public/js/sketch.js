const sketch = p => {

    const CANVAS_HEIGHT = 200;
    const NOISE_STEP = 0.01;
    const LINE_START = 512;
    const LINE_MAX = 48;
    const LINE_WEIGHT = 0.05;
    const LINE_COLOR_R = 255;
    const LINE_COLOR_G = 0;
    const LINE_COLOR_B = 255;
    const LINE_MAG_BASE = 6.0;
    const LINE_MAG_NOISE = 2.0;
    const FONT_R = 44;
    const FONT_G = 62;
    const FONT_B = 80;
    const FONT_SIZE = 36;
    const FONT_NAME = 'Syne Mono';
    const FONT_FILE = 'SyneMono-Regular.ttf';
    const HEADLINE = "Hey, I'm Grant.";
    const HEADLINE_X = 64;
    const HEADLINE_Y = 64;
    const HEADLINE_FACTOR = 0.8;

    let f = null;
    let points = [];
    let incr = 0;

    p.preload = function() {
        f = p.loadFont(`/fonts/${FONT_FILE}`);
    }

    p.setup = function() {
        const sketch = p.createCanvas(p.windowWidth, CANVAS_HEIGHT);
        sketch.parent('sketch');
        p.strokeWeight(LINE_WEIGHT);
        p.textSize(FONT_SIZE);
        p.textFont(FONT_NAME);
        points = f.textToPoints(HEADLINE, HEADLINE_X, HEADLINE_Y, FONT_SIZE, {
            sampleFactor: HEADLINE_FACTOR
        });
    }

    p.draw = function() {
        p.clear();
        p.background(255);
        p.stroke(LINE_COLOR_R, LINE_COLOR_G, LINE_COLOR_B);
        let n = p.noise(incr);
        incr += NOISE_STEP;

        for (const pnt of points) {
            const v = p.createVector(p.mouseX, p.mouseY);
            const o = p.createVector(pnt.x, pnt.y);

            let diff = v.sub(o);
            const mag = diff.mag();

            if (diff.mag() > LINE_START) {
                diff.setMag(0);
            } else {
                diff.setMag(p.log(LINE_START - diff.mag()) * (LINE_MAG_BASE + LINE_MAG_NOISE * n));
            }

            diff.limit(p.min(LINE_MAX, mag));
            diff = diff.add(o);
            p.line(pnt.x, pnt.y, diff.x, diff.y);
        }
        p.stroke(FONT_R, FONT_G, FONT_B);
        p.fill(FONT_R, FONT_G, FONT_B);
        p.text(HEADLINE, HEADLINE_X, HEADLINE_Y);
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, CANVAS_HEIGHT)
    }
};
