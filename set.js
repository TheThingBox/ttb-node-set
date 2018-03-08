module.exports = function(RED) {
    "use strict";

	function set(n) {
		RED.nodes.createNode(this, n);

		this.value = n.value;
		this.property = n.property;

		var node = this;

		this.on("input", function(msg) {
			var property = node.property;
			if(typeof property === "undefined" || property == null || property == "") {
				property = "payload"; // use by default payload
			}
			msg[property] = node.value;
			node.send(msg);
		});
	}
	RED.nodes.registerType("set", set);
}