var chosenLine = ""
var message = ""
var wins = 0
var spent = 0
var stake = 0

let randomize=()=>{

    hideSB()
    functionimage1();
    functionimage2();
    functionimage3();
    functionimage4();
    functionimage5();
    functionimage6();
    functionimage7();
    functionimage8();
    functionimage9();
    document.getElementById("table").style.opacity = "1"
    displayValue()
    spend()
}
let showSB=()=>{
    document.getElementById("sb").style.opacity="1"
    document.getElementById("sb").disabled=false
}
let hideSB=()=>{
    document.getElementById("sb").style.opacity="0.3"
    document.getElementById("sb").disabled=true
}
let reset=()=>{
    hideSB()
    unChoose()
    document.getElementById("image1").src = "h2.png"
    document.getElementById("image2").src = "h2.png"
    document.getElementById("image3").src = "h2.png"
    document.getElementById("image4").src = "h2.png"
    document.getElementById("image5").src = "h2.png"
    document.getElementById("image6").src = "h2.png"
    document.getElementById("image7").src = "h2.png"
    document.getElementById("image8").src = "h2.png"
    document.getElementById("image9").src = "h2.png"
    document.getElementById("table").style.opacity = "0.7"
}
let choose1=()=>{
    document.getElementById("image1").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "1"
}
let choose2=()=>{
    document.getElementById("image2").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "2"
}
let choose3=()=>{
    document.getElementById("image3").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "3"
}
let choose4=()=>{
    document.getElementById("image4").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "4"
}
let choose5=()=>{
    document.getElementById("image5").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "5"
}
let choose6=()=>{
    document.getElementById("image6").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "6"
}
let choose7=()=>{
    document.getElementById("image7").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "7"
}
let choose8=()=>{
    document.getElementById("image8").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "8"
}
let choose9=()=>{
    document.getElementById("image9").style.backgroundColor = "rgb(224, 209, 189)"
    chosenLine = chosenLine + "9"
}
let unChoose=()=>{
        document.getElementById("image1").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image2").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image3").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image4").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image5").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image6").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image7").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image8").style.backgroundColor = "rgb(250, 235, 215)"
        document.getElementById("image9").style.backgroundColor = "rgb(250, 235, 215)"
}
let col1=()=>{
    chosenLine="";
    reset()
    showSB()
    unChoose()
    choose1()
    choose4()
    choose7()
}
let col2=()=>{
        chosenLine="";
    reset()
    showSB()
    unChoose()
    choose2()
    choose5()
    choose8()
}
let col3=()=>{
        chosenLine="";
    reset()
    showSB()
    unChoose()
    choose3()
    choose6()
    choose9()
}
let row1=()=>{
        chosenLine="";
    reset()
    showSB()
    unChoose()
    choose1()
    choose2()
    choose3()
}
let row2=()=>{
        chosenLine="";
    reset()
    showSB()
    unChoose()
    choose4()
    choose5()
    choose6()
}
let row3=()=>{
        chosenLine="";
    reset()
    showSB()
    unChoose()
    choose7()
    choose8()
    choose9()
}
let functionimage1=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image1").src = "a2.png"; document.getElementById("image1").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image1").src = "b2.png"; document.getElementById("image1").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image1").src = "c2.png"; document.getElementById("image1").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image1").src = "d2.png"; document.getElementById("image1").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image1").src = "e2.png"; document.getElementById("image1").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image1").src = "f2.png"; document.getElementById("image1").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image1").src = "g2.png"; document.getElementById("image1").value="7"
    }
    else{
        document.getElementById("image1").src = "h2.png"; document.getElementById("image1").value="8"
    }
}
let functionimage2=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image2").src = "a2.png"; document.getElementById("image2").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image2").src = "b2.png"; document.getElementById("image2").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image2").src = "c2.png"; document.getElementById("image2").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image2").src = "d2.png"; document.getElementById("image2").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image2").src = "e2.png"; document.getElementById("image2").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image2").src = "f2.png"; document.getElementById("image2").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image2").src = "g2.png"; document.getElementById("image2").value="7"
    }
    else{
        document.getElementById("image2").src = "h2.png"; document.getElementById("image2").value="8"
    }
}
let functionimage3=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image3").src = "a2.png"; document.getElementById("image3").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image3").src = "b2.png"; document.getElementById("image3").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image3").src = "c2.png"; document.getElementById("image3").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image3").src = "d2.png"; document.getElementById("image3").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image3").src = "e2.png"; document.getElementById("image3").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image3").src = "f2.png"; document.getElementById("image3").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image3").src = "g2.png"; document.getElementById("image3").value="7"
    }
    else{
        document.getElementById("image3").src = "h2.png"; document.getElementById("image3").value="8"
    }
}
let functionimage4=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image4").src = "a2.png"; document.getElementById("image4").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image4").src = "b2.png"; document.getElementById("image4").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image4").src = "c2.png"; document.getElementById("image4").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image4").src = "d2.png"; document.getElementById("image4").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image4").src = "e2.png"; document.getElementById("image4").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image4").src = "f2.png"; document.getElementById("image4").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image4").src = "g2.png"; document.getElementById("image4").value="7"
    }
    else{
        document.getElementById("image4").src = "h2.png"; document.getElementById("image4").value="8"
    }
}
let functionimage5=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image5").src = "a2.png"; document.getElementById("image5").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image5").src = "b2.png"; document.getElementById("image5").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image5").src = "c2.png"; document.getElementById("image5").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image5").src = "d2.png"; document.getElementById("image5").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image5").src = "e2.png"; document.getElementById("image5").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image5").src = "f2.png"; document.getElementById("image5").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image5").src = "g2.png"; document.getElementById("image5").value="7"
    }
    else{
        document.getElementById("image5").src = "h2.png"; document.getElementById("image5").value="8"
    }
}
let functionimage6=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image6").src = "a2.png"; document.getElementById("image6").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image6").src = "b2.png"; document.getElementById("image6").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image6").src = "c2.png"; document.getElementById("image6").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image6").src = "d2.png"; document.getElementById("image6").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image6").src = "e2.png"; document.getElementById("image6").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image6").src = "f2.png"; document.getElementById("image6").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image6").src = "g2.png"; document.getElementById("image6").value="7"
    }
    else{
        document.getElementById("image6").src = "h2.png"; document.getElementById("image6").value="8"
    }
}
let functionimage7=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image7").src = "a2.png"; document.getElementById("image7").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image7").src = "b2.png"; document.getElementById("image7").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image7").src = "c2.png"; document.getElementById("image7").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image7").src = "d2.png"; document.getElementById("image7").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image7").src = "e2.png"; document.getElementById("image7").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image7").src = "f2.png"; document.getElementById("image7").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image7").src = "g2.png"; document.getElementById("image7").value="7"
    }
    else{
        document.getElementById("image7").src = "h2.png"; document.getElementById("image7").value="8"
    }
}
let functionimage8=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image8").src = "a2.png"; document.getElementById("image8").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image8").src = "b2.png"; document.getElementById("image8").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image8").src = "c2.png"; document.getElementById("image8").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image8").src = "d2.png"; document.getElementById("image8").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image8").src = "e2.png"; document.getElementById("image8").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image8").src = "f2.png"; document.getElementById("image8").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image8").src = "g2.png"; document.getElementById("image8").value="7"
    }
    else{
        document.getElementById("image8").src = "h2.png"; document.getElementById("image8").value="8"
    }
}

let functionimage9=()=>{
    let x = Math.random()
    if (x<=0.25){
        document.getElementById("image9").src = "a2.png"; document.getElementById("image9").value="1"
    }
    else if (x<=0.47){
        document.getElementById("image9").src = "b2.png"; document.getElementById("image9").value="2"
    }
    else if (x<=0.65){
        document.getElementById("image9").src = "c2.png"; document.getElementById("image9").value="3"
    }
    else if (x<=0.77){
        document.getElementById("image9").src = "d2.png"; document.getElementById("image9").value="4"
    }
    else if (x<=0.87){
        document.getElementById("image9").src = "e2.png"; document.getElementById("image9").value="5"
    }
    else if (x<=0.95){
        document.getElementById("image9").src = "f2.png"; document.getElementById("image9").value="6"
    }
    else if (x<=0.99){
        document.getElementById("image9").src = "g2.png"; document.getElementById("image9").value="7"
    }
    else{
        document.getElementById("image9").src = "h2.png"; document.getElementById("image9").value="8"
    }
}
let displayValue=()=>{
    var valueLine = ""
    for (let x=0;x<3;x++){
        if (chosenLine[x] == "1"){
            valueLine = valueLine + document.getElementById("image1").value
        }
        else if (chosenLine[x] == "2"){
            valueLine = valueLine + document.getElementById("image2").value
        }
        else if (chosenLine[x] == "3"){
            valueLine = valueLine + document.getElementById("image3").value
        }
        else if (chosenLine[x] == "4"){
            valueLine = valueLine + document.getElementById("image4").value
        }
        else if (chosenLine[x] == "5"){
            valueLine = valueLine + document.getElementById("image5").value
        }
        else if (chosenLine[x] == "6"){
            valueLine = valueLine + document.getElementById("image6").value
        }
        else if (chosenLine[x] == "7"){
            valueLine = valueLine + document.getElementById("image7").value
        }
        else if (chosenLine[x] == "8"){
            valueLine = valueLine + document.getElementById("image8").value
        }
        else{
            valueLine = valueLine + document.getElementById("image9").value
        }
    }

    var difChars=(x)=>{
        let newStr = "";
        for (let i=0;i<x.length;i++){
            if (newStr.includes(x[i]) === false){
                newStr += x[i]
            }
        }
        if (newStr.includes("8")){
            let newStr2 = "";
            for (let i=0;i<x.length;i++){
                if (x[i] == "8"){
                    newStr2 += x[i]
                }
            }
            if (newStr2.length == 3){
                return "t8"
            }
            if (newStr2.length == 2){
                return "8d"
            }
            else{
                return "diamond"
            }
        }
        else{
            if (newStr.length == 3){
                return "no"
            }
            if (newStr.length == 2){
                return x.replace(newStr, "d")
            }
            else{
                return x.replace(newStr, "").replace(newStr, "t")
            }
        }
    }
    let factor;
    
    let winIndex=0.42+Math.random()*0.1
    if (difChars(valueLine).includes("diamond")){
        message = "Diamond<br>"
    }
    else if (difChars(valueLine).includes("d")){
        message = "2X<br>"
    }
    else if (difChars(valueLine).includes("t")){
        message = "3X<br>"
    }
    else{
        message = "no win"
    }
    if (difChars(valueLine) == "no"){
        factor= 0
    }
    else if (difChars(valueLine) == "diamond"){
        factor= 14.3+Math.random()*0.4
    }
    else if (difChars(valueLine).includes("d")){
        if (difChars(valueLine).includes("1")){
            factor = winIndex/0.141
        }
        else if (difChars(valueLine).includes("2")){
            factor = winIndex/0.113
        }
        else if (difChars(valueLine).includes("3")){
            factor = winIndex/0.08
        }
        else if (difChars(valueLine).includes("4")){
            factor = winIndex/0.038
        }
        else if (difChars(valueLine).includes("5")){
            factor = winIndex/0.027
        }
        else if (difChars(valueLine).includes("6")){
            factor = winIndex/0.018
        }
        else if (difChars(valueLine).includes("7")){
            factor = winIndex/0.005
        }
        else if (difChars(valueLine).includes("8")){
            factor = winIndex/0.001
        }
    }
    
    else if (difChars(valueLine) == "t1"){
        factor = winIndex/0.0156
    }
    else if (difChars(valueLine) == "t2"){
        factor = winIndex/0.0106
    }
    else if (difChars(valueLine) == "t3"){
        factor = winIndex/0.0058
    }
    else if (difChars(valueLine) == "t4"){
        factor = winIndex/0.0017
    }
    else if (difChars(valueLine) == "t5"){
        factor = winIndex/0.0010
    }
    else if (difChars(valueLine) == "t6"){
        factor = winIndex/0.0005
    }
    else if (difChars(valueLine) == "t7"){
        factor = winIndex/0.00006
    }
    else if (difChars(valueLine) == "t8"){
        factor = winIndex/0.000001
    }
    let finalScore = factor/7.5*stake
    document.getElementById("saldo").innerHTML =finalScore.toFixed(2)
    if (finalScore>=stake){
        document.getElementById("message").style.color="green"
    }
    else{
        document.getElementById("message").style.color="red"
    }
    document.getElementById("message").innerHTML =`${message} ${finalScore.toFixed(2)} €`
    wins = wins + finalScore
    messageF()
}
let messageF=()=>{
    var element = document.getElementById("message")
    element.style.animation = "none";
    element.offsetHeight;
    element.style.animation = "animaatio 2s"
    document.getElementById("wins").innerHTML =`${wins.toFixed(2)} €`
}

var getStake=()=>{
    stake = document.getElementById("add").value
    if (isNaN(stake)){
        stake = 0
    }
    else{
        stake = Number(document.getElementById("add").value)
    }
    stake = Math.abs(stake)
}
var spend=()=>{
    spent = spent + stake
    document.getElementById("spent").innerHTML=`${spent.toFixed(2)} €`
    if (wins<spent){
        document.getElementById("balance").style.backgroundColor="rgb(255, 206, 206)"
    }
    if (wins>spent){
        document.getElementById("balance").style.backgroundColor="rgb(206, 255, 206)"
    }
    document.getElementById("balance").innerHTML=`${(wins-spent).toFixed(2)} €`
}