console.log("Loaded")

let stack = [];
let display = 0;
let submitted = true;
document.getElementById("screen").textContent = display;

let buttonFunction = () => {console.log("Clicked")}

let refresh = (x) => {
    display = x;
    if(!submitted) {
        x += "_";
    }
    document.getElementById("screen").textContent = x;
}

let typeNumber = (x) => {
    if(submitted) {
        display = 0;
    }
    submitted = false;
    refresh(display * 10 + x);
}

let enter = () => {
    stack.push(display);
    submitted = true;
    refresh(display);
}

let flip = () => {
    if(!submitted) {
        stack.push(display);
        submitted = true;
    }
    if(stack.length >= 2) {
        let x = stack.pop();
        let y = stack.pop();
    
        stack.push(x);
        stack.push(y);
    
        refresh(y);
    }
}

let add = () => {
    if(!submitted) {
        stack.push(display);
        submitted = true;
    }
    if(stack.length >= 2) {
        let x = stack.pop();
        let y = stack.pop();

        stack.push(x + y);

        refresh(x + y);
    }
}

let subtract = () => {
    if(!submitted) {
        stack.push(display);
        submitted = true;
    }
    if(stack.length >= 2) {
        let x = stack.pop();
        let y = stack.pop();

        stack.push(y - x);

        refresh(y - x);
    }
}

let multiply = () => {
    if(!submitted) {
        stack.push(display);
        submitted = true;
    }
    if(stack.length >= 2) {
        let x = stack.pop();
        let y = stack.pop();

        stack.push(x * y);

        refresh(x * y);
    }
}

let divide = () => {
    if(!submitted) {
        stack.push(display);
        submitted = true;
    }
    if(stack.length >= 2) {
        let x = stack.pop();
        let y = stack.pop();

        stack.push(y/x);

        refresh(y/x);
    }
}