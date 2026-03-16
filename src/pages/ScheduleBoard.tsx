import { useMemo } from "react"

export function ScheduleBoard({ jobs }: { jobs: Job[] }) {
  return (
    <div className="board">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
