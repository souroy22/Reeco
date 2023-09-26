import { data, productsData } from "../statisData/orders";

const getProductsDetails = (orderProducts) => {
  const products = [];
  for (let i = 0; i < orderProducts.length; i++) {
    const indx = productsData.findIndex(
      (prod) => prod.id === orderProducts[i].id
    );
    const data = productsData[indx];
    data.total = orderProducts[i].total;
    data.status = orderProducts[i].status;
    data.editReason = orderProducts[i].editReason;
    products.push({ ...data, qnty: orderProducts[i].qnty });
  }
  return products;
};

export const fetchOrderDetails = (orderId) => {
  const orderDetails = {};
  let order = data.filter((ordr) => ordr[0].value === orderId);
  if (order.length) {
    order = order[0];
    orderDetails["orderId"] = order[0].value;
    orderDetails["supplier"] = order[1].value;
    orderDetails["shippingDate"] = order[2].value;
    orderDetails["totalCost"] = order[3].value;
    orderDetails["department"] = order[4].value;
    orderDetails["status"] = order[5].value;
    orderDetails["products"] = getProductsDetails(order[6].orderProducts);
  }
  return orderDetails;
};
