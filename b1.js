let btn=document.querySelector('#btn');

let y=0;
btn.addEventListener('click', function(){
    let soNguyenTo=[];
    let a=Number(document.getElementById('a').value);
    let b=Number(document.getElementById('b').value);

    for (let i=a; i<=b;i++) {
        let y=0;
        for (let j=1;j<=i;j++){
            if (i%j==0) {
            y=y+1;
            }
        }
        if (y==2) {soNguyenTo.push(i);}

    }
let text = soNguyenTo.join(', ');
document.getElementById('chuoi').innerHTML=text;
}
)
