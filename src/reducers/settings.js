import {
  CHANGE_SETTINGS
} from '../constants/Settings'

const initialState = {
  ShowTitle : true,
  ShowContentSnippet : true,
  ShowLink : true,
  ShowContent : false,
  ShowAuthor : false,
  ShowPublishedDate : false
}

export default function changeSettings(state=initialState, action) {
  switch (action.type) {
    case CHANGE_SETTINGS:
      //return { ...state, feedSourceInfo: action.payload};
      console.log(action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
