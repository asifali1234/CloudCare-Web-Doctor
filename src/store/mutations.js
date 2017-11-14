export default {
	registerUser(state, userObject) {
		var user = {};
		user.name = userObject.name;
		user.email = userObject.email;
		user.photoUrl = userObject.photoUrl;
		user.phoneNumber = userObject.phoneNumber;
		user.googleid = userObject.googleid;
		user.loggedIn = true;
		state.user = user;
		state.user.registerComplete = true;
	}
};
