function Electricity() {
var totalAmount = 0;
var totalUnits = 0;
var unitsAvailable = 0;
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };
/*The topUpElectricity function checks for the type of amount loaded using an if statement and the === operator
Then adds the value to the total amount*/
    function topUpElectricity(amount) {
    if(amount === 'advance'){
        totalAmount += 30
}
    else if (typeof amount === 'number'){
    totalAmount += amount
}
    }
/*This function calculates the amount of units, uses if staments and === to check for the value and assign the total units for that value*/
    function getUnitsAvailable() {
        if(totalAmount === 30){
            unitsAvailable += 21
        } else if(totalAmount === 10){
            unitsAvailable += 7
        }
        else if(totalAmount === 20){
            unitsAvailable += 14
        }
        else if (totalAmount === 50){
            unitsAvailable += 35
        }
        else if(typeof totalAmount === 'number'){
            unitsAvailable = totalAmount/1.4285714286;
        }
         return unitsAvailable.toFixed(2);
    }

    /*
    Uses a for loop to iterate through the object and uses an if statement to filter the appliance usage, uses >= to filter the usage that is above the units available
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        for(var units in appliances){
            var applianceUsage = appliances[units]
            if(units === appliance){
                if(unitsAvailable >= applianceUsage){
                    unitsAvailable -= applianceUsage;
                    return true
                } else{
                    return false
                }
            }
        }
        return false
    }
/*This function returns the total advance taken */
    function advanceTaken() {
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
        totalUnits += unitsAvailable
        return totalUnits
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought,

    }
}