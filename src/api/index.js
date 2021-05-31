/**
 * 接口请求
 */
import request from '../plugins/axios'

export const getSomeThings = data=>{
  const params={
    method:'post',
    url:'/api/getSomeThings',
    data
  }
  return request(params)
}