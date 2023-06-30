-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 30 2023 г., 14:08
-- Версия сервера: 5.7.38
-- Версия PHP: 7.3.33

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
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_language` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_creator_id` int(11) DEFAULT NULL,
  `course_topic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_description` varchar(225) CHARACTER SET armscii8 DEFAULT NULL,
  `course_image` varchar(225) CHARACTER SET armscii8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_language`, `course_creator_id`, `course_topic`, `course_description`, `course_image`) VALUES
(1, 'React Course', 'English', 1, 'React', 'description ', '1687854589145-avatar.jpg'),
(2, 'React learn full', 'js', 27, 'node', 'description ', '1688116991482-avatar.jpg'),
(3, 'React learn full', 'English', 27, 'React', 'description ', NULL),
(4, 'React learn full', 'English', 27, 'React', 'description ', NULL),
(5, 'sdsdsd', 'Rasshan', 27, 'React', 'sdsdsd', NULL),
(6, 'jlkjllkj', 'Rasshan', 27, 'React', 'sdsdsd', NULL),
(7, 'dance', 'js', 27, 'node', 'dance', '1688123080887-fyag21laznfa1.jpg'),
(8, 'Test', 'Rasshan', 27, 'React', 'sdsdsd', '1688122642144-avatar.jpg'),
(9, 'Таней', 'Rasshan', 27, 'React', 'sdsdsd', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `lessons`
--

CREATE TABLE `lessons` (
  `lesson_id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `lesson_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lesson_content` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `lessons`
--

INSERT INTO `lessons` (`lesson_id`, `course_id`, `lesson_title`, `lesson_content`) VALUES
(1, 1, 'Урок 1', 'Содержимое урока 1'),
(2, 1, 'Урок 2', 'Содержимое урока 2'),
(3, 2, 'Урок 3', 'Содержимое урока 3'),
(6, 2, 'Новый модуль', 'Описание модуля');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
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
-- Структура таблицы `sublessons`
--

CREATE TABLE `sublessons` (
  `sublesson_id` int(11) NOT NULL,
  `lesson_id` int(11) DEFAULT NULL,
  `sublesson_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sublesson_content` text COLLATE utf8mb4_unicode_ci,
  `sublesson_video` varchar(225) CHARACTER SET armscii8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sublessons`
--

INSERT INTO `sublessons` (`sublesson_id`, `lesson_id`, `sublesson_title`, `sublesson_content`, `sublesson_video`) VALUES
(1, 1, 'Подурок 1.1', 'Содержимое подурока 1.1', '1688114850371-ggg.mp4'),
(2, 1, 'Подурок 1.2', 'Содержимое подурока 1.2', '1688116991497-ggg.mp4'),
(3, 2, 'Подурок 2.1', 'Содержимое подурока 2.1', NULL),
(4, 3, 'Подурок 3.1', 'Содержимое подурока 3.1', NULL),
(5, 3, 'Подурок 3.2', 'Содержимое подурока 3.2', '1688117157941-ggg.mp4');

-- --------------------------------------------------------

--
-- Структура таблицы `tokens`
--

CREATE TABLE `tokens` (
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
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
(29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhbWVuQGdtYWlsLmNvbSIsImlhdCI6MTY4NzU0MzAxOH0.2aLp2_FXXpw8t1pZEMeWBaM5WKcFFKVamFfAXnjIKTY'),
(30, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbi52YWdpem92QHlhLnJ1IiwiaWF0IjoxNjg4MTAwNTIzfQ.CuUquNF23ixd_aZHdWmioVfpxqf_-cPlrayGbmHLZog'),
(31, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmF5dF93ZkBtYWlsLnJ1IiwiaWF0IjoxNjg4MTAwNzU0fQ.z8HsMcdyXt-pxKnlFx4MvTW7cSZIWh87wghRiql9MqA'),
(32, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImprbGFza2hqZmN2YmN2YmV1aUBnbWFpbC5jb20iLCJpYXQiOjE2ODgxMDExMjV9.4NwFpcNx0SFNyJLfqYk_S_b8t-cdxmv43HsPRP21Tk0'),
(33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhc2suMTlAbWFpbC5ydSIsImlhdCI6MTY4ODEwMTIxNX0.s5FHVt2O7egaR6lyYutCvAEIIvMV4i1TZ9p-T8aIUKU'),
(34, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpYXMuYmFzYXNhYWlnYXppMDVAZ21haWwuY29tIiwiaWF0IjoxNjg4MTAxOTY0fQ.dz3U47qb36DTQRs1ptxBlrfzF6Wt7X1ZL0lB92dL8z0'),
(35, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFyYXNkc2R1Y2hpaGFiZXN0MkBnbWFpbC5jb20iLCJpYXQiOjE2ODgxMDIwNjB9.DxHef4T5dIoQyUIN4aYUkA1jCTXtzK4IUzqDuMPeQA0'),
(36, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFyYXVzZGZ2c2R2c2RjaGloYWJlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTY4ODEwMjEwNH0.k6RW6xnCWxhgPMBel6mWT_G3CIGWhDkRsKiVQF9ARAA'),
(37, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImprbGFza2hqZmN2c2RzZGJjdmJldWlAZ21haWwuY29tIiwiaWF0IjoxNjg4MTAyMjk0fQ.xZtqdcj2R959DiTV1vXLtFtOIcnfGKpDVgvDGJygAu8'),
(38, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cnNkdnNkdnNheXRfd2ZAbWFpbC5ydSIsImlhdCI6MTY4ODEwMjQ4NX0.R_jcgHV3Lwpb19V1BgZmBp2TYxY6TRbHC3250lQI3PY'),
(39, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFyYXVzZGZzZGZzZGZzZGZzY2hpaGFiZXN0MkBnbWFpbC5jb20iLCJpYXQiOjE2ODgxMDI2MzF9.TcEp7oMU5IJRNtqFA_QLet01E5YYaYxjHrV5JTR-EX8'),
(40, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZHNkZnNkZmFyYXVjaGloYWJlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTY4ODEwMzIyN30.imkzARHHeg3woSyioqvpSMmKRhuBxEYDAiKV5N8V4eo'),
(41, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFyYXVjaGlkc2Zkc2ZzZGZzZGZzZGhhYmVzdDJAZ21haWwuY29tIiwiaWF0IjoxNjg4MTAzMjc3fQ.ErCeg-Xj23eDAPL-YGokkjqhb_2xoBhpoFSvls_077c'),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hZGFyYTE5MjlAZ21haWwuY29tIiwiaWF0IjoxNjg4MTA0NTY1fQ.ioOnTkq6D254HwhoCFxfn6CRivpXcblVbMKmupLtZqo');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET armscii8 DEFAULT NULL,
  `subscribed_courses` varchar(225) CHARACTER SET armscii8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `role_id`, `email`, `avatar`, `subscribed_courses`) VALUES
(1, 'user1', 'password123', 2, 'las@gamii.com', NULL, NULL),
(2, 'user1', 'password123', 2, 'jjj@gamil.com', NULL, NULL),
(18, 'sss', '$2b$10$y4laX0FOo52OU5cNh6TtrOIfoJkffIHyWHE.BSSZfCJ1Co.xLSjSW', 1, 'lll$gmail.com', NULL, NULL),
(19, 'sss', '$2b$10$/oCTwic5i02PWpqIwJSB7esjuKDR07Z7YTO1/gaiTZEqVGjhlnndW', 1, 'll$gmail.com', NULL, NULL),
(20, 'sss', '$2b$10$eSZZ9t.oNivHqJr1TrKT5.xg24EnX44bhfOW9wdLbXJeEQByscMWW', 1, 'lp[pl$gmail.com', NULL, NULL),
(21, 'sss', '$2b$10$fY4iofocYenkImWN0TyWEOOPUVrzBWGHQ3bf2zNgCwYCp3muPitfu', 1, 'lppl$gmail.com', NULL, NULL),
(22, 'sss', '$2b$10$R4A5Ssjttdhp7e7lCeEoX.eXGL54RPKaEu/CBuZucgDukQd12Syhm', 1, 'lpp$gmail.com', NULL, NULL),
(23, 'sss', '$2b$10$WKk3inkWiGEQipP6YYrmxeznxfpx6Opx7F9UfvGNuKeXtQdzI374C', 1, 'lp$gmail.com', NULL, NULL),
(24, 'sss', '$2b$10$rrZGuRq4Fejpiox/qyob2udu8y8VtBtGP4UtAvhaiDzP/fkMubuF.', 1, 'l$gmail.com', NULL, NULL),
(25, 'sss', '$2b$10$KOQMEY4E.Vy5/o79isMnz.w5hlUTKKjy9TavDLSsH.OEv.ASSHwTW', 2, 'lsd$gmail.com', NULL, NULL),
(27, 'Madara', '$2b$10$QNlkvIzYrck/vTEP6al0yumjUouCp7El.h4Dia5W1STFV82ermP9S', 2, 'Madara1929@gmail.com', '1687851471778-avatar.jpg', '1,3'),
(28, 'Madaraasasasa12121212212', '$2b$10$XzAi1bwLzq.HfILgaX1vSutaUHbaGEc8ucmGZyqOn7UFHpzu0xWfu', 3, 'M1929@gmail.com', NULL, NULL),
(29, 'Wam', '$2b$10$YylFXExgSJlY88TZxdTy/Ou3vN/li8eP465hRx41DlsW2JOpAdWWC', 1, 'wamen@gmail.com', NULL, NULL),
(30, 'students', '$2b$10$3JtIiJm5Wr96ubQ74sSoS.8qfHZouzSXNvZL2bLyIOFV2uHr9xe7e', 1, 'don.vagizov@ya.ru', NULL, NULL),
(31, 'ZZZZZ', '$2b$10$cgglhtBBAlWavz/ARrAMZudhIzy754EKKGIIUsv2MYCRuuz9VXXyC', 1, 'strayt_wf@mail.ru', NULL, NULL),
(32, 'Test', '$2b$10$7..YkCvnYsIGBbWGoly1K.VZ41XUbJPDI4Y.4V7zPPwhyHLWlu4Bm', 1, 'jklaskhjfcvbcvbeui@gmail.com', NULL, NULL),
(33, 'sdsdsd', '$2b$10$Lrg6wA68JC00w00rW2o5jOl.yecVd7Ydc/1uLFZV3Kx0fnpjhWrRW', 1, 'hask.19@mail.ru', NULL, NULL),
(34, 'asasasa', '$2b$10$9dOPXn14vMaMBfvjYxfa5Ok7A3G4TfaK6WaHyCZRlZqXwmSO96c6O', 2, 'dias.basasaaigazi05@gmail.com', NULL, NULL),
(35, 'sdsdsd', '$2b$10$fAUF1df83xf7ujSJBkKQ0uo0fnbElTyI5eeX3x2Z55eWiwUWZbmLi', 2, 'madarasdsduchihabest2@gmail.com', NULL, NULL),
(36, 'sdsfdvfsd', '$2b$10$JZHrVeNe9wVMJXO8LTiuI.7RlYqLmWsz.DEJGc6O22KGb7Dhkyg8u', 2, 'madarausdfvsdvsdchihabest2@gmail.com', NULL, NULL),
(37, 'Test', '$2b$10$hn/Wb9pP0tiN82w6YaenCeBd17OEGI0pXgYrVoPTmLDOWmLc2nHg.', 1, 'jklaskhjfcvsdsdbcvbeui@gmail.com', NULL, NULL),
(38, 'sdvsdvsdv', '$2b$10$ZvRI8BZMFQII5iy3Av0UU.e0PBDeo5/pbRJDRBaX/7BYImglocWJy', 2, 'strsdvsdvsayt_wf@mail.ru', NULL, NULL),
(39, 'sdfcsdfsd', '$2b$10$g9UH5L50S4O0bMR6U1AR6.Z.NleDCYESrwDTKffsXn4VkG8Jq2Esy', 1, 'madarausdfsdfsdfsdfschihabest2@gmail.com', NULL, NULL),
(40, 'sdfsdfvsdf', '$2b$10$6pWZsLu0rg2NGvuTewwR8.axcIF0wqMkdFi.gv9IJ/zFjOhOyylPW', 2, 'madsdfsdfarauchihabest2@gmail.com', NULL, NULL),
(41, 'sdfsdfsdf', '$2b$10$8fy88LhP3hTC1NAKU0M7IO/nAI56Twj6pXveGHfuuszY/PDa9gGtG', 2, 'madarauchidsfdsfsdfsdfsdhabest2@gmail.com', NULL, NULL);

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
-- Индексы таблицы `sublessons`
--
ALTER TABLE `sublessons`
  ADD PRIMARY KEY (`sublesson_id`),
  ADD KEY `lesson_id` (`lesson_id`);

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
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `lessons`
--
ALTER TABLE `lessons`
  MODIFY `lesson_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `sublessons`
--
ALTER TABLE `sublessons`
  MODIFY `sublesson_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

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
-- Ограничения внешнего ключа таблицы `sublessons`
--
ALTER TABLE `sublessons`
  ADD CONSTRAINT `sublessons_ibfk_1` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`lesson_id`);

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
