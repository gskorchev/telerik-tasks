let messages = +gets();

let minutes = +gets();

let additionalMsgLeva = 0;
let additionalMinsLeva = 0;
let additionalTaxes = 0;
let totalBill = 0;
let totalTaxes = 0;
let normalTaxes = 12;

let additionalMessages = messages - 20;
let additionalMinutes = minutes - 60;


additionalMessages <= 0 ? additionalMsgLeva = 0 : additionalMsgLeva = additionalMessages * 0.06;

additionalMinutes <= 0 ? additionalMinsLeva = 0 : additionalMinsLeva = additionalMinutes * 0.10;

totalTaxes = additionalMinsLeva + additionalMsgLeva;
additionalTaxes = totalTaxes * 0.2;

if(additionalMessages < 0){
    additionalMessages = 0;
}
if (additionalMinutes < 0){
    additionalMinutes = 0;
}

print(`${additionalMessages} additional messages for ${additionalMsgLeva.toFixed(2)} levas`);
print(`${additionalMinutes} additional minutes for ${additionalMinsLeva.toFixed(2)} levas`);
print(`${additionalTaxes.toFixed(2)} additional taxes`);

totalBill = normalTaxes + additionalMinsLeva + additionalMsgLeva + additionalTaxes;

print(`${totalBill.toFixed(2)} total bill`);