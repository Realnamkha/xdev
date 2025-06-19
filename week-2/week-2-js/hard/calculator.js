class Calculator {
  constructor() {
    this.result = 0;
  }

  add(x) {
    this.result += x;
  }

  subtract(x) {
    this.result -= x;
  }

  multiply(x) {
    this.result *= x;
  }

  divide(x) {
    if (x === 0) {
      throw new Error("Invalid expression: Division by zero");
    }
    this.result /= x;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  calculate(inputExpression) {
    const temp = inputExpression;
    const cleanedExpression = temp.replace(/\s+/g, "");
    const isValidExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression);

    if (!isValidExpression) {
      throw new Error("Invalid expression.");
    }

    try {
      this.result = eval(inputExpression);
    } catch (error) {
      throw new Error("Invalid expression.");
    }

    if (this.result === Infinity) {
      throw new Error("Cannot divide a x by 0.");
    }

    return this.result;
  }
}

module.exports = Calculator;
