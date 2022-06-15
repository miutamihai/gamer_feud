USE gamer_feud;

create or replace function user_exists(
    email_input varchar(255),
    password_input text
) returns int
begin
    return (select count(id) from users where hashed_password = password_input and email = email_input);
end;

create or replace function get_games_count() returns int
begin
    return (select count(id) from games);
end;