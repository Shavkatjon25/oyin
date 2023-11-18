alert("Salom o'yinga hush kelibsiz\nsiz kapyuter o'ylagan sonni topishingiz kerak bo'ladi");
let x = 33;
while(x>30){
    let oylanSon = Math.random();
    oylanSon=(+oylanSon)*100;
    oylanSon=oylanSon-oylanSon%1+1
    console.log(oylanSon);
    x=oylanSon
}
let tax =""
let son = true
for (let i=1;i<11;++i){
    let tashson=prompt(i+"-sonni kiriting \n"+tax+"  ");
    if (tashson==x)
    {
         alert("Tabriklaymiz to'gri topdingiz");
         son=false
         break;
    }
    if (tashson<x) {tax+=" Bu sondan katta"}else{tax+=" Bu sondan kichik "}
    tax=tax+i+"-taxmin "+tashson+"\n";
}
if  (son) alert("Afsuski imkonyatingiz tugadi ")