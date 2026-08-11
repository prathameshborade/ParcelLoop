export type ParcelStatus = 'DRAFT' | 'BOOKED' | 'LOADED' | 'IN_TRANSIT' | 'ARRIVING' | 'ARRIVED' | 'READY_FOR_COLLECTION' | 'DELIVERED'
export type Bus = { id: string; routeLabel: string; stops: string[]; departureTime: string; arrivalTime: string; capacityKg: number; availableCapacityKg: number; price: number; etaMinutes: number; operator: string }
export type BusOption = { bus: Bus; score: number; reasons: string[] }
