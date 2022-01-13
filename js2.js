let arr = [1,2,3,5,6,8,9,7,8,0,0,0,7,5,4,3,2,7,65,22,23,1];
let a = +prompt("Nhập một số vô đây");
let cnt = 0;
let data =""
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==a){
        cnt++;
    }
}
data = "Cái số mà bạn vừa nhập thì có " + cnt + " số giống vậy ở chổ tôi."
document.getElementById("result").innerHTML = data;