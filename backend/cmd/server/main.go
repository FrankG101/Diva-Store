package main

import (
	"DivaStore-backend/internal/config"
	"DivaStore-backend/internal/handlers"
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	handlers.RegisterHandlers(mux)

	log.Println("Starting HTTP server on port", config.Cfg.Port)
	if err := http.ListenAndServe(fmt.Sprintf(":%d", config.Cfg.Port), mux); err != nil {
		log.Fatal(err)
	}
}
