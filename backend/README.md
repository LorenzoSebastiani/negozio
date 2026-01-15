## BACKEND ##

## VERSIONE USATA ##

23.10.0

## CREAZIONE DB ## 

'docker exec -it postgres_17_4 bash'

`psql -U postgres`

`CREATE DATABASE negozio_online;`

`CREATE USER negozio_online_user WITH ENCRYPTED PASSWORD 'Ar3l50P4ss@2025';`

`GRANT ALL PRIVILEGES ON DATABASE negozio_online TO negozio_online_user;`

`\connect negozio_online`

`GRANT ALL ON SCHEMA public TO negozio_online_user;`