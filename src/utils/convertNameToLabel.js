export const returnLabelName = (labelName) => {
	let nameOutput = [];
	for (let i = 0; i < labelName.length; i++) {
		nameOutput.push(labelName[i]);
		if (labelName[i].match(/[A-Z]/)) {
			let letter = nameOutput.pop();

			nameOutput.push(' ');
			nameOutput.push(letter.toLowerCase());
		}
	}
	return nameOutput.join('');
};
