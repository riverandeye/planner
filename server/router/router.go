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

	// Goal Routes
	api.GET("/goal", controller.GetGoals)
	api.GET("/goal/:id", controller.GetGoal)
	api.POST("/goal/:id", controller.CreateGoal)
	api.PUT("/goal/:id", controller.UpdateGoal)
	api.DELETE("/goal/:id", controller.DeleteGoal)

	// Plan Routes
	api.GET("/plan", controller.GetPlans)
	api.GET("/plan/:id", controller.GetPlan)
	api.POST("/plan/:id", controller.CreatePlan)
	api.PUT("/plan/:id", controller.UpdatePlan)
	api.DELETE("/plan/:id", controller.DeletePlan)

	return router
}
