const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected')
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;