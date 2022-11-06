import lodash, { camelCase } from "lodash";
import uniq from "uniq";
import fs from "fs";

//
//
function to_camel() {
	const camel: string = lodash.camelCase(
		"HELLO WORLD THIS IS A BROWSIFY EXAMPLE"
	);
	console.log(camel);
}
function find_unique() {
	const data: Array<number> = [1, 2, 2, 3, 4, 5, 5, 5, 6];
	const numbers: Array<number> = uniq(data);
	console.log(numbers);
}
to_camel();
find_unique();
