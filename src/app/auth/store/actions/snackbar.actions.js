export const OPEN_MESSAGE_ALERT = '@SNACKBAR/DISPLAY MESSAGE ALERT'
export const CLOSE_MESSAGE_ALERT = '@SNACKBAR/DISPLAY MESSAGE ALERT'

export function openSnackbar(data) {
    return ({
        type: OPEN_MESSAGE_ALERT,
        payload: data
    })
}

export function closeSnackbar(data) {
    return ({
        type: CLOSE_MESSAGE_ALERT,
    })
}