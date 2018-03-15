import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//convert data to json
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostService {

  result: any;

  constructor(private _http: Http) { }

  getPost(){
    return this._http.get("/api/posts")
      .map(result => this.result = result.json());
  }

  getPostByID(id){
    return this._http.get('api/details/' + id)
      .map(result => this.result = result.json());
  }

  insertPost(post: Post){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/api/posts', JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }
}