import { useCallback } from "react"

export function useDragAssign(onAssign: (jobId: string, crewId: string) => void) {
  return useCallback(
    (event: DragEvent) => {
      const jobId = event.dataTransfer?.getData("job")
      const crewId = (event.target as HTMLElement).dataset.crew
      if (jobId && crewId) onAssign(jobId, crewId)
    },
    [onAssign],
  )
}
