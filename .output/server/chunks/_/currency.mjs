function centsToDollars(cents) {
  return Number((cents / 100).toFixed(2));
}
function dollarsToCents(dollars) {
  return Math.round(dollars * 100);
}

export { centsToDollars as c, dollarsToCents as d };
//# sourceMappingURL=currency.mjs.map
