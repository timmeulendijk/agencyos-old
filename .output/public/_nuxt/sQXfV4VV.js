const m=(t,r)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",...r&&r.hideZeros&&{minimumFractionDigits:0,maximumFractionDigits:0}}).format(t);export{m as f};
