import {
  CHANGE_SETTINGS
} from '../constants/Settings';


export function changeSettings(obj) {
  console.log('!!! call changeSettings()');
  return (dispatch) => {
    console.log(dispatch);
    dispatch({
      type: CHANGE_SETTINGS,
      payload: obj
    })
  }
}
