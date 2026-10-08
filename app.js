import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";


//Create Express App    
const app = express();

app.use(express.json());

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000; //Define port Variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}







