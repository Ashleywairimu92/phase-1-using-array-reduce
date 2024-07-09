const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(batteries){
//     return batteries = batteryBatches([]);
// }   

// function totalBatteries(batteryBatches){
//     return batteryBatches.reduce((total, batch) => totat + batch, 0);
// }


const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);


