import { BUY_BOOK } from './bookType'

export const buybook=(number=1)=>{
    return {
        type:BUY_BOOK,
        payload:number
    }
}