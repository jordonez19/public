import moment from 'moment'
import 'moment/locale/es'

/* Helper de fecha para saber hace cuanto tiempo se realizo el registro */
export const handleDiffDate = (dateParam) => {
    let itemDate = moment(dateParam).format("YYYY-MM-DD hh:mm:ss A")
    return moment(itemDate).fromNow()
}

export const handleDateFormat = (dateParam) => {
    return moment(dateParam).format("YYYY-MM-DD hh:mm:ss A")
}

export const handleMomentDate = (newDate, hms = false) => {

    let momentDate = moment(newDate).format("YYYY-MM-DD hh:mm:ss");
    if (hms) {
        momentDate = moment(newDate).format("YYYY-MM-DD");
    }
    if (moment(newDate, "YYYY-MM-DD hh:mm:ss").isValid()) {

        return momentDate;
    }

    return newDate;
}