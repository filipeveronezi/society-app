#!/bin/sh
# wait-for-postgres.sh

# unused for now, may be useful to execute scripts after postgres db is ready

set -e
  
host="$1"
shift
cmd="$@"
  
until PGPASSWORD=docker psql -h "$host" -U "postgres" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec $cmd