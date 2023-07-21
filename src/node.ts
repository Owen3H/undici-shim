import Undici, { request } from 'undici'

const useDefaultAgent = () => {
    Undici.setGlobalDispatcher(new Undici.Agent({ 
        connect: { timeout: 60_000 }
    }))
}

export * from 'undici'
export {
    request,
    request as default,
    useDefaultAgent
}