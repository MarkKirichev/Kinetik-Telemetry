## Action steps

* git clone
* cp .env.example .env
* cp project_be/.env.example project_be/.env
* docker-compose up --build -d
* docker exec -it kinetik_telemetry_node_container bash
* ./node_modules/.bin/sequelize-cli db:migrate
* ./node_modules/.bin/sequelize-cli db:seed:all
- default port is 5001 (defined in .env), so the api should be available at localhost:5001

## And if you want to run the tests

* docker exec -it kinetik_telemetry_node_container bash
* npm run test