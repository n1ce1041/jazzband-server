CREATE TABLE users (
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  teacher_student VARCHAR(1) NOT NULL,
  attendance VARCHAR(1000),
  knowledge VARCHAR(1000),
  cont VARCHAR(1000),
  reviews VARCHAR(1000)
);