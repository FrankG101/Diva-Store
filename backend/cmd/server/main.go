package main

import (
	"DivaStore-backend/internal/handlers"
	"fmt"
	"log"
	"net/http"
)

const PORT = 8000

func main() {
	mux := http.NewServeMux()
	handlers.RegisterHandlers(mux)

	log.Println("Starting HTTP server on port", PORT)
	if err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), mux); err != nil {
		log.Fatal(err)
	}
}
