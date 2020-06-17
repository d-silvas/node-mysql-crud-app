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
    database: 'socka'
});
```
7. Run `npm install` on the current folder
8. Run `npm start` on the current folder
9. Open http://localhost:2000