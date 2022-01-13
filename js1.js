let arr = [3213,431531,531421,57536,35435,5425316,6316653,744642,326];
let cnt = 0;
let data = "";
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
        cnt++;
        data += arr[i] + "&nbsp&nbsp";
    }
}
data = "Có "+ cnt + " số chẵn là:" + "<br/>" + data;
document.getElementById("result").innerHTML = data;













