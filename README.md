Welcome to lameStorage
===================


lameStorage is a small library that makes working with *localStorage* easier

----------
Documentation
-------------
### Basic Usage
```javascript
const user = new lameStorage("user1", { name: "George", age:25 });
// Update the user1 and get the all object
user.update({ age: 26, isMarried: true }).getValue()
/*
	{
		name: "George",
		age: 26,
		isMarried: true
	}
*/
```
### Other functions

#### .delete()
Deletes all the data that belongs the current user

```javascript
user.delete();
user.getValue(); // ERR: " value not found"
```
### License / Credits
lameStorage is released under the MIT license.