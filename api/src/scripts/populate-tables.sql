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

insert into users (email, hashed_password)
values
    ('person@address.com', '621aafe34bf73f0fc041d6a7989d83a938e1af24adf95db24d8e001d3c776e9f1605276e8174dd52bce7fb9f659472936925a73179ba10c2f3d54639d03adedf'),
    ('person1@address.com', '28d5da419be88efd551e7c18980507020fcf34def0883433db23ce4de92e47cd18be3829486012a6ca512fa0e25ca74b6c85ee7bba07f0f97207d381f7af8a91'),
    ('person2@address.com', 'ebecfa7b08b5fbca7f9297b594f328733ba68766807cad7149126a115c2a8ea7fb0e1a5be474df99e86e5985fb65b6aae92bbb15c49ae9c6585fe7c26d6e82fe'),
    ('person3@address.com', '6f21c48f6731aaee263f9ae5009671367525faa31e0966c0c112d62fb2bd7b7cd74de680ca216fb4182e843b3f4ae3dcf9ffa00ab20411c9d9a04776f23f646c'),
    ('person4@address.com', 'c2f5e3f83560dfca91ba11c9786dc8b9b82fa375eeb7cf4c87307cb27c5e53ae8e8e7124facf0574d2af50c95db30078148dda6df390c99e6a906992a868dbaf'),
    ('person5@address.com', '48abd987033ac7409df5189fc1af11326b247f7ac45f5b345a8a79ad3c31176eb911585b62307230614c1cd613aa3bc3bc204f408396c79eac362e7cbdf28ea9'),
    ('person6@address.com', 'ac054e17e93fbdc03115cffa897e38a16cb44d34cfdc477d3f498b4064673e80cf99688fc058d30366e35f2feb114f80c89b8248f421f21096469d1eca2b5fab'),
    ('person7@address.com', '4569296e0216132e8df2d5eefc3a848c94d783c79b471e30b7694311e24f94f8de639ba7fd71a89b559f887d2a3c6da8eb56cbd85030f1eb4630ff54a8635ad9')
on duplicate key update id = id;

