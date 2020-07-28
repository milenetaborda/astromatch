const initialState = {
  theProfileOnScreen: null,
  matches: [],
  selectedProfile: {}
}

const profiles = (state = initialState, action) => {
  switch(action.type) {

    case 'SET_PROFILE_TO_SWIPE':
      const newProfile = action.payload.profile
      return { ...state, theProfileOnScreen: newProfile}

    case 'SET_MATCHED_PROFILE': 
      return {...state, matches: action.payload.matchedProfile}

    case 'SET_SELECTED_PROFILE':
      const profile = action.payload.SelectedProfile;
      return {...state, selectedProfile: profile}

    default: 
    return state
  }
}

export default profiles
