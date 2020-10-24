package config

import (
	"fmt"
	"io/ioutil"
	"path/filepath"

	"gopkg.in/yaml.v2"
)

// DatabaseConfig Type
type DatabaseConfig struct {
	Type        string `yaml:"Type"`
	User        string `yaml:"User"`
	Password    string `yaml:"Password"`
	Host        string `yaml:"Host"`
	Name        string `yaml:"Name"`
	TablePrefix string `yaml:"TablePrefix"`
}

// ServerConfig Type
type ServerConfig struct {
	RunMode      string `yaml:"RunMode"`
	HTTPPort     string `yaml:"HTTPPort"`
	ReadTimeout  int    `yaml:"ReadTimeout"`
	WriteTimeout int    `yaml:"WriteTimeout"`
}

type SecretConfig struct {
	HashCode string `yaml:"HashCode"`
}

// Config Type
type Config struct {
	Database DatabaseConfig `yaml:"database"`
	Server   ServerConfig   `yaml:"server"`
}

// Database Config
var Database DatabaseConfig

// Server Config
var Server ServerConfig

func init() {
	fmt.Println("Initialize Config")

	filename, _ := filepath.Abs("config/config.yml")
	yamlFile, err := ioutil.ReadFile(filename)
	var config Config

	err = yaml.Unmarshal(yamlFile, &config)

	if err != nil {
		panic(err)
	}

	Database = config.Database
	Server = config.Server
}
