-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-09-2023 a las 20:16:17
-- Versión del servidor: 8.0.34-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `MercadoArtesanias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Articulos`
--

CREATE TABLE `Articulos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PrecioActual` int DEFAULT NULL,
  `Cantidad` int DEFAULT NULL,
  `Stock` int DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `PrecioEnvio` int DEFAULT NULL,
  `IDCategoria` int DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Articulos`
--

INSERT INTO `Articulos` (`ID`, `ESTADO`, `Nombre`, `PrecioActual`, `Cantidad`, `Stock`, `Descripcion`, `PrecioEnvio`, `IDCategoria`, `IDUsuario`) VALUES
(1000, '2023-08-30', 'Producto 1', 100, 10, 5, 'Descripción del producto 1', 10, 1000, 1000),
(1001, '2023-09-06', 'El mejor articulo', 1004, 3, 10, 'Horrible', 20, 1001, 1001),
(1002, NULL, 'Producto 3', 150, 15, 8, 'Descripción del producto 3', 12, 1000, 1002),
(1003, NULL, 'Producto 4', 300, 25, 12, 'Descripción del producto 4', 20, 1002, 1003),
(1004, NULL, 'Producto 5', 250, 18, 9, 'Descripción del producto 5', 14, 1001, 1004),
(1005, NULL, 'Producto 6', 180, 12, 6, 'Descripción del producto 6', 18, 1002, 1005),
(1006, NULL, 'Producto 7', 120, 8, 4, 'Descripción del producto 7', 8, 1000, 1006),
(1007, NULL, 'Producto 8', 350, 30, 15, 'Descripción del producto 8', 25, 1002, 1007),
(1008, NULL, 'Producto 9', 280, 22, 11, 'Descripción del producto 9', 16, 1001, 1008),
(1009, NULL, 'Producto 10', 190, 13, 7, 'Descripción del producto 10', 11, 1000, 1009),
(1010, NULL, 'Producto 11', 210, 17, 8, 'Descripción del producto 11', 17, 1001, 1000),
(1011, NULL, 'Producto 12', 270, 23, 12, 'Descripción del producto 12', 22, 1002, 1001),
(1012, NULL, 'Producto 13', 140, 11, 6, 'Descripción del producto 13', 9, 1000, 1002),
(1013, NULL, 'Producto 14', 320, 28, 14, 'Descripción del producto 14', 24, 1002, 1003),
(1014, NULL, 'Producto 15', 240, 19, 10, 'Descripción del producto 15', 13, 1001, 1004),
(1015, NULL, 'Producto 16', 170, 14, 7, 'Descripción del producto 16', 7, 1000, 1005),
(1016, NULL, 'Producto 17', 110, 7, 3, 'Descripción del producto 17', 6, 1001, 1006),
(1017, NULL, 'Producto 18', 310, 27, 13, 'Descripción del producto 18', 23, 1002, 1007),
(1018, NULL, 'Producto 19', 260, 21, 11, 'Descripción del producto 19', 19, 1001, 1008),
(1019, NULL, 'Producto 20', 200, 16, 8, 'Descripción del producto 20', 12, 1000, 1009),
(1020, NULL, 'Producto 21', 220, 9, 4, 'Descripción del producto 21', 21, 1001, 1000),
(1021, NULL, 'Producto 22', 290, 24, 12, 'Descripción del producto 22', 26, 1002, 1001),
(1022, NULL, 'Producto 23', 160, 20, 10, 'Descripción del producto 23', 15, 1001, 1002),
(1023, NULL, 'Producto 24', 130, 10, 5, 'Descripción del producto 24', 10, 1000, 1003),
(1024, NULL, 'Producto 25', 370, 29, 15, 'Descripción del producto 25', 30, 1002, 1004),
(1025, NULL, 'Producto 26', 230, 18, 9, 'Descripción del producto 26', 16, 1001, 1005),
(1026, NULL, 'Producto 27', 150, 13, 7, 'Descripción del producto 27', 12, 1000, 1006),
(1027, NULL, 'Producto 28', 330, 25, 12, 'Descripción del producto 28', 22, 1002, 1007),
(1028, NULL, 'Producto 29', 250, 20, 10, 'Descripción del producto 29', 14, 1001, 1008),
(1029, NULL, 'Producto 30', 180, 15, 8, 'Descripción del producto 30', 18, 1000, 1009),
(1030, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1031, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1032, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1033, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1034, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1035, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1036, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, NULL, NULL),
(1037, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, 1000, 1001),
(1038, NULL, 'El mejor Articulo', 1004, 3, 3, 'Horrible', 20, 1000, 1001),
(1039, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, 1000, 1001),
(1041, NULL, 'El mejor articulo', 1004, 3, NULL, 'Horrible', 20, 1000, 1001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Caracteristicas`
--

CREATE TABLE `Caracteristicas` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `IDCategoria` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Caracteristicas`
--

INSERT INTO `Caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES
(1000, NULL, 'Tamaño', 1000),
(1001, NULL, 'Color', 1000),
(1002, NULL, 'Material', 1000),
(1003, NULL, 'Estilo', 1001),
(1004, NULL, 'Talla', 1001),
(1005, NULL, 'Temporada', 1001),
(1006, NULL, 'Material', 1002),
(1007, NULL, 'Uso', 1002),
(1008, NULL, 'Tipo', 1003),
(1009, NULL, 'Edad recomendada', 1004);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorias`
--

CREATE TABLE `Categorias` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Categorias`
--

INSERT INTO `Categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES
(1000, NULL, 'Electrónica'),
(1001, NULL, 'Moda'),
(1002, NULL, 'Hogar y Jardín'),
(1003, NULL, 'Deportes'),
(1004, NULL, 'Juguetes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Compras`
--

CREATE TABLE `Compras` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Monto` int DEFAULT NULL,
  `FechaYHora` datetime DEFAULT NULL,
  `MetodoPago` varchar(255) DEFAULT NULL,
  `NumeroTarjeta` varchar(255) DEFAULT NULL,
  `Puntaje` int DEFAULT NULL,
  `IDArticulo` int DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL,
  `IDDireccion` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Compras`
--

INSERT INTO `Compras` (`ID`, `ESTADO`, `Monto`, `FechaYHora`, `MetodoPago`, `NumeroTarjeta`, `Puntaje`, `IDArticulo`, `IDUsuario`, `IDDireccion`) VALUES
(1042, NULL, 100, '2023-08-26 10:00:00', 'Tarjeta de crédito', '1234-5678-9012-3456', 5, 1000, 1000, 1002);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Contenidos`
--

CREATE TABLE `Contenidos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `IDArticulo` int DEFAULT NULL,
  `IDCaracteristica` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Contenidos`
--

INSERT INTO `Contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES
(1000, NULL, 'Contenido 1', 1000, 1000),
(1001, NULL, 'Contenido 2', 1000, 1001),
(1002, NULL, 'Contenido 3', 1000, 1002),
(1003, NULL, 'Contenido 4', 1000, 1003),
(1004, NULL, 'Contenido 5', 1000, 1004),
(1005, NULL, 'Contenido 1', 1001, 1000),
(1006, NULL, 'Contenido 2', 1001, 1001),
(1007, NULL, 'Contenido 3', 1001, 1002),
(1008, NULL, 'Contenido 4', 1001, 1003),
(1009, NULL, 'Contenido 5', 1001, 1004),
(1010, NULL, 'Contenido 1', 1002, 1000),
(1011, NULL, 'Contenido 2', 1002, 1001),
(1012, NULL, 'Contenido 3', 1002, 1002),
(1013, NULL, 'Contenido 4', 1002, 1003),
(1014, NULL, 'Contenido 5', 1002, 1004),
(1015, NULL, 'Contenido 1', 1003, 1000),
(1016, NULL, 'Contenido 2', 1003, 1001),
(1017, NULL, 'Contenido 3', 1003, 1002),
(1018, NULL, 'Contenido 4', 1003, 1003),
(1019, NULL, 'Contenido 5', 1003, 1004),
(1020, NULL, 'Contenido 1', 1004, 1000),
(1021, NULL, 'Contenido 2', 1004, 1001),
(1022, NULL, 'Contenido 3', 1004, 1002),
(1023, NULL, 'Contenido 4', 1004, 1003),
(1024, NULL, 'Contenido 5', 1004, 1004),
(1025, NULL, 'Contenido 1', 1009, 1000),
(1026, NULL, 'Contenido 2', 1009, 1001),
(1027, NULL, 'Contenido 3', 1009, 1002),
(1028, NULL, 'Contenido 4', 1009, 1003),
(1029, NULL, 'Contenido 5', 1009, 1004),
(1030, NULL, 'Contenido 1', 1010, 1000),
(1031, NULL, 'Contenido 2', 1010, 1001),
(1032, NULL, 'Contenido 3', 1010, 1002),
(1033, NULL, 'Contenido 4', 1010, 1003),
(1034, NULL, 'Contenido 5', 1010, 1004);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Direcciones`
--

CREATE TABLE `Direcciones` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Calle` varchar(255) DEFAULT NULL,
  `Altura` int DEFAULT NULL,
  `Departamento` varchar(255) DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Direcciones`
--

INSERT INTO `Direcciones` (`ID`, `ESTADO`, `Calle`, `Altura`, `Departamento`, `IDUsuario`) VALUES
(1002, NULL, 'Calle1', 1, NULL, 1000),
(1003, NULL, 'Calle2', 2, 'Departamento2', 1001),
(1004, NULL, 'Calle3', 3, NULL, 1002),
(1005, NULL, 'Calle4', 4, 'Departamento4', 1003),
(1006, NULL, 'Calle5', 5, NULL, 1004),
(1007, NULL, 'Calle6', 6, 'Departamento6', 1005),
(1008, NULL, 'Calle7', 7, NULL, 1006),
(1009, NULL, 'Calle8', 8, 'Departamento8', 1007),
(1010, NULL, 'Calle9', 9, NULL, 1008),
(1011, NULL, 'Calle10', 10, 'Departamento10', 1009);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Fotos`
--

CREATE TABLE `Fotos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `IDArticulo` int DEFAULT NULL,
  `RutaFoto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tarjetas`
--

CREATE TABLE `Tarjetas` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Numero` varchar(16) DEFAULT NULL,
  `vto` varchar(7) DEFAULT NULL,
  `cvv` varchar(4) DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Mail` varchar(255) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `TipoUsuario` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES
(1000, '2023-08-30', 'Juan', 'Factos', 'juan@example2333.com', 'elfactos2333', 'SoyElFactos', 'USER'),
(1001, '2023-09-06', 'Juan', 'Factos', 'juan@exampldffsaaaaae2333.com', 'naxadsfdsf', 'SoyElFactos1.asaassaas', 'USER'),
(1002, NULL, 'Nombre3', 'Apellido3', 'correo3@example.com', 'username3', 'contraseña3', 'USER'),
(1003, NULL, 'Nombre4', 'Apellido4', 'correo4@example.com', 'username4', 'contraseña4', 'USER'),
(1004, NULL, 'Nombre5', 'Apellido5', 'correo5@example.com', 'username5', 'contraseña5', 'USER'),
(1005, NULL, 'Nombre6', 'Apellido6', 'correo6@example.com', 'username6', 'contraseña6', 'USER'),
(1006, NULL, 'Nombre7', 'Apellido7', 'correo7@example.com', 'username7', 'contraseña7', 'USER'),
(1007, NULL, 'Nombre8', 'Apellido8', 'correo8@example.com', 'username8', 'contraseña8', 'USER'),
(1008, NULL, 'Nombre9', 'Apellido9', 'correo9@example.com', 'username9', 'contraseña9', 'USER'),
(1009, NULL, 'Nombre10', 'Apellido10', 'correo10@example.com', 'username10', 'contraseña10', 'USER'),
(1017, NULL, 'Juan', 'Factos', 'juan@example2.com', 'elfactos2', 'SoyElFactos', 'USER'),
(1018, NULL, 'Juan', 'Factos', 'juan@example2333fdfsfd.com', 'elfactos23334as', 'SoyElFactos.1', 'USER'),
(1019, NULL, 'Juan', 'Factos', 'juan@example2333fdfsfdasasas.com', 'elfactos23334asas', 'SoyElFactos.1', 'USER'),
(1020, NULL, 'Juan', 'Pérez', 'juan@example.com', 'juanperez', 'Contraseña123.', 'USER'),
(1021, NULL, 'Juan', 'Pérez', 'juan@example21212.com', 'juanperez2', 'Contraseña123.', 'USER'),
(1023, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com', 'naaanaajja', 'Contraseña123.', 'USER'),
(1024, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar', 'nasadasdas', 'Contraseña123.', 'USER'),
(1025, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar.dot', 'nasadasdasdasds', 'Contraseña123.', 'USER'),
(1026, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar.dot.porn', 'nasadasdasdasdsasd', 'Contraseña123.', 'USER'),
(1027, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.dot.porn', 'n', 'Contraseña123.', 'USER'),
(1028, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.doteee.porn', 'na', 'Contraseña123.', 'USER'),
(1029, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.doteaee.aee', 'nac', 'Contraseña123.', 'USER'),
(1030, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.dote.aeeaaaa', 'nach', 'Contraseña123.', 'USER'),
(1039, NULL, 'Juan', 'Factos', 'juan@example2333.com', 'elfactos2333asadasdasdsadssadasdasdasdasdsd', 'SoyElFactos1.asaassaas', 'USER'),
(1043, NULL, 'Juan', 'Factos', 'juan@examplaaaaae2333.com', 'naxa', 'SoyElFactos1.asaassaas', 'USER'),
(1044, NULL, 'Juan', 'Factos', 'juan@exampldffsaaaasdasdaae2333.com', 'naxadsfdssadsadf', 'SoyElFactos1.asaassaas', 'USER'),
(1045, NULL, 'Juan', 'Factos', 'juan@exampldffsaaasadasdasdaae2333.com', 'naxadsfdssadsadsadf', 'SoyElFactos1.asaassaas', 'USER'),
(1046, NULL, 'El mejor articulo', NULL, NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Articulos`
--
ALTER TABLE `Articulos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Articulos_Categorias` (`IDCategoria`),
  ADD KEY `FK_Articulos_Usuarios` (`IDUsuario`);

--
-- Indices de la tabla `Caracteristicas`
--
ALTER TABLE `Caracteristicas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Caracteristicas_Categorias` (`IDCategoria`);

--
-- Indices de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `Compras`
--
ALTER TABLE `Compras`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Compras_Usuarios` (`IDUsuario`),
  ADD KEY `FK_Compras_Articulos` (`IDArticulo`),
  ADD KEY `FK_Compras_Direcciones` (`IDDireccion`);

--
-- Indices de la tabla `Contenidos`
--
ALTER TABLE `Contenidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Contenidos_Articulos` (`IDArticulo`),
  ADD KEY `FK_Contenidos_Caracteristicas` (`IDCaracteristica`);

--
-- Indices de la tabla `Direcciones`
--
ALTER TABLE `Direcciones`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Direcciones_Usuarios` (`IDUsuario`);

--
-- Indices de la tabla `Fotos`
--
ALTER TABLE `Fotos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Fotos_Articulos` (`IDArticulo`);

--
-- Indices de la tabla `Tarjetas`
--
ALTER TABLE `Tarjetas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UC_username` (`Username`),
  ADD UNIQUE KEY `UC_NumeroTarjeta` (`Username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Articulos`
--
ALTER TABLE `Articulos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1042;

--
-- AUTO_INCREMENT de la tabla `Caracteristicas`
--
ALTER TABLE `Caracteristicas`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1010;

--
-- AUTO_INCREMENT de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;

--
-- AUTO_INCREMENT de la tabla `Compras`
--
ALTER TABLE `Compras`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1043;

--
-- AUTO_INCREMENT de la tabla `Contenidos`
--
ALTER TABLE `Contenidos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1035;

--
-- AUTO_INCREMENT de la tabla `Direcciones`
--
ALTER TABLE `Direcciones`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1012;

--
-- AUTO_INCREMENT de la tabla `Fotos`
--
ALTER TABLE `Fotos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;

--
-- AUTO_INCREMENT de la tabla `Tarjetas`
--
ALTER TABLE `Tarjetas`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1047;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Articulos`
--
ALTER TABLE `Articulos`
  ADD CONSTRAINT `FK_Articulos_Categorias` FOREIGN KEY (`IDCategoria`) REFERENCES `Categorias` (`ID`),
  ADD CONSTRAINT `FK_Articulos_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `Usuarios` (`ID`);

--
-- Filtros para la tabla `Caracteristicas`
--
ALTER TABLE `Caracteristicas`
  ADD CONSTRAINT `FK_Caracteristicas_Categorias` FOREIGN KEY (`IDCategoria`) REFERENCES `Categorias` (`ID`);

--
-- Filtros para la tabla `Compras`
--
ALTER TABLE `Compras`
  ADD CONSTRAINT `FK_Compras_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `Articulos` (`ID`),
  ADD CONSTRAINT `FK_Compras_Direcciones` FOREIGN KEY (`IDDireccion`) REFERENCES `Direcciones` (`ID`),
  ADD CONSTRAINT `FK_Compras_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `Usuarios` (`ID`);

--
-- Filtros para la tabla `Contenidos`
--
ALTER TABLE `Contenidos`
  ADD CONSTRAINT `FK_Contenidos_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `Articulos` (`ID`),
  ADD CONSTRAINT `FK_Contenidos_Caracteristicas` FOREIGN KEY (`IDCaracteristica`) REFERENCES `Caracteristicas` (`ID`);

--
-- Filtros para la tabla `Direcciones`
--
ALTER TABLE `Direcciones`
  ADD CONSTRAINT `FK_Direcciones_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `Usuarios` (`ID`);

--
-- Filtros para la tabla `Fotos`
--
ALTER TABLE `Fotos`
  ADD CONSTRAINT `FK_Fotos_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `Articulos` (`ID`);

--
-- Filtros para la tabla `Tarjetas`
--
ALTER TABLE `Tarjetas`
  ADD CONSTRAINT `Tarjetas_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `Usuarios` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
