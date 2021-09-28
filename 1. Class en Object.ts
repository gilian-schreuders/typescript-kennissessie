/**
 * Class
 */
class Point {
  x: number = 0;
  y: number = 0;

  getString() {
    return `${this.x}, ${this.y}`;
  }

  getNum = () => 1;
}

const point = new Point();
point.x = 0;
point.y = 0;

/**
 * Object / Anonymous Type
 */
const point2 = {
  x: 0,
  y: 0,

  // Geen `this.` aanwezig
  getString() {
    return "string";
  },

  getNum: () => 1,
};

/**
 * Results:
 */
console.log("pt", point);
console.log("pt2", point2);

// [LOG]: "pt",  Point: {
//   "x": 0,
//   "y": 0
// }
// [LOG]: "pt2",  {
//   "x": 0,
//   "y": 0
// }
