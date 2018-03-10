# **highdsa** -- 分布式系统架构
基于Dubbo、Spring MVC、ELK、ActiveMQ、Redis、FastDFS、Nginx等的一套高可用、高性能、高可扩展的分布式系统架构。

### 主要工程结构如下

`highdsa` -> **工程文件，所有模块的父模块**   
│  README.md   
│   
├─`docs` -> **说明文档，包括开发规范和部署内容**   
│      RESTful API规范.txt   
│      前端命名规范.txt   
│      后端开发规范.txt   
│   
├─`highdsa-api` -> **接口模块，dubbo的所有接口和其他普通接口**   
├─`highdsa-common` -> **公共模块最终jar包，引入所有通用类jar包，以jar包形式存在**   
├─`highdsa-common-parent` -> **公共模块父模块，所有公共模块的父模块**   
│  ├─`highdsa-common-entity` POJO类,与数据库对应   
│  ├─`highdsa-common-exception` 异常体系公共模块   
│  ├─`highdsa-common-log4j2` 日志公共模块   
│  └─`highdsa-common-utility` 通用工具公共模块   
├─`highdsa-service-email` -> **邮件服务提供者模块**   
├─`highdsa-service-fastdfs` -> **文件存储服务提供者模块**   
├─`highdsa-service-mybatis` -> **数据库服务提供者模块**   
├─`highdsa-service-redis` -> **redis缓存服务提供者模块**   
├─`highdsa-web-email` -> **邮件消费者模块，对外提供RESTful API**   
├─`highdsa-web-fastdfs` -> **文件存储消费者模块，对外提供RESTful API**   
├─`highdsa-web-redis` -> **redis消费者模块，对外提供RESTful API**   
└─`highdsa-web-test` -> **消费者测试模块，以web形式整合所有RESTful API，方便测试**   
    
 ### 工程Maven模块依赖关系图如下
 
 ![image](https://github.com/CrazyHusen/highdsa/blob/master/docs/highdsa%E5%B7%A5%E7%A8%8B%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB%E5%9B%BE.jpg)
