function areEqual(S1, S2) {
	if (S1 !== S2) {
		return false;
	}
	for (let i = 0; i < S1.length; i++) {
		if (S1[i] !== S2[i]) {
			return false;
		}
	}
	return true;
}

function polyHash(S, p, x) {
	var hash = 0;
	for (let i = 0; i <= S.length - 1; i++) {
		hash = (hash * x + S.charCodeAt(i)) % p;
	}
	return hash;
}

export default function rabinKarp(T, P) {
	var p = 1019;
	let x = 34;
	var positions = [];
	let pHash = polyHash(P, p, x);
	var text;
	var tHash;

	// Loop through text
	for (let k = 0; k <= T.length - P.length; k++) {
		text = T.slice(k, k + P.length);

		tHash = polyHash(text, p, x);

		// If hashes don't match, continue to next loop
		if (pHash !== tHash) {
			continue;
		}

		// If hashes do match, push locations to positions list
		if (areEqual(text, P)) {
			positions.push(k);
		}
	}
	return positions;
}
