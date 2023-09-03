class ComplexCalculator {
  private result: number;

  constructor() {
    this.result = 0;
  }

  add(num: number): void {
    this.result += num;
  }

  subtract(num: number): void {
    this.result -= num;
  }

  multiply(num: number): void {
    this.result *= num;
  }

  divide(num: number): void {
    if (num === 0) {
      throw new Error("Division by zero");
    }
    this.result /= num;
  }

  getResult(): number {
    return this.result;
  }
}

export default ComplexCalculator;
