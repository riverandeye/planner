package main

import (
	"github.com/riverandeye/planner/server/config"
	_ "github.com/riverandeye/planner/server/model"
	"github.com/riverandeye/planner/server/router"
)

func main() {

	r := router.Router()

	r.Run(":" + config.Server.HTTPPort)

}
