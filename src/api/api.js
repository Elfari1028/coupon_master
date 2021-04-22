// import request from '@/utils/request'

// api/api.js
import * as coupon from './coupon/api.js'
import * as event from './event/api.js'
import * as bookset from './bookset/api.js'

import * as code from './code/api.js'
// import { codePointAt } from 'core-js/core/string'

const api = {
    fakeURL:'https://jsonplaceholder.typicode.com/posts',
    ...coupon,
    ...event,
    ...bookset,
    ...code,
}

export default api
