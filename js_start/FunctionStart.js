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

// 일급 함수
function firstClassFun(message) {
    message();
}

firstClassFun(function () {
    console.log("일급 함수");
});

// 화살표 함수
let arrowFun = () => {
    console.log("화살표 함수");
}

arrowFun();

// 화살표 함수 축약
let c = () => 10 + 20;
console.log(c());

let d = () => 'd';
console.log(d());

let e = num => {
    return num;
}
console.log(e(2));

let f = num => num;
console.log(f(3));