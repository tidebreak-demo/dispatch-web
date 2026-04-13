import { useMemo } from "react"

export function BoardFilters({ onChange }: { onChange: (f: Filters) => void }) {
  return (
    <form className="filters" onChange={(event) => onChange(readFilters(event.currentTarget))}>
      <select name="crew" />
      <select name="status" />
    </form>
  )
}
