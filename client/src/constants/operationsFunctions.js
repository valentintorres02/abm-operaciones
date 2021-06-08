import { httpPatch, httpPost } from "../services/httpServices";
import { validateForm } from "../validations/validations";
import { successAlert } from "./alerts";
import { createOperation, OPERATION_URL_MAIN, SUCCESS_ALERT, SUCCESS_CREATED_OPERATION, SUCCESS_EDITED_OPERATION, updateOperation } from "./constants";

export const updateSelectedOperation = (e, data) => {
  e.preventDefault();
  if (validateForm(data.concept, data.amount, data.date, data.type)) {
    updateOperation(httpPatch, OPERATION_URL_MAIN, data.id, data)
    return successAlert(SUCCESS_ALERT, SUCCESS_EDITED_OPERATION);
  };
};

export const createSelectedOperation = (e, data) => {
  e.preventDefault();
  if (validateForm(data.concept, data.amount, data.date, data.type)) {
    createOperation(httpPost, OPERATION_URL_MAIN, data);
    return successAlert(SUCCESS_ALERT, SUCCESS_CREATED_OPERATION);
  };
};