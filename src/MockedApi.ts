export const createOrder = (allOrderInfo: any) => {
  // Om det här va på riktigt så hade vi gjort något i denna stilen:
  // const json = JSON.stringify(allOrderInfo)
  // fetch('/api/order', { method: 'POST', body: json })
  console.log(allOrderInfo);
  return new Promise(resolve => setTimeout(resolve, 3000));
};
