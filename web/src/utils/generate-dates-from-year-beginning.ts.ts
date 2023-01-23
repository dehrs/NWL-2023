import dayjs from "dayjs";

export function generateDatesFromBeginning(){
  const firstDaysOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let compareDate = firstDaysOfTheYear
  
  while (compareDate.isBefore(today)){
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1,'day')
  }

  return dates

}