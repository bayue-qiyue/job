/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : cnode

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 02/11/2020 20:24:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sing
-- ----------------------------
DROP TABLE IF EXISTS `sing`;
CREATE TABLE `sing`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `register` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `num` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sing
-- ----------------------------
INSERT INTO `sing` VALUES (1, '11111111111', '11112234');
INSERT INTO `sing` VALUES (2, '11111111112', '11112234');
INSERT INTO `sing` VALUES (3, '11111111114', '5011545');
INSERT INTO `sing` VALUES (4, '12334556676', '123456');
INSERT INTO `sing` VALUES (5, '12332111111', '1232434');

SET FOREIGN_KEY_CHECKS = 1;
