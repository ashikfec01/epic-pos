import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { UnitListProps } from './unit.types'
import { Creators } from '@/stores/unitReducer';
import { selectError, selectIsFetching, selectUnits } from '@/@domain/models/selectors/unit.selector';
import { createStructuredSelector } from 'reselect';

 const UnitList : FC<UnitListProps> = ({
    error, isFetching, units, getUnitsAction
}) => {
        useEffect(()=>{
            getUnitsAction('');
        },[]);
        useEffect(()=>{
            console.table(units)
        }, [isFetching])
  
  return (
    <div>UnitList</div>
  )
}


const mapStateToProps = createStructuredSelector({
    error: selectError,
    isFetching: selectIsFetching,
    units: selectUnits
})

const mapDispatchToProps = {
    getUnitsAction: Creators.getUnits,
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)