let request = require('request')

// Call the Infura API and check that the address is valid.

let options = {
    url: 'https://filecoin.infura.io',
    method: 'post',
    headers: {
       'content-type': 'application/json'
    },
    auth: {
       user: '2O9StFhrOZ5sgmnYQbuWBGR0iX6',
       pass: '5ab93d52cba688cc6504cb1ae0be2f4d'
    },
    body: `{
      "jsonrpc": "2.0",
      "id": 0,
      "method": "Filecoin.ChainHead"
    }`
}
request(options, (error, response, body) => {
 if (error) {
	console.error('Error: ', error)
 } else {
	console.log('Response: ', body)
 }
})