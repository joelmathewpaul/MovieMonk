/**
 * A User class that represents data for a single
 * user profile.
 */
export default class User {
  constructor(
    id,
    name,
    email,
    profilePhoto,
    headerImage,
    biography,
    dob,
    joined,
    accountType,
    followersCount,
    followingCount
  ) {
    if (this.email === null || this.name === null) {
      throw new Error("Name cannot be empty");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.profilePhoto = profilePhoto;
    this.headerImage = headerImage;
    this.biography = biography;
    this.dob = dob;
    this.joined = joined;
    this.accountType = accountType;
    this.followersCount = followersCount;
    this.followingCount = followingCount;
  }

  static getUserDetails(res) {
    return new User(
      res._id,
      res.name,
      res.email,
      res.profilePhoto,
      res.headerImage,
      res.biography,
      res.dob,
      res.joined,
      res.accountType,
      res.followersCount,
      res.followingCount
    );
  }

  /**
   * Responsible for returning a list of users from the array of users passed in.
   */
  static getListFromJsonArray(results) {
    let vals = [];
    results.forEach((res) => {
      const user = new User(
        res._id,
        res.name,
        res.email,
        res.profilePhoto,
        res.headerImage,
        res.biography,
        res.dob,
        res.joined,
        res.accountType,
        res.followersCount,
        res.followingCount
      );
      vals.push(user);
    });
    return vals;
  }
}
