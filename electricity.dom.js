// DOM element(s) references
topupElement = document.querySelector('.topup');
BuyBtnElement = document.querySelector('.topupNow');
topupAdvanceElement = document.querySelector('.topupAdvance');
unitsAvailableElement= document.querySelector('.unitsAvailable')
unitsBoughtElement = document.querySelector('.totalUnits');
amountSpentElement= document.querySelector('.totalAmount');
advanceTakenElement = document.querySelector('.advanceTaken');
usageElement = document.querySelector('.usage');
useNowBtnElement = document.querySelector('.useNow');



// Factory Function instance 
const electricity =  Electricity();



// DOM events here 
BuyBtnElement.addEventListener('click', buyNow)
useNowBtnElement.addEventListener('click', useNow)