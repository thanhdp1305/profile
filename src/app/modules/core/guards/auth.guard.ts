import { Router } from '@angular/router';
import { Urls } from '../../shared/configs/urls';
import { getAccessToken } from '../../shared/commons/cache-store';
import { inject } from '@angular/core';

export const authGuard = () => {
  const router = inject(Router);

  const token = getAccessToken();

  if (token) {
    return true;
  } else {
    return router.navigate([Urls.signIn]);
  }
};
