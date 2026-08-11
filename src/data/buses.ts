import type { Bus } from '../types'

export const ROUTE_STOPS = ['Kopargaon Bus Stand', 'Sanjivani University', 'Shirdi Bus Stand']
export const STOPS = [...ROUTE_STOPS, 'Rahata Bus Stand', 'Kopargaon Market', 'Shirdi Temple Road']

export const BUS_FLEET: Bus[] = [
  {
    id: 'BUS-101',
    routeLabel: 'Kopargaon -> Sanjivani -> Shirdi',
    stops: ROUTE_STOPS,
    departureTime: '10:15 AM',
    arrivalTime: '10:57 AM',
    capacityKg: 20,
    availableCapacityKg: 18,
    price: 35,
    etaMinutes: 42,
    operator: 'M. Patil',
  },
  {
    id: 'BUS-204',
    routeLabel: 'Kopargaon -> Rahata -> Shirdi',
    stops: ['Kopargaon Bus Stand', 'Rahata Bus Stand', 'Shirdi Bus Stand'],
    departureTime: '10:40 AM',
    arrivalTime: '11:38 AM',
    capacityKg: 15,
    availableCapacityKg: 8,
    price: 30,
    etaMinutes: 58,
    operator: 'S. Jadhav',
  },
  {
    id: 'BUS-315',
    routeLabel: 'Kopargaon -> Shirdi express',
    stops: ['Kopargaon Bus Stand', 'Shirdi Bus Stand'],
    departureTime: '11:05 AM',
    arrivalTime: '11:55 AM',
    capacityKg: 10,
    availableCapacityKg: 5,
    price: 42,
    etaMinutes: 50,
    operator: 'R. Shinde',
  },
]
