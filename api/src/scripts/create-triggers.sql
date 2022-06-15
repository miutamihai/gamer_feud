use gamer_feud;

create or replace trigger delete_comments
    before delete
    on games
    for each row
begin
    delete from user_comments where comment_id in (select comment_id from comments where game_id = old.id);
    delete from comments where game_id = old.id;
end;

create or replace trigger delete_reviews
    before delete
    on games
    for each row
begin
    delete from reviews where game_id = old.id;
end;
