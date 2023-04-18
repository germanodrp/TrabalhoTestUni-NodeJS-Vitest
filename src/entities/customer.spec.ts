import { expect, test } from "vitest"
import { Customer } from "./customer"


test('name and age same as declared', () => {
    
    const customer = new Customer({
        name: 'John Doe',
        cpf:'01111111111',
        age:25
    })

    expect(customer).toBeInstanceOf(Customer)
    expect(customer.name).toEqual('John Doe')
    expect(customer.age).toEqual(25)
})

test('cannot create with invalid cpf', () => {
    expect(() => {
        return new Customer({
            name: 'John Doe',
            cpf: '01003101230103',
            age: 25
        })
    }).toThrow()

    expect(() => {
        return new Customer({
            name: 'John Doe',
            cpf: '01003',
            age: 25
        })
    }).toThrow()

})

test('cannot create with invalid age', () => {
    expect(() => {
        return new Customer({
            name: 'John Doe',
            cpf: '01003101212',
            age: 0
        })
    }).toThrow()

    expect(() => {
        return new Customer({
            name: 'John Doe',
            cpf: '01003101212',
            age: -1
        })
    }).toThrow()


})

