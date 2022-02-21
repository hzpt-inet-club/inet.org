# EasyPOI 的使用说明

### 说明

**_easypoi功能如同名字easy,主打的功能就是容易,让一个没见接触过poi的人员
就可以方便的写出Excel导出,Excel模板导出,Excel导入,Word模板导出,通过简单的注解和模板
语言(熟悉的表达式语法),完成以前复杂的写法_**



## 教程所使用的工具

**前端 : [无](null)**

**后端 :[SpringBoot](https://spring.io/) + [easyPOI](http://www.wupaas.com/) + [MyBatis](https://mybatis.org/mybatis-3/) + [MyBatis-Plus](https://baomidou.com/) + [Lombok](https://projectlombok.org/)**

**数据库 : [MySQL](https://www.mysql.com/)**

**工具 : [IDEA](https://www.jetbrains.com/) + [Navicat](http://www.navicat.com.cn/)**



### 查看实体类的模型

```java
package com.inet.codebase.entity;

import cn.afterturn.easypoi.excel.annotation.Excel;
import cn.afterturn.easypoi.excel.annotation.ExcelTarget;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@ExcelTarget("users")
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
    @Excel(name = "姓名")
    private String userName;

    /**
     * 用户生日
     */
    @Excel(name = "生日" , importFormat = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date userBirthday;

    /**
     * 用户爱好
     */
    @Excel(name = "爱好")
    private String userHabby;

    /**
     * 用户身份证
     */
    @Excel(name = "身份证")
    private String userIdentity;

    /**
     * 用户住址
     */
    @Excel(name = "住址")
    private String userAddress;

}
```



### 关于实体类的继承 `Serializable` 的问题,移步至

**_[实体类为什么需要继承序列化 `Serializable`](https://github.com/xiaoxunyao/Serializable)_**



## 关于EasyPOI的注解说明

**_@Excel 作用到filed上面,是对Excel一列的一个描述_**

**_@ExcelCollection表示一个集合,主要针对一对多的导出,比如一个老师对应多个科目,科目就可以用集合表示_**

**_@ExcelEntity 表示一个继续深入导出的实体,但他没有太多的实际意义,只是告诉系统这个对象里面同样有导出的字段_**

**_@ExcelIgnore 和名字一样表示这个字段被忽略跳过这个导出_**

**_@ExcelTarget 这个是作用于最外层的对象,描述这个对象的id,以便支持一个对象可以针对不同导出做出不同处理_**

#### 关于注解的大多数的参数,还是移步去至

**_[官网](http://doc.wupaas.com/docs/easypoi/easypoi-1c0u96flii98v)_**



## 导入的实例

```java
/**
     * 导入Excel
     * @author HCY
     * @since 2020-10-14
     * @throws Exception
     */
    @Test
    void contextLoads1() throws Exception {
        //文件的位置,Excel文件的说明需要和实体类所对应
        File file = new File("C:\\Users\\Administrator.DESKTOP-TSJVEJ5\\Desktop\\test\\test.xlsx");
        //导入的标题和说明的设置
        ImportParams params = new ImportParams();
        //设置标题
        params.setTitleRows(1);
        //设置说明
        params.setHeadRows(1);
        //导入获取集合
        List<User> users = ExcelImportUtil.importExcel(file, User.class, params);
        //遍历集合
        users.forEach(System.out :: println);
        //进行批量添加
        boolean batch = userService.saveBatch(users);
        //输出结果
        System.out.println(batch);
    }
```



### 导入的xlsx文件的实例样子

![导入的excel实例](https://ss.im5i.com/2020/10/14/Snipaste_2020-10-14_14-41-43.png)



## 导出的实例

```java
	/**
     * 导出Excel
     * @author HCY
     * @since 2020-10-14
     */
    @Test
    void contextLoads2() throws Exception {
        //查询全部
        List<User> list = userService.list();
        //设置Excel的描述文件
        ExportParams exportParams = new ExportParams("用户列表的所有数据", "用户信息" , ExcelType.XSSF);
        //进行导出的基本操作
        Workbook workbook = ExcelExportUtil.exportExcel(exportParams, User.class, list);
        //输入输出流地址
        FileOutputStream fileOutputStream = new FileOutputStream("C:\\Users\\Administrator.DESKTOP-TSJVEJ5\\Desktop\\test\\users.xlsx");
        //进行输出流
        workbook.write(fileOutputStream);
        //关流
        fileOutputStream.close();
        workbook.close();
    }
```

### 导出的Excel实例

![导出的xlsx文件](https://ss.im5i.com/2020/10/14/Snipaste_2020-10-14_14-47-49.png)
 

