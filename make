#!/bin/bash

install_sqlite () {
  sqlite3 sqlite.db ".read database/main.sql"
  echo "init tables:"
  sqlite3 sqlite.db ".tables"
  echo "-------- init done ---------"
}

install_backup () {
  sqlite3 sqlite.db .dump > database/backup.sql
  echo "-------- backup done ---------"
}

install_cover () {
  sqlite3 sqlite.db < database/backup.sql
  echo "-------- cover done ---------"
}

if [[ $1 = "init" ]]; then
	install_sqlite
elif [[ $1 = "backup" ]]; then
	install_backup
elif [[ $1 = "cover" ]]; then
  install_cover
else
	echo 'Usage: ./make <command>'
	echo ' '
	echo 'commands: '
	echo '  - init: 初始化sqlite数据库'
	echo '  - backup: 备份sqlite数据库'
	echo '  - cover: 从备份覆盖sqlite数据库'
	echo ' '
fi
