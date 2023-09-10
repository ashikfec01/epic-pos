import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { CategoryListProps } from './category.types'
import { createStructuredSelector } from 'reselect';
import { selectCategories, selectError, selectIsFetching } from '@/@domain/models/selectors/category.selector';
import { Creators } from '@/stores/categoryReducer';

export const CategoryList: FC<CategoryListProps> = ({
    error, isFetching, categories, getCategoriesAction
}) => {
    useEffect(()=>{
        getCategoriesAction('');
    },[]);
    useEffect(()=>{
        console.table(categories)
    }, [isFetching])
  return (
    <div>CategoryList</div>
  )
}

const mapStateToProps = createStructuredSelector({
    error: selectError,
    isFetching: selectIsFetching,
    categories: selectCategories
})

const mapDispatchToProps = {
    getCategoriesAction : Creators.getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)