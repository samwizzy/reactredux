// export function logger({ getState }) {
//     return next => action => {
//         console.log('will dispatch', action)

//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action)

//         console.log('state after dispatch', getState())

//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue
//     }
// }

export const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export const crashlytics = store => next => action => {
    try{
        return next(action)
    }catch(err){
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