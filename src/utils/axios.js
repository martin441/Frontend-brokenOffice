import axios from "axios";
import toast from "react-hot-toast";
const ROUTE = process.env.REACT_APP_ROUTE;

export async function axiosDeleteOffice(id) {
  try {
    const deletedOffice = await axios.delete(`${ROUTE}/offices/delete/${id}`, {
      withCredentials: true,
    });
    toast.success("Office deleted successfully");
    return deletedOffice;
  } catch (error) {
    console.error(error);
    toast.error("Office could not be deleted");
  }
}

export async function axiosGetAllOffices() {
  try {
    const offices = await axios.get(`${ROUTE}/offices`, {
      withCredentials: true,
    });
    return offices.data;
  } catch (error) {
    console.error(error);
  }
}

export async function axiosPutOffice(id, obj) {
  try {
    const offices = await axios.put(`${ROUTE}/offices/edit/${id}`, obj, {
      withCredentials: true,
    });
    toast.success("Office edited successfully");
    return offices.data;
  } catch (error) {
    toast.error("Failed to edit Office");
    console.error(error);
  }
}

export async function axiosPostOffice(obj) {
  try {
    const offices = await axios.post(`${ROUTE}/offices/add`, obj, {
      withCredentials: true,
    });
    toast.success("Office added successfully");
    return offices.data;
  } catch (error) {
    toast.error("Failed to add new Office");
    console.error(error);
  }
}

export async function axiosGetMe() {
  try {
    const loggedUser = await axios.get(`${ROUTE}/user/me`, {
      withCredentials: true,
    });
    return loggedUser.data;
  } catch (error) {
    console.error(error);
  }
}
