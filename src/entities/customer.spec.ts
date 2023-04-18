import { expect, test } from "vitest"
import { Customer } from "./customer"


test('test se nome e igual e a idade e equivalente ao declarado', () => {
    

    const customer = new Customer({
        name: 'John Doe',
        cpf:'011111111111',
        age:25
    })

    expect(customer).toBeInstanceOf(Customer)
    expect(customer.name).toEqual('John Doe')
    expect(customer.age).toEqual(25)
    

})

