/**
 * A User class that represents data for a single
 * user profile.
 */
export default class User {
    constructor(id, name, email, profilePicture, dateOfBirth, dateJoined) {
        if (this.email === null || this.name === null) {
            throw new Error('Name cannot be empty');
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
        this.dateOfBirth = dateOfBirth;
        this.dateJoined = dateJoined;
    }

    static getUserDetails(res) {
        return new User(res._id, res.name, res.email, res.profilePicture, res.dateOfBirth, res.dateJoined);

    }
}

