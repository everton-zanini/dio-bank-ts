
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount:PeopleAccount = new PeopleAccount(123456,'Zanini',1)
peopleAccount.deposit()

const companyAccount:CompanyAccount = new CompanyAccount('Adm',0)
companyAccount.deposit()