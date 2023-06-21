-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 21 2023 г., 22:34
-- Версия сервера: 8.0.30
-- Версия PHP: 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `studygenius`
--

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

CREATE TABLE `courses` (
  `course_id` int NOT NULL,
  `course_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_language` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_creator_id` int DEFAULT NULL,
  `course_topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_language`, `course_creator_id`, `course_topic`) VALUES
(1, 'React Course', 'English', 1, 'React'),
(2, 'React learn full', 'English', 27, 'React'),
(3, 'React learn full', 'English', 27, 'React'),
(4, 'React learn full', 'English', 27, 'React');

-- --------------------------------------------------------

--
-- Структура таблицы `lessons`
--

CREATE TABLE `lessons` (
  `lesson_id` int NOT NULL,
  `course_id` int DEFAULT NULL,
  `lesson_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lesson_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `lessons`
--

INSERT INTO `lessons` (`lesson_id`, `course_id`, `lesson_title`, `lesson_content`) VALUES
(1, 1, 'Introduction to React', 'In this lesson, we will introduce the basics of React framework.'),
(2, 1, 'Components and Props', 'Learn about components and props in React and how to use them.'),
(3, 1, 'State and Lifecycle', 'Explore the concept of state and lifecycle methods in React.'),
(4, 1, 'Handling Events', 'Learn how to handle events in React and write event handlers.'),
(5, 1, 'React Router', 'Discover how to set up routing in React applications using React Router.');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'students'),
(2, 'teachers'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Структура таблицы `tokens`
--

CREATE TABLE `tokens` (
  `user_id` int DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `tokens`
--

INSERT INTO `tokens` (`user_id`, `token`) VALUES
(NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxsbCRnbWFpbC5jb20iLCJpYXQiOjE2ODcyNDEyNjV9.axICAXIetWvx2OCWTbp_iogIKgR8KY50stFYBv5IlnU'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxwcCRnbWFpbC5jb20iLCJpYXQiOjE2ODcyNDE4NjJ9._aKArckKZ_UY5Gizuwl6tFjRF9-K73IGiaziZFEWr64'),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxwJGdtYWlsLmNvbSIsImlhdCI6MTY4NzI0MjQxOH0.uMrOrzbdwy5pe-AqBgJ3XOpKD_ZXPNeBSf-JKVxIAZk'),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImwkZ21haWwuY29tIiwiaWF0IjoxNjg3MjQyNDY1fQ.OEq-_L550IZRgkUmCVPCm-bR9TGC7jpYhmVSV2riTJ8'),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxzZCRnbWFpbC5jb20iLCJpYXQiOjE2ODcyNDU0NTl9._34Ke449-CtUbdQmIz-8pvVRauyeU-STErfz57hwA9A'),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hZGFyYTE5MjlAZ21haWwuY29tIiwiaWF0IjoxNjg3MzcyOTE5fQ.gzx8BGqlcjg1HgywBYX30jQCravxO9z2LGsVdjxh5bc');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `role_id`, `email`) VALUES
(1, 'user1', 'password123', 2, 'las@gamii.com'),
(2, 'user1', 'password123', 2, 'jjj@gamil.com'),
(18, 'sss', '$2b$10$y4laX0FOo52OU5cNh6TtrOIfoJkffIHyWHE.BSSZfCJ1Co.xLSjSW', 1, 'lll$gmail.com'),
(19, 'sss', '$2b$10$/oCTwic5i02PWpqIwJSB7esjuKDR07Z7YTO1/gaiTZEqVGjhlnndW', 1, 'll$gmail.com'),
(20, 'sss', '$2b$10$eSZZ9t.oNivHqJr1TrKT5.xg24EnX44bhfOW9wdLbXJeEQByscMWW', 1, 'lp[pl$gmail.com'),
(21, 'sss', '$2b$10$fY4iofocYenkImWN0TyWEOOPUVrzBWGHQ3bf2zNgCwYCp3muPitfu', 1, 'lppl$gmail.com'),
(22, 'sss', '$2b$10$R4A5Ssjttdhp7e7lCeEoX.eXGL54RPKaEu/CBuZucgDukQd12Syhm', 1, 'lpp$gmail.com'),
(23, 'sss', '$2b$10$WKk3inkWiGEQipP6YYrmxeznxfpx6Opx7F9UfvGNuKeXtQdzI374C', 1, 'lp$gmail.com'),
(24, 'sss', '$2b$10$rrZGuRq4Fejpiox/qyob2udu8y8VtBtGP4UtAvhaiDzP/fkMubuF.', 1, 'l$gmail.com'),
(25, 'sss', '$2b$10$KOQMEY4E.Vy5/o79isMnz.w5hlUTKKjy9TavDLSsH.OEv.ASSHwTW', 2, 'lsd$gmail.com'),
(27, 'Madara', '$2b$10$QNlkvIzYrck/vTEP6al0yumjUouCp7El.h4Dia5W1STFV82ermP9S', 2, 'Madara1929@gmail.com'),
(28, 'Madaraasasasa12121212212', '$2b$10$XzAi1bwLzq.HfILgaX1vSutaUHbaGEc8ucmGZyqOn7UFHpzu0xWfu', 3, 'M1929@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `fk_course_creator_id` (`course_creator_id`);

--
-- Индексы таблицы `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Индексы таблицы `tokens`
--
ALTER TABLE `tokens`
  ADD KEY `fk_user_id` (`user_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `lessons`
--
ALTER TABLE `lessons`
  MODIFY `lesson_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `fk_course_creator_id` FOREIGN KEY (`course_creator_id`) REFERENCES `users` (`user_id`);

--
-- Ограничения внешнего ключа таблицы `lessons`
--
ALTER TABLE `lessons`
  ADD CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`);

--
-- Ограничения внешнего ключа таблицы `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
