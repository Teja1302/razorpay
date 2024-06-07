
const axios = require('axios');

const RAZORPAY_KEY = 'rzp_test_heJKAykRVCMqMv';
const RAZORPAY_SECRET = '7hcliEQ8RgLRqInUQzeBmx6W';

const createLinkedAccount = async (accountData) => {
    try {
        const auth = Buffer.from(`${RAZORPAY_KEY}:${RAZORPAY_SECRET}`).toString('base64');
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`
            }
        };

        // const bankDetails = {
        //     "Branch IFSC Code": "HDFC0001234",  
        //     "Account Number": accountData.accountNumber,
        //     "Re-Enter Account Number": accountData.reEnterAccountNumber,
        //     "Beneficiary Name": accountData.beneficiaryName
        // };

        // accountData.bank_details = bankDetails;

        const url = 'https://api.razorpay.com/v1/accounts';
        
        console.log('Sending data to Razorpay:', JSON.stringify(accountData, null, 2));

        const response = await axios.post(url, accountData, config);
        console.log('Razorpay API response:', response.data);

        const accountId = response.data.id;
        await activateAccountStatus(accountId, bankDetails, config);
        
        return response.data;
    } catch (error) {
        console.error('Error creating linked account:', error.message);
        throw error;
    }
};

// const activateAccountStatus = async (accountId, bankDetails, config) => {
//     const activationUrl = `https://api.razorpay.com/v2/accounts/${accountId}/activate`;
//     try {
//         console.log('Sending activation request to:', activationUrl);
//         console.log('Bank details:', JSON.stringify(bankDetails, null, 2));

//         const activationResponse = await axios.post(activationUrl, bankDetails, config);
//         console.log('Account activation response:', activationResponse.data);
//     } catch (error) {
//         console.error('Error activating account status:', error.message);
//         throw error;
//     }
// };


//-----> order

const createOrder = async (orderData) => {
    try {
        const auth = Buffer.from(`${RAZORPAY_KEY}:${RAZORPAY_SECRET}`).toString('base64');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`
            }
        };
        const url = 'https://api.razorpay.com/v1/orders';

        console.log('Sending data to Razorpay:', JSON.stringify(orderData, null, 2));

        const response = await axios.post(url, orderData, config);
        console.log('Razorpay API response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error creating order:', error.message);
        throw error;
    }
};

module.exports = { createLinkedAccount,createOrder };

