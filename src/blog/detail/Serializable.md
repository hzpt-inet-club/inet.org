# 序列化 `Serializable`

### 在Java代码中设计实体类 `eneity` 时, 通常都会实现  `Serializable` 接口

### 类似这样

```java
package com.inet.codebase.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 用户实体类
 * </p>
 *
 * @author HCY
 * @since 2020-10-13
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("tbl_user")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户序号
     */
    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer userId;

    /**
     * 用户姓名
     */
    private String userName;

    /**
     * 用户生日
     */
    private LocalDateTime userBirthday;

    /**
     * 用户爱好
     */
    private String userHabby;

    /**
     * 用户身份证
     */
    private String userIdentity;

    /**
     * 用户住址
     */
    private String userAddress;

}
```



## `Serializable`接口的用处是什么呢?

**_一个将实体类序列化的接口,一个类只有实现了`Serializable` 接口 , 它的对象才能被序列化_**



## 什么是序列化呢?

**_序列化是将对象状态转换为可保持或传输的格式的过程。_**

**_与序列化相对的是反序列化，它将流转换为对象。_**

**_这两个过程结合起来，可以轻松地存储和传输数据。_**



## 为什么实体类对象 `entity` 需要序列化

**_将对象转换为字节序列的过程称为对象的序列化_**

**_将字节序列恢复为对象的过程称为对象的反序列化_**



## 什么情况下需要使用序列化

**_当我们需要把对象的状态信息通过网络进行传输，或者需要将对象的状态信息持久化，以便将来使用时都需要把对象进行序列化_**



## 实现`Serializable` 时的序列话ID的两种生成策略

**_固定的1L (建议这么使用 , 可以确保代码一致时,反序列化成功)_**

```java
private static final long serialVersionUID = 1L;
```

**_一个是随机生成一个不重复的 long 类型数据（作用是：通过改变序列化 ID 可以用来限制某些用户的使用。）_**



## 打开序列化`Serializable` 的源代码,发现的秘密

![Serializable的源代码](https://ss.im5i.com/2020/10/13/RVASKLUBYIHKS9A.png)

### 我们发现这是一个空的接口,那为什么需要实现他呢?

```markdown
# 解释
**_
当我们让实体类实现Serializable接口时，其实是在告诉JVM此类可被序列化，可被默认的序列化机制序列化.
然后，需要说明的是，当我们在实体类声明实现Serializable接口时，再次进行观察，会发现这些类是需要被远程调用的。也就是说需要或者可能需要被远程调用，这就是序列化便于传输的用途。
_**
```


