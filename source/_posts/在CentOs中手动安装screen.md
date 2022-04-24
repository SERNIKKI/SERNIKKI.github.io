---
title: 在CentOs中手动安装screen
date: 2022-04-20 19:59:48
tags:
	- linux
	- screen
categories: 
  - 学习笔记
---
当yum不能使用时手动安装screen
<!-- more -->
<div class="warning">

> screen的安装依赖于ncurses，如果没有ncurses依赖包需要手动安装

</div>

### 1、安装ncurses

#### 1.1、下载依赖包ncurses
[地址]('https://ftp.gnu.org/gnu/ncurses/')

#### 1.2、安装
```sh
#先解压，我这里是6.1版本
tar -xzvf ncurses-6.1.tar.gz 

cd ncurses-6.1
 
mkdir build && cd build
 
../configure
 
make && sudo make install
```

### 2、安装screen

#### 2.1、下载screen
[地址]('https://ftp.gnu.org/gnu/screen/')

#### 2.2、安装
```sh
#同样是先解压，我这里是screen-4.7.0.tar.gz
tar -xzvf screen-4.7.0.tar.gz

cd screen-4.7.0

mkdir build && cd build
 
../configure

make && sudo make install
```

没有报错的话安装就完成啦~
