function checksnt(n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i==0){
            check = false;
            break;
        }
    }
    if (n <= 1) {
        check = false;
    }
    return check;
}

let N = 2;
let sum = 0;
let arr =[];
while (N<500){
    if(checksnt(N)){
        arr.push(N);
        sum+=N;
    }
    N++;
}
document.getElementById("result").innerHTML = arr.join("+") + " = " + sum;
