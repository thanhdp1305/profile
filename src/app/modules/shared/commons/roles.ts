import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import jwt_decode from 'jwt-decode';
import { getAccessToken } from './cache-store';

@Injectable()
export class Roles {
  constructor() {
    //
  }

  isValid(roles: string[] = []): boolean {
    return true;
    const token: string | null = getAccessToken();
    const decode_token: Token = new Token(jwt_decode(token || ''));

    for (let i = 0; i < roles.length; i++) {
      if (decode_token.authorities.includes(roles[i])) return true;
    }

    return false;
  }
}
