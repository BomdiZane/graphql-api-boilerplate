/**
 * CAPITALISE FIRST LETTER OF EVERY WORD IN A STRING
 * Only the first letter of every word is capitalised. The rest of the string is converted to lower case.
 * @param {String} text - The string to be formatted
 * @returns {String} - formated text with first letter of each word capitalized
 *                   - empty string if no name is provided
*/
export function formatName(name) {
	if (!name) return '';
	if (typeof name !== 'string') throw new Error(`Arguement of type "${typeof name}" passed to formatName. "string" expected!`);

	let words = name.trim().split(' '), //remove leading and trailing spaces and split the string into words
		formatted = '';

	for (let i = 0, len = words.length; i < len; i++) 
		formatted += `${ words[i].charAt(0).toUpperCase() }${ words[i].substring(1).toLowerCase() } `;
	
	return formatted.trim();
}
