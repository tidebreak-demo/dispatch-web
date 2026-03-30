import { useMemo } from "react"

export function JobCard({ job }: { job: Job }) {
  const window = useMemo(() => formatWindow(job.scheduledAt), [job.scheduledAt])

  return (
    <article className="job-card">
      <h3>{job.site.name}</h3>
      <p>{window}</p>
      <p>{job.crew?.name ?? "Unassigned"}</p>
    </article>
  )
}
