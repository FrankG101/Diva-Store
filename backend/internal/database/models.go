package database

import "time"

type Product struct {
	ID        int
	Name      string
	Size      string
	Price     float32
	PhotoURL  string
	CreatedAt time.Time
}
