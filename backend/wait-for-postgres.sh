#!/bin/sh
# wait-for-postgres.sh

# unused for now, may be useful to execute scripts after postgres db is ready

set -e
  
host="$1"
shift
cmd="$@"
  
until PGPASSWORD=docker psql -h "$host" -U "postgres" -c '\q' > /dev/null 2>&1; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 5
done

echo "Postgres avaiable!"

RESULT=$(PGPASSWORD=docker psql -h "$host" -U "postgres" -c 'select 1' -d societysql || echo "0")

if [ $RESULT = "0" > /dev/null 2>&1 ];
then
  echo "Creating database..."
  npx sequelize db:create
  echo "Migrating database..."
  npx sequelize db:migrate
  >&2 echo "Postgres is ready!"
else
  >&2 echo "Database already exists. Postgres is ready!"
fi

exec $cmd