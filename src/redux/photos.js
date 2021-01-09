const initialState = {
  photos: [],
  selectedUserId: null,
  loading: false,
}

export const photos = (state = initialState, action) => {
  switch (action.type) {
    case 'albums/select':
      return {
        ...state,
        selectedUserId: action.payload
      }

    case 'photos/load/start':
      return {
        ...state,
        loading: true
      }

    case 'photos/load/success':
      return {
        ...state,
        photos: action.payload,
        loading: false
      }

    default:
      return state;
  }
}