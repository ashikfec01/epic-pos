import { Rack } from "@/@domain/types/Rack"


export type RackListProps = {
    error: any, isFetching: boolean, racks: Rack[],getRacksAction: Function
}