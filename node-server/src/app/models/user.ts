
class User {
  id: number;
  name: { first: string; last: string; }
  age: number;
  email: string;
  password: string;

  requests: [];
  friends: [];
  posts: [];

  stats = {
    friends: 0,
    posts: 0,
    likes: 0,
  }


  constructor(data) {
    this.id = data.id;
    this.age = data.age;
    this.email = data.email;
    this.name = { first: data.name.first, last: data.name.last };
    this.requests = [];
    this.friends = [];
    this.posts = [];
    this.stats = {
       active_requests: 0
       friends: 0,
       posts: 0,
    }
  }
  addRequest(request) {
    this.requests.push(request);
  }
  addPost(post) {
    this.posts.push(post);
  }
  addFriend(user) {
    this.friends.push(user)
  }
  /** TODO: Accept Request **/
  acceptRequest() {}
  removeRequest() {}
  removeFriend() {}
  removePost() {}
  
  setStats() {
    this.stats.active_requests = this.requests.length;
    this.stats.friends = this.friends.length;
    this.stats.posts = this.posts.length;
  }
  forEachPost(cb: Function) { this.posts.forEach((post) => cb)}
  forEachFriend(cb: Function) { this.friends.forEach((friend) => cb)}
  forEachRequest(cb: Function) { this.requests.forEach((request) => cb)}
}

export default User;
export type { IUser }
