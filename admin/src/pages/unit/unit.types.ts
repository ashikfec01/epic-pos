import { Unit } from "@/@domain/types/Unit"

export type UnitListProps = {
    error: any, isFetching: boolean, units: Unit[],getUnitsAction: Function
}