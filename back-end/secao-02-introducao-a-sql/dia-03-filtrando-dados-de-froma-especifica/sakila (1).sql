SELECT * FROM sakila.actor

WHERE first_name LIKE 'Johnny' AND last_name LIKE 'CAGE';

SELECT * FROM sakila.film

WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN' ,'AIRPLANE SIERRA');

SELECT * FROM sakila.film

WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN' ,'AIRPLANE SIERRA');

SELECT * FROM sakila.film

WHERE rental_duration = 6 AND (rating = 'R' OR rating = 'PG-13');

SELECT * FROM sakila.film

WHERE length BETWEEN 120 AND 150 ORDER BY length;

SELECT * FROM sakila.film

WHERE length BETWEEN 120 AND 150 ORDER BY length;

SELECT * FROM sakila.rental

WHERE rental_date = '2005-05-26 00:07:11';

SELECT * FROM sakila.rental

WHERE TIME(rental_date) = '00:07:11';

SELECT * FROM sakila.rental

WHERE DATE(return_date) BETWEEN '2005-05-26' AND '2005-06-27';

SELECT * FROM sakila.actor

WHERE first_name LIKE '%REY%';

