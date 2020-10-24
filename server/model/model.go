package model

import (
	"fmt"
	"time"

	"github.com/riverandeye/planner/server/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Model For Database
type Model struct {
	ID        uint      `gorm:"primarykey" json:"id"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// DBConn is connection object
var (
	DBConn *gorm.DB
)

func init() {

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local",
		config.Database.User,
		config.Database.Password,
		config.Database.Host,
		config.Database.Name)

	var err error

	DBConn, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	DBConn.AutoMigrate(&Goal{}, &User{})
}
