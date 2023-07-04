import {
    request, pipeline, stream, upgrade, connect,
    getGlobalDispatcher, setGlobalDispatcher,
    Agent, Request, Response,
    FormData, Headers
} from 'undici'

const dispatcher = getGlobalDispatcher

const useDefaultAgent = () => {
    setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 }}))
    return dispatcher()
}

export default request
export {
    request as fetch,
    pipeline, stream, upgrade, connect,
    dispatcher, useDefaultAgent,
    Agent, Request, Response,
    FormData, Headers
}