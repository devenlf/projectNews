import { get, post } from './request'
export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p)