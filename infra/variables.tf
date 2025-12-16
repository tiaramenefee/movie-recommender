variable "aws_region" {
  type    = string
  default = "us-west-2"
}

variable "docker_image" {
  type    = string
  default = "tiaramenefee/movie-recommender:latest"
}
