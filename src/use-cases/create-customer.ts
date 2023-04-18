
import { Customer } from "../entities/customer";
import { CustomerRepository } from "../repositories/customer-repository";

interface CreateCustomerRequest {
    name: string;
    cpf: string;
    age: number;
}

type CreateCustomerResponse = Customer


export class CreateCustomer {
    constructor(
        private customerRepository: CustomerRepository
    ){}

    async execute({name, cpf, age}: CreateCustomerRequest): Promise<CreateCustomerResponse> {

        const customer = new Customer({
            name,
            cpf,
            age,
        })

        await this.customerRepository.create(customer)

        return customer
    }
}


