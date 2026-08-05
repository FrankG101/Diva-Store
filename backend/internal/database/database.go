package database

import (
	"database/sql"
	"fmt"

	"DivaStore-backend/internal/config"

	_ "github.com/lib/pq"
)

var Db *sql.DB

func Init() error {
	connStr := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s sslmode=%s",
		config.Cfg.DbHost,
		config.Cfg.DbUser,
		config.Cfg.DbPassword,
		config.Cfg.DbName,
		config.Cfg.DbSSL,
	)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return err
	}

	Db = db
	return nil
}
