CREATE DATABASE sesac;

USE sesac;

CREATE TABLE user(
	id  int not null primary key auto_increment,
    name VARCHAR(10) not null,
    comment mediumtext null
);

DESC visitor;

INSERT INTO visitor(id, name, comment) VALUES ('1', '홍길동', '내가 왔다!');

SELECT * FROM visitor;

select user from mysql.user;

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38wifh3', '위도우', 'F', '1976-06-27', '47');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

SELECT * FROM user;

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
SELECT id, name FROM user WHERE YEAR(birthday) LIKE '199_';
SELECT * FROM user WHERE month(birthday) = '6' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' AND YEAR(birthday) LIKE '197_';
SELECT * FROM user WHERE age ORDER BY age DESC limit 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id ='jungkrat';


ALTER TABLE user drop column birthday;
ALTER TABLE user add column birthday date not null;

DROP TABLE user;
INSERT INTO user ( ID, name, birthday ) VALUES ('id3', '홍길동2', '2022-08-01');
INSERT INTO user ( ID, birthday ) VALUES ('id5', '2022-08-01');
INSERT INTO user VALUES ('PARK', '박길동', '2022-08-01');

SELECT * FROM user;
SELECT * FROM user WHERE name = '홍길동' AND id = 'id1';
SELECT * FROM user WHERE name = '홍길동' ORDER BY ID DESC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT * FROM user LIMIT 2;
SELECT name, birthday FROM user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180;

/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR position = 'goalkeeper';

/* LIKE _ % */
SELECT * FROM user WHERE name LIKE '__동';
SELECT * FROM user WHERE name LIKE '이%';

UPDATE user SET name = '홍길동2', birthday = '2022-07-31' WHERE ID != 'id2';
SELECT * FROM user;

DELETE FROM user WHERE id ='id2';

CREATE TABLE user2 (
	ID varchar(10) not null primary key,
	name varchar(5) not null default '',
    birthday date not null
);
INSERT INTO user2 VALUES ('SONG', '송길동', '2022-08-01');
SELECT * FROM user2;

DELETE FROM user2 WHERE name = '송길동';


SELECT * FROM user;