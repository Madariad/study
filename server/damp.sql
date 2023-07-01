-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 01 2023 г., 20:09
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
  `course_topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_image` varchar(225) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL,
  `what_you_will_learn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_course` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `target_audience` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_program` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_program_details` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_language`, `course_creator_id`, `course_topic`, `course_description`, `course_image`, `what_you_will_learn`, `about_course`, `target_audience`, `course_program`, `course_program_details`) VALUES
(13, 'Web Development Bootcamp', 'js', 27, 'node', 'Это курс по разработке веб-приложений с использованием JavaScript и Node.js. В ходе курса вы освоите основы веб-разработки, изучите язык программирования JavaScript, научитесь создавать серверные приложения с использованием Node.js, Express.js и других технологий.', NULL, 'Чему вы научитесь 1, Чему вы научитесь 2, Чему вы научитесь 3', 'О курсе: Курс разработан для всех, кто хочет стать полноценным веб-разработчиком и создавать современные веб-приложения. Независимо от вашего уровня подготовки, этот курс поможет вам освоить все необходимые навыки.', 'Для кого этот курс: Курс подходит для начинающих веб-разработчиков, а также для опытных разработчиков, желающих расширить свои знания и освоить новые технологии.', 'Введение в веб-разработку, Основы JavaScript, Разработка серверных приложений с Node.js и Express.js, Работа с базами данных, Создание RESTful API, Фронтенд-разработка с HTML, CSS и JavaScript, Продвинутые темы в веб-разработке', '[{\"title\": \"Введение в веб-разработку\", \"content\": \"Знакомство с основными понятиями веб-разработки и клиент-серверной архитектурой.\"}, {\"title\": \"Основы JavaScript\", \"content\": \"Изучение основных концепций языка JavaScript, включая переменные, условные операторы, циклы и функции.\"}, {\"title\": \"Разработка серверных приложений с Node.js и Express.js\", \"content\": \"Научитесь создавать серверные приложения с использованием Node.js и фреймворка Express.js.\"}, {\"title\": \"Работа с базами данных\", \"content\": \"Изучение основ работы с базами данных, включая создание таблиц, выполнение CRUD-операций и миграции данных.\"}, {\"title\": \"Создание RESTful API\", \"content\": \"Научитесь создавать RESTful API для взаимодействия с клиентскими приложениями.\"}, {\"title\": \"Фронтенд-разработка с HTML, CSS и JavaScript\", \"content\": \"Освоение основных технологий фронтенд-разработки, включая HTML, CSS и JavaScript.\"}, {\"title\": \"Продвинутые темы в веб-разработке\", \"content\": \"Изучение продвинутых концепций и технологий веб-разработки, таких как аутентификация, авторизация, веб-сокеты и другие.\"}]'),
(14, 'React Crash Course', 'js', 27, 'react', 'This course is designed to teach you the fundamentals of React, a popular JavaScript library for building user interfaces. You will learn how to create components, manage state, handle events, and build reusable UI elements using React.', NULL, 'What you will learn 1, What you will learn 2, What you will learn 3', 'About the course: This course is suitable for beginners who want to learn React from scratch. It covers the core concepts and best practices of React development.', 'Target audience: This course is aimed at web developers who want to enhance their skills and learn React for building modern web applications.', 'Introduction to React, Components and Props, State and Lifecycle, Handling Events, Conditional Rendering, Lists and Keys, Forms and Controlled Components', '[{\"title\": \"Introduction to React\", \"content\": \"Overview of React and its key features.\"}, {\"title\": \"Components and Props\", \"content\": \"Learn how to create reusable components and pass data through props.\"}, {\"title\": \"State and Lifecycle\", \"content\": \"Understand how to manage state in React components and handle component lifecycle methods.\"}, {\"title\": \"Handling Events\", \"content\": \"Learn how to handle user events in React and update component state accordingly.\"}, {\"title\": \"Conditional Rendering\", \"content\": \"Explore techniques for conditionally rendering components based on certain conditions.\"}, {\"title\": \"Lists and Keys\", \"content\": \"Learn how to render lists of data and use keys for efficient updates.\"}, {\"title\": \"Forms and Controlled Components\", \"content\": \"Understand how to handle form input and control component state with controlled components.\"}]'),
(15, 'Основы Unreal Engine', 'C++', 27, 'разработка игр', 'Этот курс разработан для обучения основам Unreal Engine, мощного игрового движка. Вы узнаете, как создавать интерактивные 3D-среды, реализовывать игровые механики, работать с ресурсами и материалами, а также создавать собственные игровые проекты с использованием Unreal Engine.', NULL, 'Что вы узнаете: 1. Основы работы с Unreal Engine. 2. Создание интерактивных 3D-сред. 3. Реализация игровых механик. 4. Работа с ресурсами и материалами.', 'О курсе: Этот курс подходит для начинающих, которые хотят изучить Unreal Engine с нуля. В нем рассматриваются основные концепции и лучшие практики разработки на Unreal Engine.', 'Целевая аудитория: Курс предназначен для веб-разработчиков, которые хотят расширить свои навыки и изучить Unreal Engine для создания современных веб-приложений.', 'Введение в Unreal Engine, Создание 3D-сред, Реализация игровых механик, Работа с ресурсами и материалами', '[{\"title\": \"Введение в Unreal Engine\", \"content\": \"Обзор Unreal Engine и его основных функций.\"}, {\"title\": \"Создание 3D-сред\", \"content\": \"Узнайте, как создавать интерактивные 3D-среды и работать с моделями и текстурами.\"}, {\"title\": \"Реализация игровых механик\", \"content\": \"Понимание того, как реализовывать игровые механики и взаимодействие с игровым миром.\"}, {\"title\": \"Работа с ресурсами и материалами\", \"content\": \"Изучение работы с ресурсами, такими как звуки, анимации, и создание материалов для объектов в игре.\"}]');

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `fk_course_creator_id` FOREIGN KEY (`course_creator_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
