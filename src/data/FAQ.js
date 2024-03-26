const data = [
	{
		id: 1,
		question: "What is Homomorphic Encryption?",
		answer: "Homomorphic encryption is the conversion of data into ciphertext that can be analysed and worked with as if it were still in its original form. Homomorphic encryption enables complex mathematical operations to be performed on encrypte data without compromising the encryption.",
	},
	{
		id: 2,
		question:
			"What's the difference b/w Homomorphic encryption and Typical encryption?",
		answer: "Homomorphic encryption differs from typical encryption methods because it enables mathematical computations to be performed directly on the encrypted data, which can make the handling of user data by third parties safer.",
	},
	{
		id: 3,
		question: "Why do we need Homomorphic Encryption?",
		answer: "Homomorphic encryption is primarily utilized for highly sensitive or confidential data due to its strong security properties, but it comes with a performance overhead.",
	},
	{
		id: 4,
		question: "What is Student Analytics API",
		answer: "The Student Analytics API is a tool for analyzing student data securely using homomorphic encryption. It allows you to perform various analytical operations on encrypted student data without exposing the raw data. This API is built with Node.js and utilizes the node-seal library for homomorphic encryption.",
	},
	{
		id: 5,
		question: "What is the Admin's role?",
		answer: "The admin encrypts the data using a public key. Sends the encrypted data to the API. Receives the encrypted result from the API. Decrypts the result using a private key.",
	},
];

export default data;
