const koa = require("koa");
const koaRouter = require("koa-router");

const app = new koa();
const router = new koaRouter();

router.get("home", "/", (context) => {
	context.body = `<h1>Welcome to Home Page</h1>`;
});
router.get("about", "/about", (context) => {
	context.body = `<h1>Welcome to About Page</h1>`;
});
router.get("contact", "/contact", (context) => {
	context.body = `<h1>İletisim sayfasına hoşgeldiniz</h1>`;
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT} koşuyor`);
});
