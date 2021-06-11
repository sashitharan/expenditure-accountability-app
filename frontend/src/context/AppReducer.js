export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        //filter out anyth that has the id (cause this is delete)
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        //filter out anyth that has the id (cause this is delete)
        transactions: [action.payload, ...state.transactions]
      
      };

    default:
      return state;
  }
};
