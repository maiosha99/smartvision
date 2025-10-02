class Gradient {
  constructor() {
    this.el = null;
    this.ctx = null;
    this.gradientColors = [];
    this.step = 0;
    this.gradientSpeed = 0.002;
  }

  setCanvas(el) {
    this.el = el;
    this.ctx = el.getContext('2d');
    this.el.width = window.innerWidth;
    this.el.height = window.innerHeight;
  }

  setColors() {
    const style = getComputedStyle(this.el);
    this.gradientColors = [
      style.getPropertyValue('--gradient-color-1').trim(),
      style.getPropertyValue('--gradient-color-2').trim(),
      style.getPropertyValue('--gradient-color-3').trim(),
      style.getPropertyValue('--gradient-color-4').trim(),
    ].map(this.hexToRgb);
  }

  hexToRgb(hex) {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return match
      ? {
          r: parseInt(match[1], 16),
          g: parseInt(match[2], 16),
          b: parseInt(match[3], 16),
        }
      : null;
  }

  drawGradient() {
    if (!this.ctx || this.gradientColors.length < 4) return;

    const c0 = this.gradientColors[0];
    const c1 = this.gradientColors[1];
    const c2 = this.gradientColors[2];
    const c3 = this.gradientColors[3];

    const width = this.el.width;
    const height = this.el.height;

    const gradient = this.ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, rgb(${c0.r}, ${c0.g}, ${c0.b}));
    gradient.addColorStop(0.33, rgb(${c1.r}, ${c1.g}, ${c1.b}));
    gradient.addColorStop(0.66, rgb(${c2.r}, ${c2.g}, ${c2.b}));
    gradient.addColorStop(1, rgb(${c3.r}, ${c3.g}, ${c3.b}));

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, width, height);
  }

  updateColors() {
    this.gradientColors.push(this.gradientColors.shift()); // rotate
  }

  animateGradient() {
    this.drawGradient();
    this.step += this.gradientSpeed;
    if (this.step >= 1) {
      this.step = 0;
      this.updateColors();
    }
    requestAnimationFrame(this.animateGradient.bind(this));
  }

  initGradient(selector) {
    const canvas = document.querySelector(selector);
    if (!canvas) return;
    this.setCanvas(canvas);
    this.setColors();
    this.animateGradient();
    window.addEventListener('resize', () => {
      this.setCanvas(canvas);
      this.setColors();
    });
  }
}

export { Gradient };