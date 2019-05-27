import {SIGN_UP,SIGN_UP_ERRORS, IS_LOADING} from "../../actions/typesActions";
import registerReducer from "../../reducers/registerReducer";

describe('register Reducer', ()=>{
  let intialState;
  beforeEach(()=>{
    intialState={
      signUPSuccess: {},
      signUpError: {},
      registerRedirect:false,
      isLoading:false
    }
  });
  it('should test the initial state of the reducer', ()=>{
    const expectedState = registerReducer(undefined,{});
    expect(expectedState).toEqual(intialState);
  });
  it("should test SIGN_UP action of the reducer",()=>{
    const payload={
        message: 'your account has been created successfully'
      };
    const expectedState = registerReducer(intialState,{
      type:SIGN_UP,
      payload:payload
    });
    expect(expectedState).toEqual({...intialState, registerRedirect: true,signUPSuccess: payload})
  });
  it("should test SIGN_UP_ERROR action of the reducer",()=>{
    const payload={
      message: 'some fields are empty'
    };
    const expectedState = registerReducer(intialState,{
      type:SIGN_UP_ERRORS,
      payload:payload
    });
    expect(expectedState).toEqual({...intialState, registerRedirect: false,signUpError: payload})
  });
      it("should test ISLOADING action of the reducer",()=>{
        const expectedState = registerReducer(intialState,{
          type:IS_LOADING,
        });
        expect(expectedState).toEqual({...intialState, isLoading: true})
      });
}
);