export class Token {
  idUser: string;
  aud: string[] = [];
  user_name: string;
  scope: string[] = [];
  exp: any;
  authorities: string[] = [];
  jti: string;
  client_id: string;
  key: any = null;
  roles_string: string;

  constructor(obj: any = null) {
    obj = obj || {};
    this.idUser = obj.idUser || '';
    this.aud = [];
    if (obj.aud && obj.aud instanceof Array) {
      obj.aud.forEach((item: any) => {
        this.aud.push(item);
      });
    }
    this.user_name = obj.user_name || '';
    this.scope = [];
    if (obj.scope && obj.scope instanceof Array) {
      obj.scope.forEach((item: any) => {
        this.scope.push(item);
      });
    }
    this.exp = obj.exp || 0;
    if (obj.authorities && obj.authorities instanceof Array) {
      obj.authorities.forEach((item: any) => {
        this.authorities.push(item);
      });
    }
    this.jti = obj.jti || '';
    this.client_id = obj.client_id || '';
    this.key = obj.key;
    this.roles_string = obj.roles_string || '';
  }
}
