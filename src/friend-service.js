export class FriendsService {

  getFriends() {
    return [this.getFriend('Joe'), this.getFriend('Lisa'), this.getFriend('Pete')];
  }

  getFriend(name) {
    return { name: name };
  }
}