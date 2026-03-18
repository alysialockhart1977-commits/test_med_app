const mongoose = require('mongoose');

const mongoURI = "mongodb://root:7SyA2A8WLq16u04zxJYabhI4@172.21.31.208:27017"; 

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;

try {
    await mongoose.connect(mongoURI, { dbName: `stayhealthybeta1' });
    console.info('Connected to Mongo Successfully');
    return;
} catch (error) {
    console.error("Mongo connection error:", error.message);

const nextRetryCount = count + 1;

    if (nextRetryCount >= MAX_RETRIES) {
        throw error;
    }

    console.info(`Retrying, retry count: ${nextRetryCount}`);
    return await connectToMondo(nextRetryCount);
}
};

module.exports = connectToMondgo;