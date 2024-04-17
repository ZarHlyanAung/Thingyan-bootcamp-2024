function calculateTotalSalesWithTax(productArray, taxRate) {
  const total = productArray.reduce((total, each) => {
    return total + each.price * each.quantity;
  }, 0);

  const final = total + total * (taxRate / 100);

  return parseFloat(final.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
