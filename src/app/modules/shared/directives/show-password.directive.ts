export function showPassword(element: HTMLInputElement): void {
  if (!element) {
    return;
  }

  element.type == 'text'
    ? (element.type = 'password')
    : (element.type = 'text');
}
