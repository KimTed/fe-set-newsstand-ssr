export const myNewsReducer = (state, { type, payload }) => {
  let currentNode = null;
  let subscriptionLength = -1;
  let subscriptionList= [];
  switch (type) {
    case "INIT_MY_NEWSLIST":
      const newsList = payload.map(pressObj => {
        if(!('bCurrent' in pressObj))  pressObj.bCurrent= false;
        if(!('bSubscription' in pressObj)) pressObj.bSubscription= false;
        return pressObj;
      });

      return newsList;

    case "SET_CURRENT_PRESS":
      const _node = state.find(v => v.bCurrent);
      _node.bCurrent = false;

      state.find(v => v.company === payload).bCurrent = true;
      return [...state];

    default:
      return newsData;
  }
};
