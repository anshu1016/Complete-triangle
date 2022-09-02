var angles = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn")
const showResult = document.querySelector("#result")

let links = document.querySelectorAll(".pages a");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}


checkBtn.addEventListener("click",validateNum)

function validateNum(){
    var firstAngle = Number(angles[0].value);
    var secondAngle = Number(angles[1].value);
    var thirdAngle = Number(angles[2].value);
    if( firstAngle >0 && secondAngle>0 && thirdAngle>0 )
    {
        const sum = sumofAngles(firstAngle, secondAngle, thirdAngle);
        if(sum == 180)
        {
            showResult.innerText = "Yes your angles makes a complete Triangle which is 180 degree..";
        }
        else{
            showResult.innerText = "Your Complete triangle is incomplete by " +(180-(firstAngle+secondAngle+thirdAngle)) + " degree..";

        }
    }else{
        showResult.innerText = "Fill both inputs and make sure that inputs are non-negative and greater than zero..";
    }
}

function sumofAngles(a,b,c){
    const total = a+b+c;
    return total;
}
