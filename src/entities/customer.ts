export interface CustomerProps {
    name: string;
    cpf: string;
    age: number;
}

export class Customer {
    private props: CustomerProps

    get name () {
        return this.props.name;
    }

    get cpf () {
        return this.props.cpf;
    }
    
    get age () {
        return this.props.age;
    }

    constructor (props: CustomerProps) {
       const { age, cpf } = props;

       if(age <= 0 ) {
            throw new Error('invalid age')
        }

       if(cpf.length !== 11){
            throw new Error('Invalid cpf size')
       }

       this.props = props
    }
}