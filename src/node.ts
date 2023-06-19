import { 
    request, Agent, 
    getGlobalDispatcher, 
    setGlobalDispatcher 
} from 'undici'

const dispatcher = getGlobalDispatcher
const useDefaultAgent = () => setGlobalDispatcher(
    new Agent({ connect: { timeout: 60_000 }})
)

export {
    request, request as default,
    dispatcher, useDefaultAgent
}