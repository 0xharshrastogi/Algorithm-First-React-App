const naive = (string, str) => {
	var counter = 0,
		i = string.indexOf(str, 0); //find first occurance of str in string

	while (i !== -1) {
		++counter; //we have a match, count one up
		i = string.indexOf(str, i + 1); //find next occurance
	}
	return counter;
};

export default naive;
