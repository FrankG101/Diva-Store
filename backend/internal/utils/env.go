package utils

import (
	"os"
	"strconv"
)

func GetEnv(key string, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return defaultValue
}

func GetEnvInt(key string, defaultValue int) int {
	if strValue := os.Getenv(key); strValue != "" {
		if intValue, err := strconv.Atoi(strValue); err == nil {
			return intValue
		}
	}

	return defaultValue
}
