sudo docker rm -f homeboy-api
 sudo docker rmi -f homeboy-img
 sudo docker build --no-cache -t homeboy-img .
 sudo docker run --name homeboy-api -d -p 80:8080 --link mysql-container homeboy-img
