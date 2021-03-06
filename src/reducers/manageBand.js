export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_BAND':
      return {bands: state.bands.filter(b => b !== action.name)}
    default:
      return state;
  }
};
