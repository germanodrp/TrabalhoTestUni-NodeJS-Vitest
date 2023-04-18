import { describe, expect, it} from "vitest";
import { Customer } from "../entities/customer";
import { InMemoryCustomerRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { CreateCustomer } from "./create-customer";



describe('Create Appointement', () => {
    it('should be able to create an customer', () => {
       
    
        const customerRepository = new InMemoryCustomerRepository()
        const createCustomer = new CreateCustomer(customerRepository)
    
        
        expect(createCustomer.execute({
            name: 'John Doe',
            cpf:'01111111111',
            age:25
        })).resolves.toBeInstanceOf(Customer)
    })

    

        

       
})