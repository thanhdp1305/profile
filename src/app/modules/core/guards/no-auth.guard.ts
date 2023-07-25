import { Router } from '@angular/router';
import { Urls } from '../../shared/configs/urls';
import { getAccessToken } from '../../shared/commons/cache-store';
import { inject } from '@angular/core';

export const noAuthGuard = () => {
  const router = inject(Router);

  const token = getAccessToken();

  if (token) {
    return router.navigate([Urls.home]);
  } else {
    return true;
  }
};
