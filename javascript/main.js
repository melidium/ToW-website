//fairy Class
const fairySelector = document.getElementById("fairyAttributeSelector")
const classAttribute = document.getElementById('classAttributeIMG')
const fairyFloorInput = document.getElementById('fairyCandyFloorInput')
const fairyFloorsIMG = document.getElementById('fairyCandyFloors')


function changeFairyClassimg() {
    if (fairySelector.value == "IQ") {
        classAttribute.src="images/fairyAttribute/IQ.png"
    }
    else if (fairySelector.value == "EQ") {
        classAttribute.src="images/fairyAttribute/EQ.png"
    }
    else if (fairySelector.value == "Physique") {   
        classAttribute.src="images/fairyAttribute/Physique.png"
    }
    else if (fairySelector.value == "SpiritPoint") {
        classAttribute.src="images/fairyAttribute/SpiritPoint.png"
    }
    else if (fairySelector.value == "Charisma") {
        classAttribute.src="images/fairyAttribute/Charisma.png"
    }
    else if (fairySelector.value == "AllAttributes") {
        classAttribute.src="images/fairyAttribute/All.png"
    }
    else if (fairySelector.value == "Finance") {
        classAttribute.src="images/fairyAttribute/Finance.png"
    }
    else if (fairySelector.value == "Chemistry") {
        classAttribute.src="images/fairyAttribute/Chemistry.jpg"
    }

}

function changeFairyFloorsimg(){
    if (fairyFloorInput.value <= 20){
        fairyFloorsIMG.src="images/fairyCandy/Lv1-20.jpg"
    } 
    else if (fairyFloorInput.value >= 21 && fairyFloorInput.value <= 40 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv21-40.jpg"
    } 
    else if (fairyFloorInput.value >= 41 && fairyFloorInput.value <= 60 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv41-60.jpg"
    } 
    else if (fairyFloorInput.value >= 61 && fairyFloorInput.value <= 80 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv61-80.jpg"
    } 
    else if (fairyFloorInput.value >= 81 && fairyFloorInput.value <= 100 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv81-100.jpg"
    } 
    else if (fairyFloorInput.value >= 101 && fairyFloorInput.value <= 120 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv101-120.jpg"
    } 
    else if (fairyFloorInput.value >= 121 && fairyFloorInput.value <= 140 ){
        fairyFloorsIMG.src="images/fairyCandy/Lv121-140.jpg"
    } 
    else if (fairyFloorInput.value >= 141){
        fairyFloorsIMG.src="images/fairyCandy/Lv141-160.jpg"
    } 
}