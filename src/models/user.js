/**
 * A User class that represents data for a single
 * user profile.
 */
export default class User {
    constructor(id, firstName, lastName, userName, profilePicture, dateOfBirth, dateJoined) {
        if (this.userName === null || this.firstName === null || this.lastName === null) {
            throw new Error('Name cannot be empty');
        }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.dateOfBirth = dateOfBirth;
        this.dateJoined = dateJoined;
    }

    static getUserDetails(res) {
        return new User(res._id, res.firstName, res.lastName, res.userName, res.profilePicture, res.dateOfBirth, res.dateJoined);

    }
}

// services
