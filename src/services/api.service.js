class apiService {
    post() {
        console.log('post called with', arguments);
        /*
        let resolveIt;

        const defer = new Promise((resolve) => {
            resolveIt = resolve;
        });

        setTimeout(() => {
            resolveIt({ data: 'hello!' });
            console.log('deferred response resolved');
        }, 400);

        return defer;
        */
    }
};

const apiServiceInstance = new apiService();

export default apiServiceInstance;