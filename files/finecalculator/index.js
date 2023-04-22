const currentSpeed = prompt("Please enter your current speed:");
const speedLimit = prompt("Please enter the speed limit:");
const zoneNumber = prompt("Please enter the Zone Number:");

if(isNaN(currentSpeed))
{
    console.log("Your current speed is wrong\nYou should only use full numbers.");
    alert(`Your current speed is wrong\nYou should only use full numbers.`);
}
else if(isNaN(speedLimit))
{
    console.log("Your speed limit is wrong\nYou should only use full numbers.");
    alert(`Your speed limit is wrong\nYou should only use full numbers.`);
}
else if(isNaN(zoneNumber) || (zoneNumber != 1 && zoneNumber != 2 && zoneNumber != 3))
{
    console.log("Your zone number is wrong\nYou should only use full numbers(1, 2 or 3).");
    alert(`Your zone number is wrong\nYou should only use full numbers(1, 2 or 3).`);
}
else
{
    alert(`Your current speed is: ${currentSpeed} km/h,\nYour speed limit is: ${speedLimit} km/h,\nYour zone number is: ${zoneNumber}`);
    console.log("Your current speed is: ", currentSpeed,"km/h,\nYour speed limit is: ", speedLimit, "km/h,\nYour zone number is: ", zoneNumber);
    calculateDutchFineForSpeedLimitViolation(currentSpeed,speedLimit,zoneNumber);
}

function calculateDutchFineForSpeedLimitViolation(currentSpeed,speedLimit,zoneNumber){
    var fine = 0;
    var overSpeed = currentSpeed - speedLimit;

    if(overSpeed < 5)
    {
        console.log("No fine for you.");
        alert(`No fine for you.`);
    }
    else
    {
        if(zoneNumber == 1)
        {
            if(overSpeed >= 5 && overSpeed < 10)
            {
                fine = 39;
            }
            else if(overSpeed >= 10 && overSpeed < 15)
            {
                fine = 82;
            }
            else if(overSpeed >= 15 && overSpeed < 20)
            {
                fine = 154;
            }
            else if(overSpeed >= 20 && overSpeed < 25)
            {
                fine = 219;
            }
            else if(overSpeed >= 25 && overSpeed < 30)
            {
                fine = 296;
            }
            else if(overSpeed == 30)
            {
                fine = 383;
            }
            else if(overSpeed > 30)
            {
                fine = "fine order";
            }
        }
        else if(zoneNumber == 2)
        {
            if(overSpeed >= 5 && overSpeed < 10)
            {
                fine = 36;
            }
            else if(overSpeed >= 10 && overSpeed < 15)
            {
                fine = 77;
            }
            else if(overSpeed >= 15 && overSpeed < 20)
            {
                fine = 148;
            }
            else if(overSpeed >= 20 && overSpeed < 25)
            {
                fine = 209;
            }
            else if(overSpeed >= 25 && overSpeed < 30)
            {
                fine = 280;
            }
            else if(overSpeed == 30)
            {
                fine = 364;
            }
            else if(overSpeed > 30)
            {
                fine = "fine order";
            }
            }
        else if(zoneNumber == 3)
        {
            if(overSpeed >= 5 && overSpeed < 10)
            {
                fine = 29;
            }
            else if(overSpeed >= 10 && overSpeed < 15)
            {
                fine = 72;
            }
            else if(overSpeed >= 15 && overSpeed < 20)
            {
                fine = 136;
            }
            else if(overSpeed >= 20 && overSpeed < 25)
            {
                fine = 196;
            }
            else if(overSpeed >= 25 && overSpeed < 30)
            {
                fine = 261;
            }
            else if(overSpeed >= 30 && overSpeed < 35)
            {
                fine = 334;
            }
            else if(overSpeed >= 35 && overSpeed <= 40)
            {
                fine = 419;
            }
            else if(overSpeed > 40)
            {
                fine = "fine order";
            }
        }
        if(fine == "fine order")
        {
            console.log("Your fine is:", fine);
            alert(`Your fine is ${fine}`);
        }
        else
        {
            console.log("Your fine is:", fine, "€");
            alert(`Your fine is ${fine}€`);
        }
    }    
}