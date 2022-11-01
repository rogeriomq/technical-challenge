FROM denoland/deno:1.27.0

EXPOSE 4444

WORKDIR /server

USER deno

COPY deps.ts .

RUN deno cache deps.ts

ADD . .

RUN deno cache src/main.ts

CMD ["run", "--allow-net", "--allow-env", "src/main.ts"]

