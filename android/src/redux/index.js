import { createStore} from "redux";
import { Provider} from "react-redux";

const data = {
    thong_tin_ca_nhan: "chiu",
    tien_an_tien_su:"",
    signIn: false,
    than_nhan:''
}
const reducer =(state=data, action)=>{
    switch (action.type){

        case 'SIGN_IN':
            return { ...state, signIn:!state.signIn };
        case 'SIGN_OUT':
            return { ...state, signIn:!state.signIn };
        case 'GET_INFO':
            return { ...state, thong_tin_ca_nhan: action.info}
        case 'GET_VIOLATE':
            return { ...state, tien_an_tien_su: action.tien_an_tien_su}
        case 'GET_HOME':
            return { ...state, than_nhan: action.than_nhan}
        default:
            break;
    }
    return state;
  }
  const store = createStore(reducer);
  export { store }