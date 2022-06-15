USE gamer_feud;

create or replace function user_exists(
    email_input varchar(255),
    password_input text
) returns int
begin
    return (select id from users where hashed_password = password_input and email = email_input);
end;

create or replace function get_games_count() returns int
begin
    return (select count(id) from games);
end;

create or replace function user_reviewed_game(
    user_id_input int,
    game_id_input int
) returns bool
begin
    return (select count(id) from reviews where user_id = user_id_input and game_id = game_id_input) > 0;
end;

create or replace function get_game_average_reviews(
    game_id_input int
) returns float
begin
    return (select coalesce(avg(value), 0) from reviews where game_id = game_id_input);
end;