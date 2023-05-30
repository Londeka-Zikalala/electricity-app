const topupElement = document.querySelector('.topup');
const BuyBtnElement = document.querySelector('.topupNow');
const unitsAvailableElement = document.querySelector('.unitsAvailable');
const totalUnitsBoughtElement = document.querySelector('.totalUnits');
const totalAmountSpentElement = document.querySelector('.totalAmount');
const advanceTakenElement = document.querySelector('.advanceTaken');
const totalAmountSpentAdvanceElement = document.querySelector('.totalAmountSpent');
const usageElement = document.querySelector('.usage');
const useNowBtnElement = document.querySelector('.useNow');




// Factory Function instance 
const electricity =  Electricity();
/* initialise local storage*/
function setLocalStorage(){
    let usage = {
        totalUnitsBought: electricity.totalUnitsBought(),
        totalAmountSpent: electricity.totalAmountSpent(),
      };
      localStorage.setItem('electricityUsage', JSON.stringify(usage));
    }
    

/*This function updates the values when the amount is not null*/

function buyNow() {
    const amount = document.querySelector('input[name="buyElectricity"]:checked').value;
    if (amount) {
      electricity.topUpElectricity(amount);
      unitsAvailableElement.innerHTML = electricity.getUnitsAvailable();
      totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought();
      totalAmountSpentElement.innerHTML = electricity.totalAmountSpent();
      totalAmountSpentAdvanceElement.innerHTML = electricity.totalAmountSpent();
      advanceTakenElement.innerHTML = electricity.advanceTaken();
      setLocalStorage();
    }
  }

  function useNow() {
    const checkedUseBtn = document.querySelector('input[name="useElectricity"]:checked')
  let appliance = checkedUseBtn.value
    if (appliance) {
      const unitsAvailable = electricity.useAppliance(appliance);
      unitsAvailableElement.innerHTML = unitsAvailable;
      totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought();
      totalAmountSpentElement.innerHTML = electricity.totalAmountSpent();
      totalAmountSpentAdvanceElement.innerHTML = electricity.totalAmountSpent();
      advanceTakenElement.innerHTML = electricity.advanceTaken();
      setLocalStorage();
    }
  }
  
  
/*get localstorage values*/ 
const storedUsage = localStorage.getItem('electricityUsage');
if (storedUsage ){
  let usageData = JSON.parse(storedUsage);
  totalUnitsBoughtElement.innerHTML = usageData.totalUnitsBought || '0.00';
  totalAmountSpentElement.innerHTML = usageData.totalAmountSpent || '0.00';
} 
// DOM events here 
BuyBtnElement.addEventListener('click', buyNow)
useNowBtnElement.addEventListener('click', useNow)