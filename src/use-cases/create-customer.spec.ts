import { describe, expect, it} from "vitest";
import { Customer } from "../entities/customer";
import { InMemoryCustomerRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { CreateCustomer }  from './create-customer'


describe('Create Customer', () => {
    it('should be able to create an customer', () => {
    
        const customerRepository = new InMemoryCustomerRepository()
        const createCustomer = new CreateCustomer(customerRepository)
        
        expect(createCustomer.execute({
            name: 'John Doe',
            cpf:'15314535629',
            age:21
        })).resolves.toBeInstanceOf(Customer)
    })   
})