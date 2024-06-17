const initialState = {
  repos: { loading: false, data: [], error: "" },
};

export const repoReducer = (state = initialState.repos, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    }
    case "FETCH_LOADING": {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
