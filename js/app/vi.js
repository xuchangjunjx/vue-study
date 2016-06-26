/**
 * 
 * @authors xubowen (xubowen@longshine.com)
 * @date    2016-06-26 22:43:46
 * @version 1.0.0
 */

define(['lib/vue'],function(Vue){
	  Vue.component('vi',{
	template:'<div class="col-md-4"> <div class="form-group">'+
	'<label for="{{input.name}}">{{input.label}}</label>'+
	'<input type="text" class="form-control" name="{{input.name}}" '+
	'id="{{input.name}}"  v-model="input.value"/></div></div>',
	replace:true,
	props:{
		input:Object
	}
	});
	return Vue;
});
 