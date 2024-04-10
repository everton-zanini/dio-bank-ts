import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }

    getLoan = () => {
        console.log('Voce pegou um emprestimo')
    }

    deposit = ():void =>  {
        console.log('A empresa depositou')
    }
}