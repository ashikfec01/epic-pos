import { Manufacturer } from "@/@domain/types/Manufacturer"


export type ManufacturerListProps = {
    error: any, isFetching: boolean, manufacturers: Manufacturer[], getManufacturersAction: Function
}