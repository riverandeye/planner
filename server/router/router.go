package router

import (
	"github.com/gin-gonic/gin"
	"github.com/riverandeye/planner/server/controller"
)

// Router divides route
func Router() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger()) // Set only Dev
	router.Use(gin.Recovery())

	api := router.Group("/api")

	api.POST("/login", controller.Login)

	// Goal Routes
	api.GET("/goal", controller.GetGoals)
	api.GET("/rootgoal", controller.GetRootGoals)
	api.GET("/goal/:id", controller.GetGoal)
	api.GET("/goal/:id/children", controller.GetChildrenGoals)
	api.POST("/goal", controller.CreateGoal)
	api.PUT("/goal/:id", controller.UpdateGoal)
	api.DELETE("/goal/:id", controller.DeleteGoal)

	// User Routes
	api.POST("/user", controller.CreateUser)

	return router
}
