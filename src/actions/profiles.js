import axios from 'axios'

export const setProfileToSwipe = (profile) => {
	return {
		type: 'SET_PROFILE_TO_SWIPE',
		payload: {
			profile
		}
	}
}

export const setMatchedProfile = (matchedProfile) => {
	return {
		type: 'SET_MATCHED_PROFILE',
		payload: {
			matchedProfile
		}
	}
}

export const setSelectedProfile =  (SelectedProfile) => ({
	type: 'SET_SELECTED_PROFILE',
	payload: {
		SelectedProfile,
	}
}) 

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Milene/clear')

	dispatch(goToMatchScreen())
}

export const getProfile = () => async ( dispatch, setState ) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Milene/person')
  
	dispatch(setProfileToSwipe(response.data.profile))
}

export const chooseProfile = (id, choice) => async (dispatch, setState) => {
	const body = {
		id: id,
		choice: choice
	}
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Milene/choose-person', body)

	dispatch(getProfile())
}
  
export const goToMatchScreen = () => async (dispatch, getState) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Milene/matches')
  
	dispatch(setMatchedProfile(response.data.matches))
}