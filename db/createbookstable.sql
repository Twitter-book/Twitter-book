create table books
(book_id serial primary key
, book_title varchar(180)
, book_subtitle varchar(180)
, user_id text
, book_size varchar(20)
, book_color varchar(20)
, pages_format varchar(20)
, featured boolean
, book_price numeric(10, 2)
, draft boolean)