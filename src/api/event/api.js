import request from '@/http/request'

const url = {
  create:'/api/event/create',
  list:'/api/event/list',  
  search:'/api/event/search',  

}

export const event = {
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