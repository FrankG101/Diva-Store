package main

import (
	"fmt"
	"log"
	"net/http"

	"DivaStore-backend/internal/config"
	"DivaStore-backend/internal/database"
	"DivaStore-backend/internal/handlers"
)

func main() {
	log.Println("Initializing connection to PostgreSQL database...")
	if err := database.Init(); err != nil {
		log.Fatal(err)
	}
	defer database.Db.Close()

	mux := http.NewServeMux()
	handlers.RegisterHandlers(mux)

	log.Println("Starting HTTP server on port", config.Cfg.Port, "...")
	if err := http.ListenAndServe(fmt.Sprintf(":%d", config.Cfg.Port), mux); err != nil {
		log.Fatal(err)
	}
}
