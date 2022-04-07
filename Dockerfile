FROM denoland/deno:latest as base

WORKDIR /app

COPY . ./

RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--reload", "server.ts"]