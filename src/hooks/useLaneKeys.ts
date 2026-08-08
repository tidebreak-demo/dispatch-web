export function useLaneKeys(onMove: (delta: number) => void) {
  return (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") onMove(1)
    if (event.key === "ArrowUp") onMove(-1)
  }
}
