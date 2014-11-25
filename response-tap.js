rTap = Npm.require('response-tap');

function formatPhone(phone){
	phone = phone.toString();
	if (phone.length == 10){
		return '+1' + phone;
	}
	if (phone.length == 11){
		return '+' + phone
	}
	return phone;
}

rTap.extend('searchByPhone', function (phone, callback){
	var self = this;
	var from = new Date(Date.now() - 1000*60*60*24*29).toISOString().substr(0,10);
	var to = new Date(Date.now() + 1000*60*60*24*1).toISOString().substr(0,10);
	phone = formatPhone(phone);
	self.getCdrids(from, to, {comparisonValue: 'EXACT', type: 'CUSTOMER_NUMBER', value: phone}, function (err, obj){
		if (obj.cdrUniqueIds.length){
			self.getCall(obj.cdrUniqueIds[0], function (err, data){
				callback(err, data);
			});
		} else {
			callback(err, {});
		}
	});
});