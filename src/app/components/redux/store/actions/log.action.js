export function getLog(){
    return{
        type: 'GET_LOG',
        payload: [
            { content: 'i had a warning error' }
        ]
    }
}