package config

import "DivaStore-backend/internal/utils"

type Config struct {
	Port int
}

var Cfg = Config{
	Port: utils.GetEnvInt("PORT", 3000),
}
