declare readonly const Method = {
  CREATE: 'CREATE',
  UPDATE_ONE: 'UPDATE_ONE',
  DELETE_ONE: 'DELETE_ONE',
  CREATE_MANY: 'CREATE_MANY',
  UPDATE_MANY: 'UPDATE_MANY',
  DELETE_MANY: 'DELETE_MANY',
  GET_ONE: 'GET_ONE',
  GET_MANY: 'GET_MANY',
}
declare readonly const Type = {
  ON_REQUEST: 'ON_REQUEST',
  ON_SUCCESS: 'ON_PUBLIST',
  ON_FAILURE: 'ON_FAILURE',
  ROLL_BACK: 'ROLL_BACK'
}
declare readonly const RoleEventKey = {
  [Method.CREATE]: (type)=> `ROLE.${[Method.CREATE]}.${type}`,
  [Method.CREATE_MANY]: (type)=> `ROLE.${[Method.CREATE_MANY]}.${type}`,
  [Method.UPDATE_ONE]: (type)=> `ROLE.${[Method.UPDATE_ONE]}.${type}`,
  [Method.UPDATE_MANY]: (type)=> `ROLE.${[Method.UPDATE_MANY]}.${type}`,
  [Method.DELETE_ONE]: (type)=> `ROLE.${[Method.DELETE_ONE]}.${type}`,
  [Method.DELETE_MANY]: (type)=> `ROLE.${[Method.DELETE_MANY]}.${type}`,
  [Method.GET_ONE]: (type)=> `ROLE.${[Method.GET_ONE]}.${type}`,
  [Method.GET_MANY]: (type)=> `ROLE.${[Method.GET_MANY]}.${type}`,
}
module.exports = {
  Method, Type, RoleEventKey
}