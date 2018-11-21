import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import logout from '../actions/logout';
import { connect } from 'react-redux';


class FooterComponent extends Component {
	handleRequest() {
		this.props.logout();
	}

  render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.leftContainer}
					onPress={this.handleRequest.bind(this)}
				>
					<Text style={styles.leftText}>
						{this.props.textLeft}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.rightContainer}
					onPress={this.props.nav}
				>
					<Text style={styles.rightText}>
						{this.props.textRight}
					</Text>
				</TouchableOpacity>
			</View>
		);
  }
}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 'auto',
		width: '100%',
		height: '10%',
	},

	leftContainer: {
		flex: 1,
		backgroundColor: '#00b2f7',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '0.05%'
	},

	rightContainer: {
		flex: 1,
		backgroundColor: '#00b2f7',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: '0.05%',
	},

	rightText: {
		color: '#ffffff',
    letterSpacing: 0.24,
    fontSize: 15,
    fontWeight: '300',
	},

	leftText: {
		color: '#ffffff',
    letterSpacing: 0.24,
    fontSize: 15,
    fontWeight: '300',
	},


});


const mapDispatchToProps = dispatch => ({
	logout: () => {
		dispatch(logout())
	}
});

const Footer = connect(undefined, mapDispatchToProps)(FooterComponent);
export default Footer