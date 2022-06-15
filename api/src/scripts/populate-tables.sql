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

insert into games (name, category_id, description)
values ('Counter-Strike: Global Offensive', 1, 'Counter-Strike: Global Offensive is a first-person shooter video game developed by Valve Corporation and published by Valve Corporation. It is the sequel to Counter-Strike: Condition Zero.'),
       ('Counter-Strike: Source', 1, 'Counter-Strike: Source is a first-person shooter video game developed by Valve Corporation and published by Valve Corporation. It is the sequel to Counter-Strike: Condition Zero.'),
       ('Counter-Strike: Condition Zero', 1, 'Counter-Strike: Condition Zero is a first-person shooter video game developed by Valve Corporation and published by Valve Corporation. It is the sequel to Counter-Strike: Condition Zero.'),
       ('League of Legends', 3, 'League of Legends is a multiplayer online battle arena (MOBA) video game developed and published by Riot Games. It is the fourth game in the League of Legends series.'),
       ('Dota 2', 3, 'Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. It is the second game in the Dota series.'),
       ('The Elder Scrolls V: Skyrim', 2, 'The Elder Scrolls V: Skyrim is a role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth installment in the The Elder Scrolls V series.'),
       ('The Elder Scrolls IV: Oblivion', 2, 'The Elder Scrolls IV: Oblivion is a role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fourth installment in the The Elder Scrolls series.'),
       ('Rome: Total War', 4, 'Rome: Total War is a real-time strategy video game developed and published by THQ. It is the first game in the Rome: Total War series.'),
       ('Rome: Total War II', 4, 'Rome: Total War II is a real-time strategy video game developed and published by THQ. It is the second game in the Rome: Total War series.'),
       ('Rome: Total War III', 4, 'Rome: Total War III is a real-time strategy video game developed and published by THQ. It is the third game in the Rome: Total War series.')
on duplicate key update id = id;
