-- uuid extension
`create extension if not exists "uuid-ossp";`
--create table
"CREATE TABLE users (user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),user_name VARCHAR(255) NOT NULL,user_email VARCHAR(255) NOT NULL,user_password VARCHAR(255) NOT NULL,teacher_student VARCHAR(1) NOT NULL,attendance INTEGER,
knowledge INTEGER,cont INTEGER,reviews VARCHAR(1000));"
--insert user data
INSERT INTO users (user_name,user_email,user_password,teacher_student,attendance,knowledge,cont,reviews
)
VALUES('ash','ashmagill@gmail.com','password','t',3,3,2,'good teacher_allways on time_my hero_needs to work on content')
