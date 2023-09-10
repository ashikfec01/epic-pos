import { Brand } from "@/@domain/types/Brand"

export type BrandListProps = {
    error: any, isFetching: boolean, brands: Brand[],getBrandsAction: Function
}