import { describe, expect, it} from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appoints-repository";


describe('Create Appointement', () => {
    it('should be able to create an appointment', () => {
        const startsAt = getFutureDate('2023-04-17')
        const endsAt   = getFutureDate('2023-04-20')
    
        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)
    
        
        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })

    it('should not be able to create an appointment with overlapping dates', async () => {
        const startsAt = getFutureDate('2023-04-17')
        const endsAt   = getFutureDate('2023-04-20')
    
        const appointmentsRepository = new InMemoryAppointmentsRepository()
        const createAppointment = new CreateAppointment(appointmentsRepository)
       

        await(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        }))

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-04-18'),
            endsAt: getFutureDate('2023-04-19')
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-04-16'),
            endsAt: getFutureDate('2023-04-19')
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-04-16'),
            endsAt: getFutureDate('2023-04-21')
        })).rejects.toBeInstanceOf(Error)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2023-04-18'),
            endsAt: getFutureDate('2023-04-19')
        })).rejects.toBeInstanceOf(Error)
    })
})