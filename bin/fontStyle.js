
let data = require('../data/color.json');
const tag = "\x1B";
const end = "\x1B[0m";

function color() {
  return new style();
}
function style() {
  this.colorEle = [];

  this.add = function (color) {
    if (typeof color === 'string') {
      this.colorEle.push(getColorItem(color));
    } else {
      color.forEach(e => {
        this.colorEle.push(getColorItem(e));
      });
    }


    return this;
  }
  this.echo = function (text) {
    let fontStyle = this.colorEle.reduce((total, current) => {
      return total + current;
    })

    return fontStyle + text + end;
  }
}

function getColorItem(colorVal) {
  if (data.color[colorVal]) {
    return `${tag}${data.color[colorVal]}`;
  } else if (/^\d+$/.test(colorVal)) {
    return `${tag}[38;5;${colorVal}m`
  } else { return colorVal }
}
module.exports = {
  color
}