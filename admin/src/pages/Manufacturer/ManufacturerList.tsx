import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { ManufacturerListProps } from './manufacturer.types'
import { createStructuredSelector } from 'reselect';
import { selectError, selectIsFetching, selectManufacturers } from '@/@domain/models/selectors/manufacturer.selector';
import { Creators } from '@/stores/manufacturerReducer';

export const ManufacturerList: FC<ManufacturerListProps> = ({
    error, isFetching, manufacturers, getManufacturersAction
}) => {
    useEffect(()=>{
        getManufacturersAction('');
    },[]);
    useEffect(()=>{
        console.table(manufacturers)
    }, [isFetching])

  return (
    <div>ManufacturerList</div>
  )
}

const mapStateToProps = createStructuredSelector({
    error: selectError,
    isFetching: selectIsFetching,
    manufacturers: selectManufacturers
})

const mapDispatchToProps = {
    getManufacturersAction : Creators.getManufacturer
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerList)