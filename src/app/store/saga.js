import { all, take, takeLatest } from 'redux-saga/effects'

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* greetingSaga() {
    console.log('Greetings Sagas!')
}

export default function* rootSaga() {
    yield takeLatest('HELLO_SAGA', helloSaga)
    yield takeLatest('GREET_SAGA', greetingSaga)
}