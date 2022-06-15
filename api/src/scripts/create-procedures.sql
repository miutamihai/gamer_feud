USE gamer_feud;

create or replace procedure register(
    email_input varchar(255),
    password_input text
)
begin
    start transaction;
    insert into users (email, hashed_password) values (email_input, password_input);
    commit;
end;