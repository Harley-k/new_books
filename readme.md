## 开发步骤
- 写接口,SOLID 开发原则  
- 实现接口 service 可被注入 @可被注入  
- 起名字
    容器.绑定<interface类>(名字).to(具体的类)  
    容器 : 单利/重新构建  
    container.bind<Warrior>(TYPES.Warrior).to(Ninja);  
- 执行注入到需要的类型