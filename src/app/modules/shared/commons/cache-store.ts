import { CacheKeys } from '../enums/caches';

export function setAccessToken(token: string): void {
  localStorage.setItem(CacheKeys.appToken, token);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(CacheKeys.appToken);
}

export function revokeUser(): void {
  localStorage.clear();
}
