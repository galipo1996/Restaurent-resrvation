import React, { useState } from 'react'
import ReactCalender from 'react-calendar'
import { add, format } from 'date-fns'
// interface CalenderProps {}
// {}: CalenderProps
interface datetype {
  justDate: Date | null
  dateTime: Date | null
}
const Calender = () => {
  const [date, setDate] = useState<datetype>({ dateTime: null, justDate: null })

  const getTimes = () => {
    if (!date.justDate) return
    const { justDate } = date
    const begin = add(justDate, { hours: 9 })
    const end = add(justDate, { hours: 22 })

    const interval = 30
    const times = []
    for (let i = begin; i <= end; i = add(i, { minutes: interval })) {
      times.push(i)
    }
    return times
  }
  const times = getTimes()

  return (
    <div className='flex h-screen flex-col items-center justify-center '>
      {date.justDate ? (
        <div className='flex gap-4'>
          {times?.map((time, index) => {
            return (
              <div className='rounded-sm bg-gray-100 p-2' key={`date-${index}`}>
                <button
                  type='button'
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                >
                  {format(time, 'kk:mm')}
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <ReactCalender
          minDate={new Date()}
          className='REACT-CALENDER p-2'
          view='month'
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  )
}

export default Calender
