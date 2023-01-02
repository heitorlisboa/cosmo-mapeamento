export function getScrollWidthAsPx() {
  if (typeof window === 'undefined' || typeof document === 'undefined')
    return '0px';

  const paddingRight = parseInt(
    window.getComputedStyle(document.body).paddingRight
  );
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  return paddingRight + scrollbarWidth + 'px';
}
