export const SAVE_USER = 'SAVE USER';

export function signUp(data){
    return{
        type: SAVE_USER,
        payload: data
    }
}