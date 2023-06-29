-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: food
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `estadoCategoria_id_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estadoCategoria_id_fk` (`estadoCategoria_id_fk`),
  CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`estadoCategoria_id_fk`) REFERENCES `estadocategoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'MASAS',1),(2,'BEBESTIBLE',1),(3,'CARNE',1),(5,'EMBUTIDOS',1),(6,'VARIADOS',1);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadocategoria`
--

DROP TABLE IF EXISTS `estadocategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadocategoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadocategoria`
--

LOCK TABLES `estadocategoria` WRITE;
/*!40000 ALTER TABLE `estadocategoria` DISABLE KEYS */;
INSERT INTO `estadocategoria` VALUES (1,'HABILITADA'),(2,'DESHABILITADA');
/*!40000 ALTER TABLE `estadocategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoorden`
--

DROP TABLE IF EXISTS `estadoorden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadoorden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoorden`
--

LOCK TABLES `estadoorden` WRITE;
/*!40000 ALTER TABLE `estadoorden` DISABLE KEYS */;
INSERT INTO `estadoorden` VALUES (1,'DESHABILITADA'),(2,'DISPONIBLE'),(3,'RESERVADA'),(4,'VENDIDA');
/*!40000 ALTER TABLE `estadoorden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadotipousuario`
--

DROP TABLE IF EXISTS `estadotipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadotipousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadotipousuario`
--

LOCK TABLES `estadotipousuario` WRITE;
/*!40000 ALTER TABLE `estadotipousuario` DISABLE KEYS */;
INSERT INTO `estadotipousuario` VALUES (1,'HABILITADO'),(2,'DESHABILITADO');
/*!40000 ALTER TABLE `estadotipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadousuario`
--

DROP TABLE IF EXISTS `estadousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadousuario`
--

LOCK TABLES `estadousuario` WRITE;
/*!40000 ALTER TABLE `estadousuario` DISABLE KEYS */;
INSERT INTO `estadousuario` VALUES (1,'HABILITADO'),(2,'DESHABILITADO');
/*!40000 ALTER TABLE `estadousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden`
--

DROP TABLE IF EXISTS `orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `image` varchar(300) NOT NULL,
  `fecha` date DEFAULT NULL,
  `fechaVencimiento` datetime DEFAULT NULL,
  `direccion` varchar(70) DEFAULT NULL,
  `precio` int(20) DEFAULT NULL,
  `categoria_id_fk` int(11) DEFAULT NULL,
  `estadoorden_id_fk` int(11) DEFAULT NULL,
  `usuario_id_fk` int(11) DEFAULT NULL,
  `razon_id_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id_fk` (`categoria_id_fk`),
  KEY `estadoorden_id_fk` (`estadoorden_id_fk`),
  KEY `usuario_id_fk` (`usuario_id_fk`),
  KEY `razon_id_fk` (`razon_id_fk`),
  CONSTRAINT `orden_ibfk_1` FOREIGN KEY (`categoria_id_fk`) REFERENCES `categoria` (`id`),
  CONSTRAINT `orden_ibfk_2` FOREIGN KEY (`estadoorden_id_fk`) REFERENCES `estadoorden` (`id`),
  CONSTRAINT `orden_ibfk_3` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario` (`id`),
  CONSTRAINT `orden_ibfk_4` FOREIGN KEY (`razon_id_fk`) REFERENCES `razon` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden`
--

LOCK TABLES `orden` WRITE;
/*!40000 ALTER TABLE `orden` DISABLE KEYS */;
INSERT INTO `orden` VALUES (1,'Donas','Caja de donas que no vinieron a recoger ','ba202299-2992-4e0e-ae2a-ef0068fdb29d.jpg','2023-05-29','2023-05-30 18:00:00',' Freire 272, Rancagua, O\'Higgins',4000,6,2,2,4),(2,'Caja de medialunas','Es una caja de medialunas con 6 unidades, se vende porque nadie las compró.','2e9c2f1c-8099-4ea4-9e56-c8f48d529dda.jpg','2023-05-29','2023-05-02 15:20:00','Ibieta 102-134, Rancagua,O\'Higgins',2500,6,3,2,4),(3,'Bolsa de cafe starBucks','Bolsa de cafe guatemala, se vende porque nadie lo compró.','e0ede6d5-3ad9-422e-aecd-3f0b12430bd7.jpg','2023-05-29','2023-06-15 23:59:00','Estado 235 Rancagua, O\'Higgins',2000,6,3,2,4),(16,'papas','papas','b50960dc-b040-4f82-8689-1f1f9ecdb10b.jpg','2023-06-28','2023-06-30 20:00:00','papas',121312,1,1,2,1),(17,'PAPA2','papa2','5a30e221-469b-4227-9481-6beb00a45dfc.jpg','2023-06-28','2023-07-09 22:28:00','papa2',1200,1,1,2,2),(18,'papas33','asdasdasdasd','9c075a93-fa49-438d-bce7-e5969f945fcd.jpg','2023-06-29','2023-07-01 06:21:00',' Freire 272, Rancagua, ONo',3990,2,1,2,2);
/*!40000 ALTER TABLE `orden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `razon`
--

DROP TABLE IF EXISTS `razon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `razon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `razon`
--

LOCK TABLES `razon` WRITE;
/*!40000 ALTER TABLE `razon` DISABLE KEYS */;
INSERT INTO `razon` VALUES (1,'Proximo a desechar'),(2,'Devolucion de producto'),(3,'Producto no vendido'),(4,'Otro');
/*!40000 ALTER TABLE `razon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `estadoTipoUsuario_id_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estadoTipoUsuario_id_fk` (`estadoTipoUsuario_id_fk`),
  CONSTRAINT `tipousuario_ibfk_1` FOREIGN KEY (`estadoTipoUsuario_id_fk`) REFERENCES `estadotipousuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
INSERT INTO `tipousuario` VALUES (1,'ADMINISTRADOR',1),(2,'VENDEDOR',1),(3,'COMPRADOR',1),(4,'hola',2);
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `tipoUsuario_id_fk` int(11) DEFAULT NULL,
  `estadoUsuario_id_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tipoUsuario_id_fk` (`tipoUsuario_id_fk`),
  KEY `estadoUsuario_id_fk` (`estadoUsuario_id_fk`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipoUsuario_id_fk`) REFERENCES `tipousuario` (`id`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`estadoUsuario_id_fk`) REFERENCES `estadousuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'matias','Marchant','marchant@gmail.com','123',1,1),(2,'daniel','Marchant','Daniel@gmail.com','123',2,1),(3,'raul','Marchant','Raul@gmail.com','123',3,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 15:38:43
