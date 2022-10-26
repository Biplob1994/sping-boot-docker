Docker Build Command to build an image for backend

docker build --build-arg GIT_REPO=REPO LINK --build-arg GIT_BRANCH=main --build-arg GIT_FOLDER=app/backend --build-arg DB_HOST=10.8.215.16 --build-arg DB_PORT=3306 --build-arg DB_NAME=javadb --build-arg DB_USERNAME=java_net --build-arg DB_PASSWORD=password --build-arg SERVER_NAME=10.8.215.16 --build-arg SERVER_PORT=80 -f dockerfile-backend .