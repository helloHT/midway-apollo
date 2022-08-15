# 前言

midway 携程异步配置中心 apollo 组件

Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

底层依赖 @lvgithub/ctrip-apollo-client 模块包

# 使用

## 初始化配置介绍

- metaServerUrl string meta server 地址,负载均衡获取 config server 地址
- configServerUrl string config server 地址，配置了 metaServerUrl 本项可以不配置
- appId string required 应用的 appId
- accessKey string Apollo AccessKey
- clusterName string 集群名,默认值:default
- namespaceList array Namespace 的名字,默认值:[application]
- configPath string 本地配置文件路径 默认值./config/apolloConfig.json
- logger object 日志类 必须实现 logger.info(),logger.error() 两个方法

## 使用

@HotValue() 获取具体的配置字段，封装 getter(热更新)

@GetValue() 直接获取具体的配置字段
