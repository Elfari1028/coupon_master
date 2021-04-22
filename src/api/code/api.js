import request from '@/http/request'

const url = {
  create:'/api/code/create',
  list:'/api/code/list',  
  search:'/api/code/search',  

}

export const code = {
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