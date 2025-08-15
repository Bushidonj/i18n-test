import { ReservationDto } from '../../../api/models'

export type FormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
  guests: string
  description: string
  from?: Date
  to?: Date
}
export type PriceDetail = { date: Date; price: number }
export type APIPriceData = { date: string; price: number | null }

export const DEFAULT_PRICE = 90

export const isDateDisabled = (
  date: Date,
  existingReservation: ReservationDto[]
): boolean => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  // Normalize input date to start of day for consistent comparison
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return (
    d.getTime() < today.getTime() ||
    existingReservation.some(({ start, end }) => {
      const s = new Date(start)
      const e = new Date(end)
      return d.getTime() >= s.getTime() && d.getTime() <= e.getTime()
    })
  )
}

export const isDateRangeInvalid = (
  existingReservation: ReservationDto[],
  from?: Date,
  to?: Date
): boolean => {
  if (!from || !to) return false
  const f = new Date(from)
  const t = new Date(to)
  f.setHours(0, 0, 0, 0)
  t.setHours(0, 0, 0, 0)
  return existingReservation.some(({ start: resFrom, end: resTo }) => {
    const s = new Date(resFrom)
    const e = new Date(resTo)
    // Overlaps if ranges intersect (inclusive)
    const overlaps = f.getTime() <= e.getTime() && t.getTime() >= s.getTime()
    return overlaps
  })
}

export const defaultValues: FormValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  guests: '1',
  description: '',
  from: undefined,
  to: undefined
}

export function formatPriceData(
  apiData: APIPriceData[],
  defaultPrice: number
): PriceDetail[] {
  return (apiData ?? []).map(({ date, price }) => ({
    date: new Date(date),
    price: price ?? defaultPrice
  }))
}

export function calculateNights(from?: Date, to?: Date): number {
  if (!from || !to) return 0
  const f = new Date(from)
  const t = new Date(to)
  // Normalize to midnight to avoid DST/timezone issues
  f.setHours(0, 0, 0, 0)
  t.setHours(0, 0, 0, 0)
  const MS_IN_DAY = 24 * 60 * 60 * 1000
  return Math.round((t.getTime() - f.getTime()) / MS_IN_DAY)
}

export function groupNightsByPrice(priceDetails: PriceDetail[]) {
  if (!priceDetails.length) return []

  const groupedMap = new Map<number, number>()

  priceDetails.forEach(({ price }) => {
    groupedMap.set(price, (groupedMap.get(price) || 0) + 1)
  })

  return Array.from(groupedMap.entries()).map(([price, nights]) => ({
    price,
    nights
  }))
}

export const toISODate = (date: Date) => {
  const fixedDate = new Date(date)
  fixedDate.setHours(0, 0, 0, 0)
  return fixedDate.toISOString()
}
