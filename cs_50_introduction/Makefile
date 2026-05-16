.PHONY: help up up-mysql up-postgres up-sqlite down restart logs ps mysql postgres sqlite mysql-root postgres-admin run-mysql run-postgres run-sqlite import-longlist-mysql import-longlist-postgres import-longlist-sqlite import-library-sqlite import-all-sqlite i reset-mysql reset-postgres reset-sqlite clean

help:
	@echo "CS50 SQL practice commands"
	@echo ""
	@echo "Setup:"
	@echo "  make up                 Start MySQL, PostgreSQL, and SQLite containers"
	@echo "  make up-mysql           Start only MySQL"
	@echo "  make up-postgres        Start only PostgreSQL"
	@echo "  make up-sqlite          Start only SQLite"
	@echo "  make down               Stop containers"
	@echo "  make restart            Restart containers"
	@echo "  make ps                 Show container status"
	@echo "  make logs               Follow container logs"
	@echo ""
	@echo "Open database shells:"
	@echo "  make mysql              Open MySQL as student on practice_db"
	@echo "  make postgres           Open PostgreSQL as student on practice_db"
	@echo "  make sqlite             Open SQLite practice.db"
	@echo "  make mysql-root         Open MySQL as root"
	@echo "  make postgres-admin     Open PostgreSQL maintenance database"
	@echo ""
	@echo "Run starter SQL files:"
	@echo "  make run-mysql          Run sql/init/lesson1.sql"
	@echo "  make run-postgres       Run postgres/init/lesson1.sql"
	@echo "  make run-sqlite         Run sqlite/data/lesson1.sql"
	@echo ""
	@echo "Import docs/csv_files/longlist.csv:"
	@echo "  make import-longlist-mysql"
	@echo "  make import-longlist-postgres"
	@echo "  make import-longlist-sqlite"
	@echo ""
	@echo "Import relational CSV files (authors/books/ratings/etc):"
	@echo "  make import-library-sqlite"
	@echo "  make import-all-sqlite    Start SQLite and import both longlist and library data"
	@echo "  make i                    Shortcut for import-library-sqlite"
	@echo ""
	@echo "Reset practice tables:"
	@echo "  make reset-mysql        Re-run MySQL lesson1.sql"
	@echo "  make reset-postgres     Re-run PostgreSQL lesson1.sql"
	@echo "  make reset-sqlite       Remove SQLite DB and re-run lesson1.sql"
	@echo ""
	@echo "Danger zone:"
	@echo "  make clean              Stop containers and delete MySQL/PostgreSQL volumes"


up:
	docker compose up -d --wait

up-mysql:
	docker compose up -d --wait sql

up-postgres:
	docker compose up -d --wait postgres

up-sqlite:
	docker compose up -d --wait sqlite
	$(MAKE) import-library-sqlite

down:
	docker compose down

restart:
	docker compose down && docker compose up -d --wait

logs:
	docker compose logs -f --tail=100

ps:
	docker compose ps

mysql:
	docker compose exec sql mysql -h127.0.0.1 -ustudent -pstudent practice_db

postgres:
	docker compose exec postgres psql -U student -d practice_db

sqlite:
	docker compose exec sqlite sqlite3 /workspace/practice.db

mysql-root:
	docker compose exec sql mysql -uroot -proot

postgres-admin:
	docker compose exec postgres psql -U student -d postgres

run-mysql:
	docker compose exec -T sql mysql -h127.0.0.1 -ustudent -pstudent practice_db < sql/init/lesson1.sql

run-postgres:
	docker compose exec -T postgres psql -U student -d practice_db < postgres/init/lesson1.sql

run-sqlite:
	docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/lesson1.sql

import-longlist-mysql:
	docker compose exec -T sql mysql --local-infile=1 -h127.0.0.1 -ustudent -pstudent practice_db < sql/import_longlist.sql

import-longlist-postgres:
	docker compose exec -T postgres psql -U student -d practice_db < postgres/import_longlist.sql

import-longlist-sqlite:
	docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/import_longlist.sql

import-library-sqlite:
	docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/import_library.sql

import-all-sqlite: up-sqlite
	docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/import_longlist.sql

i: import-library-sqlite

reset-mysql: run-mysql

reset-postgres: run-postgres

reset-sqlite:
	docker compose exec sqlite rm -f /workspace/practice.db
	docker compose exec -T sqlite sqlite3 /workspace/practice.db < sqlite/data/lesson1.sql

clean:
	docker compose down -v
