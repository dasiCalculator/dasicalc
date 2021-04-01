var DASItotal = 0;
var METs = 0;
var vo2 = 0.00;
var DASIValues = [2.75, 1.75, 2.75, 5.5, 8, 2.7, 3.5, 8, 4.5, 5.25, 6, 7.5]

window.onbeforeunload = resetToYes;

function addToTotal(DASINumber){
    if(document.getSelection)
    DASItotal = DASINumber + DASItotal; 
    document.getElementById("DASItotal").innerHTML = DASItotal;
    document.getElementById("METs").innerHTML = convertToMETs();
    return; 
}

function subToTotal(DASINumber){
    DASItotal = DASItotal - DASINumber; 
    document.getElementById("DASItotal").innerHTML = DASItotal;
    document.getElementById("METs").innerHTML = convertToMETs();
    return; 
}

function calculateEverything(){
   DASItotal = 0;
   METs = 0; 
   for(i = 0; i<12; i++) {
       if(document.getElementById(i).checked === true){
           DASItotal += DASIValues[i];
       }
   }
   document.getElementById("DASItotal").innerHTML = DASItotal;
   document.getElementById("METs").innerHTML = convertToMETs();
}


function convertToMETs(){
    vo2 = ((0.43 * DASItotal) + 9.6)
    METs = vo2 / 3.5;
    return METs.toFixed(2);
}

function resetToYes(){
    document.getElementsByClassName("inlineRadioYes").checked = true;
}