// Date calc
export const dateCalc = date => {
    let currentDate = new Date(date),
        userTimeZone = new Date().getTimezoneOffset() / 60 * -1

    return new Date(currentDate.setHours(currentDate.getHours() + userTimeZone))
}


export default dateCalc