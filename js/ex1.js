// Square Class
class square {
  constructor(side) {
    this.side = side;
    this.perimeter = side * 4;
    this.area = side ** 2;
    this.diagonal = Math.sqrt(2 * (side ** 2));
  }
  describe() {
    return `Square with side ${this.side} has a perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal.toFixed(3)}`;
  }
}
const sq1 = new square(2);
const sq2 = new square(3);
const sq3 = new square(4);
console.log(sq1.describe());
console.log(sq2.describe());
console.log(sq3.describe());