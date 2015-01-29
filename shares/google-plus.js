var util = require("util"),
	config = require("../config"),
	http = require("http"),
	needle = require("needle"),
	Promise = require("bluebird");

module.exports = function(url) {
	return new Promise(function(resolve) {
		needle.post("https://clients6.google.com/rpc", JSON.stringify([{
			"method": "pos.plusones.get",
			"id": "p",
			"params":{
				"nolog": true,
				"id": url,
				"source": "widget",
				"userId": "@viewer",
				"groupId": "@self"
			},
			"jsonrpc": "2.0",
			"key": "p",
			"apiVersion": "v1"
		}]), {
			headers: { "Content-Type": "application/json" }
		}, function(error, response) {
			if (error) resolve(0);
			else resolve(response.body[0].result.metadata.globalCounts.count);
		});
		
//		var req = http.request({
//			hostname: config.shares.googleplus,
//			method: "POST"
//		}, function(res) {
//			var data = "";
//
//			res.on("data", function(chunk) {
//				data += chunk;
//			});
//
//			res.on("end", function() {
//				resolve(JSON.parse(data)[0].result.metadata.globalCounts.count);
//			});
//		});
//
//		req.write(JSON.stringify(
//			[{
//				"method": "pos.plusones.get",
//				"id": "p",
//				"params":{
//					"nolog": true,
//					"id": url,
//					"source": "widget",
//					"userId": "@viewer",
//					"groupId": "@self"
//				},
//				"jsonrpc": "2.0",
//				"key": "p",
//				"apiVersion": "v1"
//			}]
//		));
//
//		req.end();
	});
}

//
//[{
//    "method":"pos.plusones.get",
//    "id":"p",
//    "params":{
//        "nolog":true,
//        "id":"http://stylehatch.co/",
//        "source":"widget",
//        "userId":"@viewer",
//        "groupId":"@self"
//        },
//    "jsonrpc":"2.0",
//    "key":"p",
//    "apiVersion":"v1"
//}]

//[{
//    "result": { 
//        "kind": "pos#plusones", 
//        "id": "http://stylehatch.co/", 
//        "isSetByViewer": false, 
//        "metadata": {
//            "type": "URL", 
//            "globalCounts": {
//                "count": 3097.0
//            }
//        }
//    } ,
//    "id": "p"
//}]