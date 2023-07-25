export function isSignedIn(): boolean {
  if (localStorage.getItem('Token')) {
    return true;
  } else {
    return false;
  }
}
