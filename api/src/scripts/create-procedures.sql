USE gamer_feud;

create or replace procedure register(
    email_input varchar(255),
    password_input text
)
begin
    start transaction;
    insert into users (email, hashed_password) values (email_input, password_input);
    select id from users where email = email_input;
    commit;
end;

create or replace procedure add_review(
    user_id_input int,
    game_id_input int,
    value_input int
)
begin
    declare review_id int;
    start transaction ;
    select id into review_id from reviews where user_id = user_id_input and game_id = game_id_input;
    if review_id is null then
        insert into reviews (user_id, game_id, value) values (user_id_input, game_id_input, value_input);
    else
        update reviews set value = value_input where id = review_id;
    end if;
    commit;
end;

create or replace procedure add_game(
    name_input varchar(255),
    category_id_input int,
    description_input text
)
begin
    start transaction ;
    insert into games (name, category_id, description)
    values (name_input, category_id_input, description_input);
    commit;
end;

create or replace procedure add_category(
    in name_input varchar(255),
    in description_input varchar(255)
)
begin
    start transaction ;
    insert into categories (name, description) values (name_input, description_input);
    commit;
end;

create or replace procedure add_comment(
    content_input text,
    game_id_input int,
    user_id_input int
)
begin
    start transaction ;
    insert into comments (content, game_id, created_at) values (content_input, game_id_input, now());
    insert into user_comments (comment_id, user_id) values (last_insert_id(), user_id_input);
    commit;
end;

create or replace procedure delete_game(
    game_id_input integer
)
begin
    start transaction ;
    delete from games where id = game_id_input;
    commit;
end;

create or replace procedure delete_comment(
    comment_id_input integer
)
begin
    start transaction ;
    delete from user_comments where comment_id = comment_id_input;
    delete from comments where id = comment_id_input;
    commit;
end;

create or replace procedure get_games(
    limit_input int,
    offset_input int
)
begin
    select games.id, games.name, games.description, c.name as category
    from games
             inner join categories c on games.category_id = c.id
    limit limit_input offset offset_input;
end;

create or replace procedure get_comments(
    game_id_input int
)
begin
    select comments.id, u.email, content, created_at, u.id as user_id
    from comments
             inner join user_comments uc on comments.id = uc.comment_id
             inner join users u on uc.user_id = u.id
    where game_id = game_id_input;
end;

create or replace procedure get_categories()
begin
    select * from categories;
end;