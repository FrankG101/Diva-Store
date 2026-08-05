package config

import "DivaStore-backend/internal/utils"

type Config struct {
	Port       int
	DbHost     string
	DbName     string
	DbUser     string
	DbPassword string
	DbSSL      string
}

var Cfg = Config{
	Port:       utils.GetEnvInt("PORT", 3000),
	DbHost:     utils.GetEnv("DB_HOST", "database"),
	DbName:     utils.GetEnv("DB_NAME", "shurlx"),
	DbUser:     utils.GetEnv("DB_USER", "shurlx"),
	DbPassword: utils.GetEnv("DB_PASSWORD", "password"),
	DbSSL:      utils.GetEnv("DB_SSL", "disable"),
}
