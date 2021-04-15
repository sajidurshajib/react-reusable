export class Connector{
    
    constructor(baseUrl){
        this._baseUrl = baseUrl || ""
        this._errorHandler = (response)=> console.log('Request error: '+response.statusCode)
        this._successHandler = null
    }

    set baseUrl(url){
        this._baseUrl = url
    }

    get baseUrl(){
        return this._baseUrl
    }


    static joinUrl(baseUrl, relativeUrl){
        return new URL(relativeUrl, baseUrl).href
    }

    joinWithBase(url){
        return Connector.joinUrl(this._baseUrl, url)
    }


    set successHandler(fn){
        this._successHandler = fn
    }

    set errorHandler(fn){
        this._errorHandler = fn
    }

    async get(url, options = {}){
        const response = await fetch(this.joinWithBase(url))
        if(response.ok){

            if(options.successHandler){
                options.successHandler(response)
            }
            else if(this._successHandler){
                this._successHandler(response)
            }

            return await response.json()
        }
        else{
            if(options.errorHandler && typeof options.errorHandler == 'function'){
                return options.errorHandler(response)
            }

            return this._errorHandler(response)
        }
    }

}


export default new Connector