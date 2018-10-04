(function() {
	// create the global object
	const lameStorage = function(name,obj) {

		this.isObj = function(val) {
			// check the value if it is object
			if(val === null || typeof val !== "object") throw "ERR: parameter must be an object";
		}

		this.getLocalValue = function() {

			const stringifiedValue = localStorage.getItem(this.name);

			if(!stringifiedValue) throw "ERR: value not found";

			return parsedValue = JSON.parse(stringifiedValue);
		}

		this.setLocalValue = function(val) {

			const stringifiedValue = JSON.stringify(val);

			localStorage.setItem(this.name,stringifiedValue);
		}

		this.update = function(obj) {
			// isObj?
			this.isObj(obj);
			// get the local value
			const localValue = this.getLocalValue();
			// check and udpate all the values
			for(key in obj) {
				localValue[key] = obj[key];
			}
			// set the updated values
			this.setLocalValue(localValue);

			return this;
		}

		this.delete = function() {

			if(localStorage.getItem(this.name)) throw "ERR: value not found";
			// remove the existing item
			localStorage.removeItem(this.name);
		}

		this.getValue = function() {

			const stringified = localStorage.getItem(this.name);

			if(!stringified) throw "ERR: value not found";

			return JSON.parse(stringified);
		}
		// set the name
		if(!name) throw "ERR: name is required";
		// check for the name if it is set before
		if(localStorage.getItem(name)) return this.name = name;
		// check the obj
		this.isObj(obj);
		// set the name
		this.name = name;
		// set the value
		localStorage.setItem(this.name, JSON.stringify(obj));
	}
	
	window.lameStorage = lameStorage;

})();





