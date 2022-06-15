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

create or replace procedure add_user_game(
    user_id_input int,
    game_id_input int
)
begin
    start transaction ;
    insert into user_games (user_id, game_id) values (user_id_input, game_id_input);
    commit;
end;

create or replace procedure add_review(
    user_id_input int,
    game_id_input int,
    value_input int
)
begin
    start transaction ;
    insert into reviews (user_id, game_id, value) values (user_id_input, game_id_input, value_input);
    commit;
end;
