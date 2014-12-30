function getShortMessages(messages) {
	var payload = messages.map(function(obj) {
		return obj.message;
	});
	return payload.filter(function(message) {
		return message.length < 50;
	});
	// return filtered


	// return messages.map(function(obj)
	// {
	// 	return obj.message;

	// }).filter(function(message) {
	// 	return message.length < 50;
	// })


}

module.exports = getShortMessages