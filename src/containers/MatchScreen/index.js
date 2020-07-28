import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {goToMatchScreen, setSelectedProfile} from '../../actions/profiles'

import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'

class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	render() {
		const {goToSwipeScreen, matches, goToPerfileScreen, setSelectedProfile} = this.props

		const onClickProfileScreen = (profile) => {
			setSelectedProfile(profile)
			goToPerfileScreen()
		}

		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches && matches.map((match) => (
						<ListItem key={match.name} onClick={() => onClickProfileScreen(match)}>
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matches
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToPerfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: () => dispatch(goToMatchScreen()),
	setSelectedProfile: (profile) => dispatch(setSelectedProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
