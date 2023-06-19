import {
    request,
    getGlobalDispatcher, 
    setGlobalDispatcher,
    Agent, Request, Response,
    FormData, Headers
} from 'undici'

const fetch = request
const dispatcher = getGlobalDispatcher

const useDefaultAgent = () => {
    setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 }}))
    return dispatcher()
}

export default fetch
export {
    fetch, dispatcher, useDefaultAgent,
    Agent, Request, Response,
    FormData, Headers
}