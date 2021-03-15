exports.handler = function(event, context, callback) {
    const faqs = [{
        question: 'Is this product waterproof?',
        answer: 'Yes. You can take this anywhere and put it in any type of liquid.'
    }, {
        question: 'Is this product windproof?',
        answer: 'Yes. You can withstand winds up to 200mph'
    }, {
        question: 'Will this product make you fly?',
        answer: 'No. This is not Redbull and will not give you wings.'
    }, {
        question: 'Do they allow loud laughing in Hawaii?',
        answer: 'No. Just a low ha.'
    }]
    callback(null, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: faqs
    });
};
