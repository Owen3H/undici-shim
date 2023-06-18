import { 
    request, Agent, 
    getGlobalDispatcher, 
    setGlobalDispatcher 
} from 'undici'

export const dispatcher = getGlobalDispatcher
export const useDefaultAgent = () => setGlobalDispatcher(
    new Agent({ connect: { timeout: 60_000 }})
)

export default request