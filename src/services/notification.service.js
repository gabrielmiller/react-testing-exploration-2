class notificationService {
    notify() {
        console.log('notify called with', arguments)
        let resolveIt;

        const defer = new Promise((resolve) => {
            resolveIt = resolve;
        });

        setTimeout(() => {
            resolveIt(true);
            console.log('notification resolved');
        }, 5000);

        return defer;
    }
};

const notificationServiceInstance = new notificationService();

export default notificationServiceInstance;