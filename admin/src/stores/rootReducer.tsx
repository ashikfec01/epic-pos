import { combineReducers } from '@reduxjs/toolkit';

import globalReducer from './global.store';
import tagsViewReducer from './tags-view.store';
import userReducer from './user.store';
import warehouseReducer from './warehouseReducer';
import brandReducer from './brandReducer';
import rackReducer from './rackReducer';
import unitReducer from './unitReducer';
import categoryReducer from './categoryReducer';
import manufacturerReducer from './manufacturerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  tagsView: tagsViewReducer,
  global: globalReducer,
  warehouse: warehouseReducer,
  brand: brandReducer,
  rack: rackReducer,
  unit: unitReducer,
  category: categoryReducer,
  manufacturer: manufacturerReducer 
});

export default rootReducer;
