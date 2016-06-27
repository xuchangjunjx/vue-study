
define(['lib/vue'],function(Vue){
	  Vue.component('vt',{
	template:'<table class="table table-hover">'+
        				'<thead>'+
		          			'<th v-for="th in thead" v-if="th.show">{{th.text}}</th>'+
		        		'</thead>'+
		       	' <tbody>'+
			       '   <tr v-for="row in tbody">'+
			             ' <td v-for="th in thead" v-if="th.show">{{row[th.name]}}</td>'+
			         ' </tr>'+
		        	'</tbody>'+
		       ' </table>',
	replace:true,
	props:{
		thead:Array,
		tbody:Array
	}
	});
	return Vue;
});
 