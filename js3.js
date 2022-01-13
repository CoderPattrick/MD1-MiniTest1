let arr = [41,52,12,2,1,3,4,5,-7,8,103,6,1];
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
let sum=0;
let data = [];
for (let i = 0; i < arr.length; i++) {
    if(checksnt(arr[i])){
        sum += arr[i];
        data.push(arr[i]);
    }
}

document.getElementById("result").innerHTML = data.join("+") + " = "+sum;

