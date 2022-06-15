USE gamer_feud;

insert into categories (name, description)
values ('FPS',
        'First person shooter games are games that are played by one person, typically with a mouse and keyboard. They are played on a screen with a monitor, and typically have a 3D perspective. They are also known as first-person games.'),
       ('RPG',
        'Role-playing games (also known as role-playing or role-playing-simulation games) are games in which players assume the role of a character in a story. They are often set in a world with many characters and locations, and the players must navigate through it to reach their goal.'),
       ('MOBA',
        'Massively- Multiplayer Online Battle Arena (also known as multiplayer online battle arena or MOBA) is a type of multiplayer online battle arena game. It is a type of online game where players can play as a single character in a team of players, and the goal is to destroy the other team\'s base.'),
       ('RTS',
        'Real-time strategy (also known as real-time tactics or RTS) is a strategy game that is played online or offline by players on a computer or network. It is played by two teams of players, each with a unique strategy.'),
       ('SIM',
        'Simulation games are games that are played by a single player, typically with a mouse and keyboard. They are played on a screen with a monitor, and typically have a 3D perspective. They are also known as first-person games.')
on duplicate key update id = id;
