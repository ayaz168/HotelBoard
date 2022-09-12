const { createContext, useReducer, useEffect } = require("react");

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, //check local storage if user use t else null
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}; //WILL BE USED IN MY CONTEXT

export const AuthContextProvider = ({ children }) => {
  // Children is components where we want to get the date to
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //to save user in local storage use useEffect so no logout on refresh

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]); //dependency on state.user

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
