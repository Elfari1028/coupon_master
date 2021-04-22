import request from '@/http/request'

const url = {
  create:'/api/bookset/create',
  list:'/api/bookset/list', 
  search:'/api/bookSetWrap/search' 
 }

export const bookset = {
  create:function(params){
    return request({
      url:url.create,
      method:'post',
      data:params
    })
  },
  list:function(params){
    return request({
      url:url.list,
      method:'get',
      params:params
    })
  },
  search:function(params){
    return request({
      url:url.search,
      method:'get',
      params:params
    })
  },

}