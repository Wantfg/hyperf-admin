webpackJsonp([20],{"C+ej":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:"云存储配置","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{size:"mini",label:"存储类型"}},[t("el-radio-group",{model:{value:e.dataForm.type,callback:function(a){e.$set(e.dataForm,"type",a)},expression:"dataForm.type"}},[t("el-radio",{attrs:{label:1}},[e._v("七牛")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("阿里云")]),e._v(" "),t("el-radio",{attrs:{label:3}},[e._v("腾讯云")])],1)],1),e._v(" "),1===e.dataForm.type?[t("el-form-item",{attrs:{size:"mini"}},[t("a",{attrs:{href:"http://www.renren.io/open/qiniu.html",target:"_blank"}},[e._v("免费申请(七牛)10GB储存空间")])]),e._v(" "),t("el-form-item",{attrs:{label:"域名"}},[t("el-input",{attrs:{placeholder:"七牛绑定的域名"},model:{value:e.dataForm.qiniuDomain,callback:function(a){e.$set(e.dataForm,"qiniuDomain",a)},expression:"dataForm.qiniuDomain"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路径前缀"}},[t("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.qiniuPrefix,callback:function(a){e.$set(e.dataForm,"qiniuPrefix",a)},expression:"dataForm.qiniuPrefix"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"AccessKey"}},[t("el-input",{attrs:{placeholder:"七牛AccessKey"},model:{value:e.dataForm.qiniuAccessKey,callback:function(a){e.$set(e.dataForm,"qiniuAccessKey",a)},expression:"dataForm.qiniuAccessKey"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"SecretKey"}},[t("el-input",{attrs:{placeholder:"七牛SecretKey"},model:{value:e.dataForm.qiniuSecretKey,callback:function(a){e.$set(e.dataForm,"qiniuSecretKey",a)},expression:"dataForm.qiniuSecretKey"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"空间名"}},[t("el-input",{attrs:{placeholder:"七牛存储空间名"},model:{value:e.dataForm.qiniuBucketName,callback:function(a){e.$set(e.dataForm,"qiniuBucketName",a)},expression:"dataForm.qiniuBucketName"}})],1)]:2===e.dataForm.type?[t("el-form-item",{attrs:{label:"域名"}},[t("el-input",{attrs:{placeholder:"阿里云绑定的域名"},model:{value:e.dataForm.aliyunDomain,callback:function(a){e.$set(e.dataForm,"aliyunDomain",a)},expression:"dataForm.aliyunDomain"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路径前缀"}},[t("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.aliyunPrefix,callback:function(a){e.$set(e.dataForm,"aliyunPrefix",a)},expression:"dataForm.aliyunPrefix"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"EndPoint"}},[t("el-input",{attrs:{placeholder:"阿里云EndPoint"},model:{value:e.dataForm.aliyunEndPoint,callback:function(a){e.$set(e.dataForm,"aliyunEndPoint",a)},expression:"dataForm.aliyunEndPoint"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"AccessKeyId"}},[t("el-input",{attrs:{placeholder:"阿里云AccessKeyId"},model:{value:e.dataForm.aliyunAccessKeyId,callback:function(a){e.$set(e.dataForm,"aliyunAccessKeyId",a)},expression:"dataForm.aliyunAccessKeyId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"AccessKeySecret"}},[t("el-input",{attrs:{placeholder:"阿里云AccessKeySecret"},model:{value:e.dataForm.aliyunAccessKeySecret,callback:function(a){e.$set(e.dataForm,"aliyunAccessKeySecret",a)},expression:"dataForm.aliyunAccessKeySecret"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"BucketName"}},[t("el-input",{attrs:{placeholder:"阿里云BucketName"},model:{value:e.dataForm.aliyunBucketName,callback:function(a){e.$set(e.dataForm,"aliyunBucketName",a)},expression:"dataForm.aliyunBucketName"}})],1)]:3===e.dataForm.type?[t("el-form-item",{attrs:{label:"域名"}},[t("el-input",{attrs:{placeholder:"腾讯云绑定的域名"},model:{value:e.dataForm.qcloudDomain,callback:function(a){e.$set(e.dataForm,"qcloudDomain",a)},expression:"dataForm.qcloudDomain"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路径前缀"}},[t("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.qcloudPrefix,callback:function(a){e.$set(e.dataForm,"qcloudPrefix",a)},expression:"dataForm.qcloudPrefix"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"AppId"}},[t("el-input",{attrs:{placeholder:"腾讯云AppId"},model:{value:e.dataForm.qcloudAppId,callback:function(a){e.$set(e.dataForm,"qcloudAppId",a)},expression:"dataForm.qcloudAppId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"SecretId"}},[t("el-input",{attrs:{placeholder:"腾讯云SecretId"},model:{value:e.dataForm.qcloudSecretId,callback:function(a){e.$set(e.dataForm,"qcloudSecretId",a)},expression:"dataForm.qcloudSecretId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"SecretKey"}},[t("el-input",{attrs:{placeholder:"腾讯云SecretKey"},model:{value:e.dataForm.qcloudSecretKey,callback:function(a){e.$set(e.dataForm,"qcloudSecretKey",a)},expression:"dataForm.qcloudSecretKey"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"BucketName"}},[t("el-input",{attrs:{placeholder:"腾讯云BucketName"},model:{value:e.dataForm.qcloudBucketName,callback:function(a){e.$set(e.dataForm,"qcloudBucketName",a)},expression:"dataForm.qcloudBucketName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Bucket所属地区"}},[t("el-input",{attrs:{placeholder:"如：sh（可选值 ，华南：gz 华北：tj 华东：sh）"},model:{value:e.dataForm.qcloudRegion,callback:function(a){e.$set(e.dataForm,"qcloudRegion",a)},expression:"dataForm.qcloudRegion"}})],1)]:e._e()],2),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=t("VU/8")({data:function(){return{visible:!1,dataForm:{},dataRule:{}}},methods:{init:function(e){var a=this;this.visible=!0,this.$http({url:this.$http.adornUrl("/sys/oss/config"),method:"get",params:this.$http.adornParams()}).then(function(e){var t=e.data;a.dataForm=t&&0===t.code?t.config:[]})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/sys/oss/saveConfig"),method:"post",data:e.$http.adornData(e.dataForm)}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1}}):e.$message.error(t.msg)})})}}},l,!1,null,null,null);a.default=o.exports}});