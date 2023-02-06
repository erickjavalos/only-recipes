const axios = require('axios');
const fs = require('fs')
var FormData = require('form-data');

require('dotenv').config();

const formData = new FormData();
formData.append("file", fs.createReadStream('./image5.png'))
axios({
	method: 'post',
	url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
	data: formData,
	headers:{
		"Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
	}
  }).then((response)=>{
		const ImgHash = `ipfs://${response.data.IpfsHash}`;
		console.log(ImgHash); 
  });

console.log(fs.createReadStream('./image5.png'))