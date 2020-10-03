package model

import (
	"fmt"

	"github.com/riverandeye/planner/server/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

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

	// TODO : Develop 일 때만으로 업데이트해야함
	DBConn.AutoMigrate(&Goal{}, &Plan{})
}
