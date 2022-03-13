import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: any;

  constructor() {
    this.init();
  }

  /**
   * Initialise user
   * Currently sets the user id as default from the environment variables
   */
  init() {
    this.user = {
      id: environment.user.default,
    };
  }

  /**
   * Get the current user id
   *
   * @returns number
   */
  getUserId() {
    return this.user.id;
  }
}
