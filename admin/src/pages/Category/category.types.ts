import { Category } from "@/@domain/types/Category"


export type CategoryListProps = {
    error: any, isFetching: boolean, categories: Category[], getCategoriesAction: Function
}