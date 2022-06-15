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

create or replace procedure add_game(
    name_input varchar(255),
    category_id_input int,
    description_input text,
    user_id_input int
)
begin
    declare new_game_id int;
    start transaction ;
    insert into games (name, category_id, description)
    values (name_input, category_id_input, description_input);
    set new_game_id = last_insert_id();
    insert into user_games (user_id, game_id)
    values (user_id_input, new_game_id);
    commit;
end;

create or replace procedure add_category(
    in name_input varchar(255),
    in description_input varchar(255)
)
begin
    start transaction ;
    insert into categories (name, description) values (name_input, description_input);
    commit ;
end;
