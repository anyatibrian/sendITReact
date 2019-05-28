import {LOGIN_ERROR,LOGIN_SUCCESS,IS_LOADING} from "../../actions/typesActions";
import loginReducer from "../../reducers/loginReducer";

let initialState;
describe('Login Reducer',  ()=>{
  beforeEach(()=>{
    initialState={
      loginSuccess:{},
      loginError:{},
      loginRedirect:false,
      isLoading:false,
      isLoggedIn:false
    }
  });
  it('should test the initial state of the redcer ', ()=>{
    const expectedState = loginReducer(undefined,{});
    expect(expectedState).toEqual(initialState);
  });
  it('should test LOGIN_SUCCESS reducer', ()=>{
    const payload = {"access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz"}


    ;
    const expectedState = loginReducer(initialState,{
      type:LOGIN_SUCCESS,
      payload:payload
    });
    expect(expectedState).toEqual({...initialState,
      loginSuccess:payload,
      loginRedirect: true,
      isLoggedIn:true});
  });
  it('should test LOGIN_ERROR reducer', ()=>{
    const payload = {"message":"username and password does not exist"}



    ;
    const expectedState = loginReducer(initialState,{
      type:LOGIN_ERROR,
      payload:payload
    });
    expect(expectedState).toEqual({...initialState,
      loginError:payload,
      loginRedirect: false,
      isLoggedIn:false});
  });
  it('should test IS_LOADING reducer', ()=>{
    const expectedState = loginReducer(initialState,{
      type:IS_LOADING,
    });
    expect(expectedState).toEqual({...initialState,
      isLoading: true,
      isLoggedIn:false});
  });
});