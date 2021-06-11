export default (state, action) => {
  switch (action.type) {

    case 'GET_TRANSACTIONS': 
    return{
      ...state,
      loading: false,
      transactions: action.payload
    }

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        //filter out anyth that has the id (cause this is delete)
        transactions: state.transactions.filter(
          (transactions) => transactions._id !== action.payload
        ),
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        //filter out anyth that has the id (cause this is delete)
        transactions: [...state.transactions, action.payload],
      };

      case 'TRANSACTION_ERROR':
        return{
          ...state,
          error: action.payload
        }


    default:
      return state;
  }
};
