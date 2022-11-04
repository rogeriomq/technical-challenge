FROM denoland/deno:1.27.1

LABEL version="1.0.0"
LABEL description="Neoway API"

WORKDIR /server

USER deno

COPY deps.ts .
COPY dev_deps.ts .

RUN deno cache deps.ts dev_deps.ts

USER root
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

USER deno
ADD . .

EXPOSE 4444

CMD /wait && deno task run
