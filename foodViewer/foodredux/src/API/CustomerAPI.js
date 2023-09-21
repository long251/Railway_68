import { api } from "./api";

// getListCustomerAPI
const getListCustomerAPI = () => {
  return api("GET", "customers/", null);
};

//addNewCustomerAPI
const addNewCustomerAPI = (CustomerNew) => {
  return api("POST", "customers/", CustomerNew);
};

//deleteCustomerAPI
const deleteCustomerAPI = (id) => {
  let url = "customers/" + id;
  return api("DELETE", url, null);
};

//updateCustomerAPI
const updateCustomerAPI = (customerUpdate) => {
  let url = "customers/" + customerUpdate.id;
  return api("PUT", url, customerUpdate.customer_Update);
};
export {
  getListCustomerAPI,
  addNewCustomerAPI,
  deleteCustomerAPI,
  updateCustomerAPI,
};
