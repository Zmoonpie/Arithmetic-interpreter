let token = [];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
let tokens = []

const isNumber = (char) => {
  if (numbers.includes(char)) {
    token.push(char);
    return isNumber;
  } else {
    emmitToken("Number", token.join(""));
    token = [];
    return start(char);
  }
};

function emmitToken(type, value) {
  tokens.push({ type, value });
}

const start = (char) => {
  if (numbers.includes(char)) {
    token.push(char);
    return isNumber;
  }
  if (operators.includes(char)) {
    emmitToken(char, char);
    return start;
  }
  if (char === " ") return start;
  if (char === "/r" || char === "\n") return start;
};

const input = "1024 + 2 * 256";
let state = start;
for (let c of input.split("")) {
  state = state(c);
}

state(Symbol("EOF"));
 
function AdditiveExpression() {}
function MultiplicativeExpression() {}
