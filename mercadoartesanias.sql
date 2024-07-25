-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2023 a las 21:15:17
-- Versión del servidor: 8.1.0
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercadoartesanias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PrecioActual` int DEFAULT NULL,
  `Cantidad` int DEFAULT NULL,
  `Vendidos` int DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `PrecioEnvio` int DEFAULT NULL,
  `IDCategoria` int DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`ID`, `ESTADO`, `Nombre`, `PrecioActual`, `Cantidad`, `Vendidos`, `Descripcion`, `PrecioEnvio`, `IDCategoria`, `IDUsuario`) VALUES(1138, NULL, 'juan', 12, 12, 0, '12', NULL, 1001, 1002);
INSERT INTO `articulos` (`ID`, `ESTADO`, `Nombre`, `PrecioActual`, `Cantidad`, `Vendidos`, `Descripcion`, `PrecioEnvio`, `IDCategoria`, `IDUsuario`) VALUES(1139, NULL, 'adas', 123, 123, 0, '123', NULL, 1001, 1002);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracteristicas`
--

CREATE TABLE `caracteristicas` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `IDCategoria` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `caracteristicas`
--

INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1000, NULL, 'Medidas', 1000);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1001, NULL, 'Color', 1000);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1002, NULL, 'Tecnica', 1000);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1003, NULL, 'Medidas', 1001);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1004, NULL, 'Material', 1001);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1005, NULL, 'Diseño', 1001);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1006, NULL, 'Material', 1002);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1007, NULL, 'Material', 1002);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1008, NULL, 'Diseño', 1002);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1009, NULL, 'Material', 1003);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1010, NULL, 'Diseño', 1003);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1011, NULL, 'Edad Recomendada', 1003);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1012, NULL, 'Medidas', 1004);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1013, NULL, 'Detalle', 1004);
INSERT INTO `caracteristicas` (`ID`, `ESTADO`, `Descripcion`, `IDCategoria`) VALUES(1014, NULL, 'Diseño', 1004);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES(1000, NULL, 'Electrónica');
INSERT INTO `categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES(1001, NULL, 'Moda');
INSERT INTO `categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES(1002, NULL, 'Hogar y Jardín');
INSERT INTO `categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES(1003, NULL, 'Deportes');
INSERT INTO `categorias` (`ID`, `ESTADO`, `Descripcion`) VALUES(1004, NULL, 'Juguetes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Monto` int DEFAULT NULL,
  `FechaYHora` datetime DEFAULT NULL,
  `MetodoPago` varchar(255) DEFAULT NULL,
  `Puntaje` int DEFAULT NULL,
  `IDArticulo` int DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL,
  `IDDireccion` int DEFAULT NULL,
  `Cantidad` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidos`
--

CREATE TABLE `contenidos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `IDArticulo` int DEFAULT NULL,
  `IDCaracteristica` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `contenidos`
--

INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1305, NULL, '12', 1138, 1003);
INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1306, NULL, '12', 1138, 1004);
INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1307, NULL, '12', 1138, 1005);
INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1308, NULL, '', 1139, 1003);
INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1309, NULL, '', 1139, 1004);
INSERT INTO `contenidos` (`ID`, `ESTADO`, `Descripcion`, `IDArticulo`, `IDCaracteristica`) VALUES(1310, NULL, '', 1139, 1005);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Calle` varchar(255) DEFAULT NULL,
  `Altura` int DEFAULT NULL,
  `Departamento` varchar(255) DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `esPrincipal` tinyint(1) NOT NULL DEFAULT '0',
  `IDArticulo` int DEFAULT NULL,
  `RutaFoto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fotos`
--

INSERT INTO `fotos` (`ID`, `ESTADO`, `esPrincipal`, `IDArticulo`, `RutaFoto`) VALUES(1055, NULL, 1, 1138, 'a2685382-8136-4005-90c9-df5373a669a0.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas`
--

CREATE TABLE `tarjetas` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Numero` varchar(16) DEFAULT NULL,
  `vto` varchar(7) DEFAULT NULL,
  `cvv` varchar(4) DEFAULT NULL,
  `IDUsuario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int NOT NULL,
  `ESTADO` date DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Mail` varchar(255) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `TipoUsuario` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1000, '2023-08-30', 'Juan', 'Factos', 'juan@example2333.com', 'elfactos2333', 'SoyElFactos', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1001, '2023-09-06', 'Juan', 'Factos', 'juan@exampldffsaaaaae2333.com', 'naxadsfdsf', 'SoyElFactos1.asaassaas', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1002, NULL, 'Nombre3', 'Apellido3', 'correo3@example.com', 'username3', 'contraseña3', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1003, NULL, 'Nombre4', 'Apellido4', 'correo4@example.com', 'username4', 'contraseña4', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1004, NULL, 'Nombre5', 'Apellido5', 'correo5@example.com', 'username5', 'contraseña5', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1005, NULL, 'Nombre6', 'Apellido6', 'correo6@example.com', 'username6', 'contraseña6', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1006, NULL, 'Nombre7', 'Apellido7', 'correo7@example.com', 'username7', 'contraseña7', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1007, NULL, 'Nombre8', 'Apellido8', 'correo8@example.com', 'username8', 'contraseña8', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1008, NULL, 'Nombre9', 'Apellido9', 'correo9@example.com', 'username9', 'contraseña9', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1009, NULL, 'Nombre10', 'Apellido10', 'correo10@example.com', 'username10', 'contraseña10', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1017, NULL, 'Juan', 'Factos', 'juan@example2.com', 'elfactos2', 'SoyElFactos', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1018, NULL, 'Juan', 'Factos', 'juan@example2333fdfsfd.com', 'elfactos23334as', 'SoyElFactos.1', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1019, NULL, 'Juan', 'Factos', 'juan@example2333fdfsfdasasas.com', 'elfactos23334asas', 'SoyElFactos.1', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1020, NULL, 'Juan', 'Pérez', 'juan@example.com', 'juanperez', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1021, NULL, 'Juan', 'Pérez', 'juan@example21212.com', 'juanperez2', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1023, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com', 'naaanaajja', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1024, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar', 'nasadasdas', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1025, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar.dot', 'nasadasdasdasds', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1026, NULL, 'juan', 'Pérez', 'juan121asas2@example21212.com.ar.dot.porn', 'nasadasdasdasdsasd', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1027, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.dot.porn', 'n', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1028, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.doteee.porn', 'na', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1029, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.doteaee.aee', 'nac', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1030, NULL, 'juan', 'Pérez', 'juan121asas2@exampledf21212.com.ar.dote.aeeaaaa', 'nach', 'Contraseña123.', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1039, NULL, 'Juan', 'Factos', 'juan@example2333.com', 'elfactos2333asadasdasdsadssadasdasdasdasdsd', 'SoyElFactos1.asaassaas', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1043, NULL, 'Juan', 'Factos', 'juan@examplaaaaae2333.com', 'naxa', 'SoyElFactos1.asaassaas', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1044, NULL, 'Juan', 'Factos', 'juan@exampldffsaaaasdasdaae2333.com', 'naxadsfdssadsadf', 'SoyElFactos1.asaassaas', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1045, NULL, 'Juan', 'Factos', 'juan@exampldffsaaasadasdasdaae2333.com', 'naxadsfdssadsadsadf', 'SoyElFactos1.asaassaas', 'USER');
INSERT INTO `usuarios` (`ID`, `ESTADO`, `Nombre`, `Apellido`, `Mail`, `Username`, `Password`, `TipoUsuario`) VALUES(1046, NULL, 'El mejor articulo', NULL, NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Articulos_Categorias` (`IDCategoria`),
  ADD KEY `FK_Articulos_Usuarios` (`IDUsuario`);

--
-- Indices de la tabla `caracteristicas`
--
ALTER TABLE `caracteristicas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Caracteristicas_Categorias` (`IDCategoria`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Compras_Usuarios` (`IDUsuario`),
  ADD KEY `FK_Compras_Articulos` (`IDArticulo`),
  ADD KEY `FK_Compras_Direcciones` (`IDDireccion`);

--
-- Indices de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Contenidos_Articulos` (`IDArticulo`),
  ADD KEY `FK_Contenidos_Caracteristicas` (`IDCaracteristica`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Direcciones_Usuarios` (`IDUsuario`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Fotos_Articulos` (`IDArticulo`);

--
-- Indices de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UC_username` (`Username`),
  ADD UNIQUE KEY `UC_NumeroTarjeta` (`Username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1140;

--
-- AUTO_INCREMENT de la tabla `caracteristicas`
--
ALTER TABLE `caracteristicas`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1016;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1066;

--
-- AUTO_INCREMENT de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1311;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1013;

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1056;

--
-- AUTO_INCREMENT de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1047;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `FK_Articulos_Categorias` FOREIGN KEY (`IDCategoria`) REFERENCES `categorias` (`ID`),
  ADD CONSTRAINT `FK_Articulos_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `caracteristicas`
--
ALTER TABLE `caracteristicas`
  ADD CONSTRAINT `FK_Caracteristicas_Categorias` FOREIGN KEY (`IDCategoria`) REFERENCES `categorias` (`ID`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `FK_Compras_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `articulos` (`ID`),
  ADD CONSTRAINT `FK_Compras_Direcciones` FOREIGN KEY (`IDDireccion`) REFERENCES `direcciones` (`ID`),
  ADD CONSTRAINT `FK_Compras_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `contenidos`
--
ALTER TABLE `contenidos`
  ADD CONSTRAINT `FK_Contenidos_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `articulos` (`ID`),
  ADD CONSTRAINT `FK_Contenidos_Caracteristicas` FOREIGN KEY (`IDCaracteristica`) REFERENCES `caracteristicas` (`ID`);

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `FK_Direcciones_Usuarios` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `FK_Fotos_Articulos` FOREIGN KEY (`IDArticulo`) REFERENCES `articulos` (`ID`);

--
-- Filtros para la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  ADD CONSTRAINT `Tarjetas_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
