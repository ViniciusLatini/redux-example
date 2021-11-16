export const addCounter = (count) => (dispatch) => {
  count++;
  dispatch({
    type:'@counter/addCounter',
    payload: count
  })
}