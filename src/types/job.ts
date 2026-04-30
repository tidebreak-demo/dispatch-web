export type Job = {
  id: string
  scheduledAt: string
  site: { id: string; name: string }
  crew?: { id: string; name: string }
  status: "unassigned" | "assigned" | "in_progress" | "completed"
}
