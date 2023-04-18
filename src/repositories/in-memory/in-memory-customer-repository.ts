
import { Customer } from "../../entities/customer";

import { CustomerRepository } from "../customer-repository";


export class InMemoryCustomerRepository implements  CustomerRepository {
    public items: Customer[] = []

    async create(customer: Customer): Promise<void> {
        this.items.push(customer)
    }
}