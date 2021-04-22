import request from '@/http/request'

const url = {
  create:'/api/coupon/create',
  list:'/api/coupon/list',  
  search:'/api/coupon/search',  

}

export const coupon = {
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