const formatPrice = (amount, currency, style) => {
  let obj = new Intl.NumberFormat("de-DE", {
    style: style,
    currency: currency,
  });
  return obj.format(amount);
};
module.exports = { formatPrice };
