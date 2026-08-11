import type { Bus, BusOption } from '../types'
/** Scores viable buses against the requested journey; no UI-specific values live here. */
export function findMatches(buses: Bus[], pickup: string, destination: string, weight: number): BusOption[] {
  return buses.filter((bus) => bus.availableCapacityKg >= weight).map((bus) => {
    const from = bus.stops.indexOf(pickup); const to = bus.stops.indexOf(destination); const direct = from >= 0 && to > from
    const routeScore = direct ? 40 : 0
    const destinationScore = bus.stops.includes(destination) ? 20 : 0
    const capacityScore = Math.min(15, Math.round((bus.availableCapacityKg / 20) * 15))
    const fastest = Math.min(...buses.map((candidate) => candidate.etaMinutes))
    const etaScore = Math.max(0, Math.round(15 * fastest / bus.etaMinutes))
    const transferScore = direct ? 10 : 0
    const score = routeScore + destinationScore + capacityScore + etaScore + transferScore
    const reasons = [direct ? 'Direct route between your selected stops' : 'Route needs a transfer', `${bus.availableCapacityKg} kg cargo space available`, direct ? 'No transfer required' : 'Transfer may be required', bus.etaMinutes === fastest ? 'Fastest estimated arrival' : `${bus.etaMinutes} minute estimated arrival`, score >= 90 ? 'Lowest-risk match' : 'Strong route compatibility']
    return { bus, score, reasons }
  }).filter((match) => match.score > 0).sort((a,b) => b.score - a.score)
}
