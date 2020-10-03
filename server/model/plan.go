package model

import (
	"time"

	"gorm.io/gorm"
)

// Plan Model
type Plan struct {
	gorm.Model
	Title          string    `json:"title"`
	Content        string    `json:"content"`
	Accomplished   bool      `json:"accomplished"`
	AccomplishedAt time.Time `json:"accomplishedAt"`
}
