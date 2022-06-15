USE gamer_feud;

start transaction;

CREATE TABLE `users`
(
    `id`              int PRIMARY KEY AUTO_INCREMENT,
    `email`           varchar(255),
    `hashed_password` text
);

CREATE TABLE `categories`
(
    `id`          int PRIMARY KEY AUTO_INCREMENT,
    `name`        varchar(255),
    `description` varchar(255)
);

CREATE TABLE `games`
(
    `id`          int PRIMARY KEY AUTO_INCREMENT,
    `name`        varchar(255),
    `category_id` int,
    `description` varchar(255),
    CONSTRAINT `fk_games_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);

CREATE TABLE `user_games`
(
    `id`      int PRIMARY KEY AUTO_INCREMENT,
    `game_id` int,
    `user_id` int,
    CONSTRAINT `fk_user_games_games` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
    CONSTRAINT `fk_user_games_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `review`
(
    `id`      int PRIMARY KEY AUTO_INCREMENT,
    `game_id` int,
    `user_id` int,
    `value`   int,
    CONSTRAINT `fk_review_games` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
    CONSTRAINT `fk_review_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `comments`
(
    `id`         int PRIMARY KEY AUTO_INCREMENT,
    `game_id`    int,
    `created_at` timestamp,
    `content`    text,
    CONSTRAINT `fk_comments_games` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`)
);

CREATE TABLE `user_comments`
(
    `id`         int PRIMARY KEY AUTO_INCREMENT,
    `user_id`    int,
    `comment_id` int,
    CONSTRAINT `fk_user_comments_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    CONSTRAINT `fk_user_comments_comments` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`)
);

commit;