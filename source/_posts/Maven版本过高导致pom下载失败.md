---
title: Maven版本过高导致pom下载失败
date: 2022-04-19 15:21:14
tags:
	- maven
	- spring
categories: 
  - 奇怪的问题
---
像往常一样clone项目之后，在解析依赖的时候报：
>javastruct:pom:0.1 failed to transfer from http://0.0.0.0/ during a previous attempt. This failure was cached in the local repository and resolution is not reattempted until the update interval of maven-default-http-blocker has elapsed or updates are forced.
<!-- more -->
## 排查问题

在遇到这个问题的时候，我第一时间排查的是不是setting.xml文件错误了，因为公司的项目使用的是不同的setting.xml文件，结果排查了半天，在maven又是clean又是install的，一直失败orz

## 找到问题

在项目组的前辈的指导下，觉得可能是maven版本不同导致下载依赖失败，因为他们的都能下载成功。因为是新安装的idea，自带的maven版本为```apache-maven-3.8.1```，但是前辈们的电脑maven版本都比较低，我换了```apache-maven-3.6.3```之后果然下载依赖都成功了。

## 原因

在网上的说明中，我找到了官方给的解释
```xml
2021.3 IDE version has updated the version of the bundled Maven to 3.8.1. In this version, Maven blocks the access to http repositories by default. Before that, Maven itself has moved from using the http repositories.

So now one needs to explicitly configure Maven to allow http repositories if they are used in the project. E.g. in settings.xml add a mirror to your http repository that allows HTTP:

<mirrors>
    <mirror>
        <id>my-repo-mirror</id>
        <name>My Repo HTTP Mirror</name>
        <url>http://url-to.my/repo</url>
        <mirrorOf>my-repo</mirrorOf>
    </mirror>
</mirrors>

```
意思大概是在ide版本2021.3之后，ide将maven版本捆绑为```3.8.1```，在这个版本中，maven默认会组织对http存储库的访问。如果需要访问http存储库，需要在setting.xml中加上一个允许http的镜像。

由于我用的setting.xml不能更改，所以肯定不能用这个方法。我们也可以**降低maven版本**来达到下载http存储库。

## 总结

遇到这个问题的时候有两个解决办法

* 不能降低maven版本的话需要修改项目setting.xml文件，加入允许http的镜像
* 不能改变setting.xml文件的话则需要降低版本至```3.6.x```以下
