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
INSERT INTO `categoria` VALUES (1,'MASAS',1),(2,'BEBESTIBLE',1),(3,'CARNE',1),(4,'BEBESTIBLE',2),(5,'EMBUTIDOS',1),(6,'VARIADOS',1),(9,'CARNE',1),(10,'BEBESTIBLE',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden`
--

LOCK TABLES `orden` WRITE;
/*!40000 ALTER TABLE `orden` DISABLE KEYS */;
INSERT INTO `orden` VALUES (1,'Donas','Caja de donas que no vinieron a recoger ','ba202299-2992-4e0e-ae2a-ef0068fdb29d.jpg','2023-05-29','2023-05-30 18:00:00',' Freire 272, Rancagua, O\'Higgins',4000,6,2,2,4),(2,'Caja de medialunas','Es una caja de medialunas con 6 unidades, se vende porque nadie las compró.','2e9c2f1c-8099-4ea4-9e56-c8f48d529dda.jpg','2023-05-29','2023-05-02 15:20:00','Ibieta 102-134, Rancagua,O\'Higgins',2500,6,2,2,4),(3,'Bolsa de cafe starBucks','Bolsa de cafe guatemala, se vende porque nadie lo compró.','e0ede6d5-3ad9-422e-aecd-3f0b12430bd7.jpg','2023-05-29','2023-06-15 23:59:00','Estado 235 Rancagua, O\'Higgins',2000,6,3,2,4);
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
INSERT INTO `tipousuario` VALUES (1,'ADMINISTRADOR',1),(2,'VENDEDOR',1),(3,'COMPRADOR',1),(4,'hola',2),(5,'adios',2),(6,'ADMINISTRADORss',2),(7,'ADMINISTRADORrrr',2);
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
INSERT INTO `usuario` VALUES (1,'matiass','Marchant','marchant@gmail.com','marchant1',1,1),(2,'Daniel','Marchant','Daniel@gmail.com','marchant2',2,1),(3,'Raul ','Marchant','Raul@gmail.com','marchant3',3,1),(6,'asdasd','asdasd','asdasd@dasdasd','123',1,1),(7,'asdasd','asdasd','asdasd@dasdasd','123',1,2),(8,'ASDASD','ASDASD','asddas@asdasd','123',3,1),(9,'123123','123123','123@123123','123',2,1),(10,'asdasd','asdasd','asdasd@dasd','123',2,1),(11,'dsasdasd','asdsad','marchantmatias706@gmail.com','123',3,1),(12,'dsasdasd','asdsad','marchantmatias706@gmail.com','123',3,1),(13,'Daniel Marchant','no tiene','asdasd@sadasdasd','123',1,1),(14,'asd','asdasd','sadasd@dasasd','123',2,1),(15,'sadasd','asdaqweqwe','qweqwe@123','123',3,1),(16,'Renata','marchant','asdasd@zxczxczxc','123',4,1),(17,'renatin','merchant','daniel@renatin.com','123',3,1);
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

-- Dump completed on 2023-05-29  4:35:02
