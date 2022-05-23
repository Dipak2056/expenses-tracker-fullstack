import { getExpense } from "../../helpers/axiosHelper";
import { requestPending, setResponse, setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  const data = await getExpense();
  const { status, expenses } = await getExpense();

  status = "success" && dispatch(setExpenses(expenses));
};
