import { useMemo } from "react"

export function ScheduleBoard({ jobs }: { jobs: Job[] }) {
  const rows = useMemo(() => groupByCrew(jobs), [jobs])

  return (
    <div className="board">
      {rows.map((row) => (
        <CrewLane key={row.crew.id} crew={row.crew}>
          {row.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </CrewLane>
      ))}
    </div>
  )
}
