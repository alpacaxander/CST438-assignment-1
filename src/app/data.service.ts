import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://proj-usersdb.herokuapp.com/User');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getProducts() {
    return this.http.get('http://127.0.0.1:8081/Product');
  }

  getProduct(productId) {
    return this.http.get('http://127.0.0.1:8081/Product/' + productId);
  }

}
