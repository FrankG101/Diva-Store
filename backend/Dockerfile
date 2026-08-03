FROM golang:1.26.5-alpine AS builder

WORKDIR /app
COPY . .
RUN go build -o build/server ./cmd/server/main.go

FROM alpine:3.23

WORKDIR /app
COPY --from=builder /app/build/server /server

EXPOSE ${PORT}
CMD ["/server"]
