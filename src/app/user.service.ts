import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Root, User } from './user';

@Injectable( )
export class UserService {
  //var
  baseUrl = 'https://reqres.in/api/users/';
  userList: User[] = [];
  userList$ = new BehaviorSubject<User[]>([]);

  //life cycle
  constructor(private http: HttpClient) {}

  //method
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap((Response: any) => {
        this.userList = Response.data;
        console.log(this.userList);
      }),
      map((Response: Root) => Response.data as User[])
    );
  }
}
