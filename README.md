1. Install NodeJS 
2. Install XAMPP for MAC https://www.apachefriends.org/download.html
3. Create a database, user and password during the installation
4. Access http://localhost/phpmyadmin
5. Find the way to run SQL scripts. Copy the contents of `create_db.sql`, paste it and run it.
6. Change these credentials inside `app.js` to the valid ones:
```
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tasks'
});
```
7. Run `npm install` on the current folder
8. Run `npm start` on the current folder
9. Open http://localhost:2000

## Update version 2.0 - tasks

10. Remove this project's folder. Re-download it from git. Use the new project's folder like before.
11. Review the credentials inside `app.js` (step 6). If necessary change them:
```
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tasks'
});
```
12. Run the following SQL script through phpmyadmin: `DROP DATABASE players;`
13. Re-run the SQL script in `create_db.sql` (step 5).
14. Run `npm install` on the current folder
15. Run `npm start` on the current folder
16. Open http://localhost:2000

## How to run after installation
8. Run `npm start` on the current folder
9. Open http://localhost:2000
