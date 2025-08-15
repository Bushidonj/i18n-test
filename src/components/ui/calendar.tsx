'use client'

// Minimal stub: not used in the app currently. Kept to avoid import errors.
export type CalendarProps = {
  className?: string
}

function Calendar({ className }: CalendarProps) {
  return <div className={className} />
}
Calendar.displayName = 'Calendar'

export { Calendar }
