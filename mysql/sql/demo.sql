CREATE TABLE todo (
    id int auto_increment PRIMARY KEY,
    title varchar(200),
    content text,
    is_done boolean default false
);

INSERT INTO todo
    (title, content)
VALUES
    ('sample todo1', 'This is sample todo1.'),
    ('sample todo2', 'This is sample todo2.');