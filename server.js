const express = require("express");
const cors = require('cors');
const db = require("./app/models");

const app = express();


const corsOption = {
    origin: '*'
};

app.use(cors(corsOption));
app.use(express.json());

const mongooseConfig= {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => {
        console.log('sukses konek db');
    })
    .catch((err) => {
        console.log(`gagal konek ${err.message}`);
        process.exit();
    })

require('./app/routes/hiragana.routes')(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));



