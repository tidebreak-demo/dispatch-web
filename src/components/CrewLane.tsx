import { useMemo } from "react"

export function CrewLane({ crew, children }: { crew: Crew; children: ReactNode }) {
  return (
    <section data-crew={crew.id}>
      <header>{crew.name}</header>
      {children}
    </section>
  )
}
