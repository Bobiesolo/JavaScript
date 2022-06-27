let f1 = () => console.log("---")
f1()
let t1 = 10;
let t2 = 15;
let t3 = 20;

let summ =(n1, n2) => {console.log(`Summ = ${n1 + n2}`)}
summ(t1, t2)

function yolockka_pro(){}

yolockka_pro.prototype.method_1 = function(){
    console.log("method_1")
}

yolockka_pro.prototype.method_2 = function(tt1, tt2){
    console.log(`method_2 = ${tt1 + tt2}` )
}

let wood = new yolockka_pro()

// wood.method_1()
// wood.method_2(10, 20)
let T1 = 20;
let F3 = (t1 > 10) ?
    (tt1, tt2) => console.log(tt1 + tt2) :
    (tt1, tt2) => console.log(tt1 -tt2);

F3(10, 30)