-- for reference

CREATE DATABASE omdb_lookup;

CREATE TABLE movie_lookup (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	imdbID VARCHAR(300),
	year VARCHAR(200),
	poster VARCHAR(300)
);

INSERT INTO movie_lookup (title,imdbID,year,poster) values ('');
INSERT INTO movie_lookup (email) values ('');

SELECT id from movie_lookup;
SELECT * FROM movie_lookup;
SELECT * FROM movie_lookup where id = 2; 
SELECT * FROM movie_lookup where email = 'dt@ga.co';

DELETE FROM contacts where id = 1;

UPDATE contacts SET email = 'pudding@cake.com' WHERE id = 2;

-- * refer to all