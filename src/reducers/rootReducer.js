const initialState = {
  scoreCount: 0,
};
function rootReducer(state = initialState, action) {
  if (action.type == "INCREMENT") {
    return { scoreCount: state.scoreCount + 1 };
  } else {
    return { scoreCount: (state.scoreCount = 0) };
  }
}

export default rootReducer;
