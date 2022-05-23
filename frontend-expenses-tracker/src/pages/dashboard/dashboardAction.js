import { getExpense, postExpense } from "../../helpers/axiosHelper";
import { requestPending, setResponse, setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  dispatch(requestPending());
  const data = await getExpense();
  const { status, expenses } = await getExpense();

  status = "success" && dispatch(setExpenses(expenses));
};
export const handleOnPost = (frmData) => async (dispatch) => {
  dispatch(requestPending());
  // setIsLoading(true);
  const data = await postExpense(frmData);
  // const data = await postExpense(frmData);
  // setIsLoading(false);
  // setResp(data);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
  // data.status === "success" && fetchExpenses();
};
