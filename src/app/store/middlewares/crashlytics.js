export const crashlytics = store => next => action => {
    try{
        return next(action)
    }catch(err) {
        console.error('Caught an exception', err)
        window.Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}