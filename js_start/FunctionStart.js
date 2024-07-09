// 함수 선언문
function logText() {
    console.log('hi');
}

logText();

// 함수 선언문 with parameter
function logTextWithParameter(message) {
    console.log(message);
}

logTextWithParameter("hello");

// 함수 선언문 with return
function logTextWithReturn(message) {
    return message;
}

let a = logTextWithReturn('hello world');
console.log(a);

// 함수 표현식
let expressionFun = function () {
    console.log("hi");
};

expressionFun();

// 함수 표현식 with parameter
let expressionFunWithParameter = function (message) {
    console.log(message);
}

expressionFunWithParameter("hello");

// 함수 표현식 with return
let expressionFunWithReturn = function (message) {
    return message;
};

let b = expressionFunWithReturn("hello world");
console.log(b);