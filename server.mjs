import {app} from'./app.mjs';

const PORT = process.env.PORT || 90;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});