"use strict";

import Vue from 'vue';
import axios from "axios";

import { Toast } from 'vant';
// import qs from 'qs';//序列化工具,axios已经下载，可直接引用。什么时候需要序列化？post的请求格式为form-data时使用，即content-type为application/x-www-form-urlencoded时使用；
Vue.use(Toast);
//设置开发/生产公共请求头
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ?"https://test.com":"";
/**
 * 请求拦截
 */
axios.interceptors.request.use(
    function(config) {
      // 如果你想在发送请求前做些事情
 
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
);
/**
 * 响应拦截
 */
axios.interceptors.response.use(
    function(config) {
      // 如果你想在获取到数据之后做些事情
 
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
);
/**
 * 
 * 例如要改变header信息和超时,应当传入{header:{'X-Requested-With': 'XMLHttpRequest'},timeout: 1000}  
 * 
 */
const request= options =>{
    const {method ='get',url='',data={},showLoding=true,other={}} = options;
    if(showLoding){
        Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '请稍候...'
        });   
    }
    let axiosOps={
        method,
        url,
        ...other
    };
    if(method==='get'){
        axiosOps.params=data
    }else{
        axiosOps.data = data
    }
    return axios(axiosOps)
        .then(res=>{
            if(showLoding)Toast.clear();
            if(res.data.succ){
                return res.data.data;
            }else{
                if(showLoding)Toast.clear();
                Toast(res.data.errMsg);
                return;
            }
        })
        .catch(err=> {
            if(showLoding)Toast.clear();
            Toast(err.message || "请求数据失败");
        })
    }
export default request;
