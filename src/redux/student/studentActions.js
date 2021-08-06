import { StudentService } from "../../service/StudentService";
import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
} from "./studentTypes";

export const fetchStudents = () => {
  alert("fetching data from database.");
  return (dispatch) => {
    dispatch(fetchStudentsRequest());
    let service = new StudentService();
    service.findAllStudents().then((response) => {
      const students = response.data;
      dispatch(fetchStudentsSuccess(students));
    })
      .catch((error) => {
        dispatch(fetchStudentsFailure(error.message));
      });
  };
};

export const fetchStudentsRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};
