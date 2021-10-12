import { combineReducers } from "redux";
import {
  IsLoggedReducer,
  IsLoggedProfileReducer,
} from "./log/reducers/IsloggedReducer";
import { UserdataReducer } from "./log/reducers/UserdataReducer";
import {
  GlobalReducer,
  ButtonsLoginReducerLight,
  ButtonsLoginReducerDark,
  ButtonsSignUpReducerLight,
  ButtonsSignUpReducerDark,
  PaperReducerLightnDark,
  GlobalReducerKeepMeLoggedIn,
  GlobalReducerColor,
  GlobalReducerLoader,
} from "./GlobalReducer";
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////
////////////////////////////
//////////////
////////
////
//
const AllReducers = combineReducers({
  IsLoggedReducer,
  GlobalReducer,
  ButtonsLoginReducerLight,
  ButtonsLoginReducerDark,
  ButtonsSignUpReducerLight,
  ButtonsSignUpReducerDark,
  PaperReducerLightnDark,
  UserdataReducer,
  GlobalReducerKeepMeLoggedIn,
  GlobalReducerColor,
  IsLoggedProfileReducer,
  GlobalReducerLoader,
});

export default AllReducers;
