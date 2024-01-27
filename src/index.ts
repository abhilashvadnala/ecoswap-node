import app from './app';

const port: number | string = process.env.PORT || 1803;

app.listen(port, () => {
    console.log(`ecoswap server is listening on PORT: ${port}`);
});
