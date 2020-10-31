
import moment from 'moment'

const CURRENT_DATE = moment().format('YYYY-MM-DD')

const toUserFriendlyDate = (date) => {
    
    return moment(date).format('MMMM, D YYYY')

}

export { CURRENT_DATE, toUserFriendlyDate }