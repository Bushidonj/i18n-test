import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '../../../components/ui/dialog.tsx'
import {
  FormValues,
  isDateDisabled,
  isDateRangeInvalid
} from '../utils/calendar.utils.ts'
import { UseFormSetValue } from 'react-hook-form'
import { Button } from '../../../components/ui/button.tsx'
import { ReservationDto } from '../../../api/models'
import { CASADANA_KEYS } from '../../../i18n/keys/CASADANA_KEYS.ts'
import { useTranslation } from 'react-i18next'

export function CalendarModal({
  date,
  setValue,
  getReservations
}: {
  date: Pick<FormValues, 'from' | 'to'>
  setValue: UseFormSetValue<FormValues>
  getReservations: ReservationDto[]
}) {
  const { t } = useTranslation()
  const toInputValue = (d?: Date) =>
    d ? new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10) : ''

  const parseInputDate = (val: string) => (val ? new Date(val + 'T00:00:00') : undefined)

  const handleFromChange = (val: string) => {
    const newFrom = parseInputDate(val)
    const tentativeTo = date.to
    if (newFrom && isDateDisabled(newFrom, getReservations)) return
    if (isDateRangeInvalid(getReservations, newFrom, tentativeTo)) return
    setValue('from', newFrom)
  }

  const handleToChange = (val: string) => {
    const newTo = parseInputDate(val)
    const tentativeFrom = date.from
    if (newTo && isDateDisabled(newTo, getReservations)) return
    if (isDateRangeInvalid(getReservations, tentativeFrom, newTo)) return
    setValue('to', newTo)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border rounded-xl divide-y cursor-pointer">
          <div className="grid grid-cols-2 divide-x">
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">
                {t(CASADANA_KEYS.reservation.form.checkin)}
              </div>
              <div className="text-sm">
                {date.from
                  ? new Date(date.from).toLocaleDateString('fr-FR')
                  : t(CASADANA_KEYS.reservation.form.calendar.add_date)}
              </div>
            </div>
            <div className="p-3 space-y-1">
              <div className="text-xs font-semibold uppercase">
                {t(CASADANA_KEYS.reservation.form.checkout)}
              </div>
              <div className="text-sm">
                {date.to
                  ? new Date(date.to).toLocaleDateString('fr-FR')
                  : t(CASADANA_KEYS.reservation.form.calendar.add_date)}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit p-10 gap-0">
        <DialogTitle>Reserver</DialogTitle>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              {t(CASADANA_KEYS.reservation.form.checkin)}
            </label>
            <input
              type="date"
              className="border rounded-md p-2"
              value={toInputValue(date.from)}
              onChange={(e) => handleFromChange(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              {t(CASADANA_KEYS.reservation.form.checkout)}
            </label>
            <input
              type="date"
              className="border rounded-md p-2"
              value={toInputValue(date.to)}
              onChange={(e) => handleToChange(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>{t(CASADANA_KEYS.reservation.form.modal.letsgo)}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
