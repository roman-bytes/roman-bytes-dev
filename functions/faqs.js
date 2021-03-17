exports.handler = function(event, context, callback) {
    const faqs = [{
        question: 'Did you hear about the mermaid who liked math?',
        answer: 'She wore an algae bra.'
    }, {
        question: 'Do they allow loud laughing in Hawaii?',
        answer: 'No just a low ha.'
    }, {
        question: 'What do you say to warn your family you\'re about to test a new dad joke on them?',
        answer: 'Try this on for sighs.'
    }, {
        question: 'Whats the leading cause of dry skin?',
        answer: 'Towels.'
    }];
    callback(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        },
        statusCode: 200,
        body: faqs.toString()
    });
};
