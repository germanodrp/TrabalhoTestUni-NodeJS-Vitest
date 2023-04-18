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
       const {age} = props;

       if(age <= 0 ) {
            throw new Error('invalid age')
        }

       this.props = props
    }
}