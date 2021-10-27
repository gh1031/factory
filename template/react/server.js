import Koa from 'koa';
import fs from 'fs';

const app = new Koa();

const resolveBody = req => new Promise(r => {
  let chunkData = "";
  req.on("data", function (chunk) {
    chunkData += chunk;
  });
  req.on("end", function () {
    console.log(chunkData,"...")
    r(JSON.parse(chunkData));
  }); 
})
const bodyPaserMiddleware = async (ctx, next) => {
  const data = await resolveBody(ctx.req);
  ctx.data = data;
  await next();
}

const loginMiddleware = async (ctx, next) => {
  const { path, data } = ctx;
  if (path === '/login') {
    const { username, password } = data;
    if (username && password) {
      ctx.body = data;
    } else {
      ctx.body = ''
    }
  } else {
    await next();
  }
    
}

app.use(bodyPaserMiddleware);
app.use(loginMiddleware);

app.use(async (ctx) => {
  const { path } = ctx;
  console.log("request url:", path);
  ctx.body = `current request url: ${ctx.req.url}`
});

app.listen(3003, () => {
  console.log('server runing on http://localhost:3003')
})
