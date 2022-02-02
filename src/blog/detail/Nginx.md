<h1 align="center">Nginx</h1>

## 引言

[Nginx](https://github.com/nginx/nginx) 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，其特点是占有内存少，并发能力强。

## 特点

- **处理静态文件，索引文件以及自动索引；打开文件描述符缓冲．**
- **无缓存的反向代理加速，简单的负载均衡和容错．**
- **FastCGI，简单的负载均衡和容错．**
- **模块化的结构。包括 gzipping, byte ranges, chunked responses,以及 SSI-filter 等 filter。如果由 FastCGI 或其它代理服务器处理单页中存在的多个 SSI，则这项处理可以并行运行，而不需要相互等待。**
- **支持 SSL 和 TLSSNI．**

## 安装

> nginx的下载位置该教程默认为 「 usr/local/src 」

### 更新yum

```shell
$ yum update
```

>有关两个命令的一点解释：
>`yum -y update` - 升级所有包，改变软件设置和系统设置,系统版本内核都升级
>`yum -y upgrade` - 升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变

### 安装依赖包

#### 安装make

```shell
$ yum -y install gcc automake autoconf libtool make
```

#### 安装GCC

```shell
$ yum install gcc gcc-c++
```

#### 安装PCRE库

[下载地址 ：ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/](ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/)

```shell
$ cd /usr/local/src
$ wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.34.tar.gz 
$ tar -zxvf pcre-8.34.tar.gz
$ cd pcre-8.34
$ ./configure
$ make
$ make install
```

#### 安装zlib库

[下载地址：https://zlib.net/zlib-1.2.11.tar.gz](https://zlib.net/zlib-1.2.11.tar.gz)

```shell
$ cd /usr/local/src
$ wget http://zlib.net/zlib-1.2.8.tar.gz
$ tar -zxvf zlib-1.2.8.tar.gz
$ cd zlib-1.2.8
$ ./configure
$ make
$ make install
```

#### 安装SSL

```shell
$ cd /usr/local/src
$ wget http://www.openssl.org/source/openssl-1.0.1c.tar.gz
$ tar -zxvf openssl-1.0.1c.tar.gz
```

### 安装Nginx

```shell
$ cd /usr/local/src
$ wget http://nginx.org/download/nginx-1.4.2.tar.gz
$ tar -zxvf nginx-1.4.2.tar.gz
$ cd nginx-1.4.2

$ ./configure 
$ make
$ make install
```

### 检查端口是否被占用

```shell
$ netstat -ano|grep 80
```

### 启动Nginx

```shell
$ sudo /usr/local/nginx/nginx
```

## 控制Nginx

### Nginx 启动

> nginx二进制文件绝对路径，可以根据自己安装路径实际决定

```shell
$ sudo /usr/local/nginx/nginx
```

### Nginx停止

#### 从容

```shell
$ ps -ef |grep nginx
$ kill -QUIT nginx主进程号
```

#### 快速

```shell
$ ps -ef |grep nginx
$ kill -TERM nginx主进程号
```

#### 强制

```shell
$ ps -ef |grep nginx
$ kill -9 nginx主进程号
```

### Nginx 重启

```shell
$ kill -QUIT cat /usr/local/nginx/nginx.pid
$ sudo /usr/local/nginx/nginx
```

## Nginx 配置初步详解

### 配置注释

```nginx
#全局块
...              

#events块
events {         
   ...
}

#http块
http      
{
	  #http全局块
    ...   
    #server块
    server        
    { 
    		#server全局块
        ...       
        #location块
        location [PATTERN]   
        {
            ...
        }
        #location块
        location [PATTERN] 
        {
            ...
        }
    }
    #server块
    server        
    { 
    		#server全局块
        ...       
        #location块
        location [PATTERN]   
        {
            ...
        }
        #location块
        location [PATTERN] 
        {
            ...
        }
    }
    #http全局块
    ...     
}
```

### 注释解释

- **全局块**：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
- 2、**events块**：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
- 3、**http块**：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
- 4、**server块**：配置虚拟主机的相关参数，一个http中可以有多个server。
- 5、**location块**：配置请求的路由，以及各种页面的处理情况。

### 配置案例

```nginx
########### 每个指令必须有分号结束。#################
#user administrator administrators;  #配置用户或者组，默认为nobody nobody。
#worker_processes 2;  #允许生成的进程数，默认为1
#pid /nginx/pid/nginx.pid;   #指定nginx进程运行文件存放地址
error_log log/error.log debug;  #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
events {
    accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on
    multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off
    #use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
    worker_connections  1024;    #最大连接数，默认为512
}
http {
    include       mime.types;   #文件扩展名与文件类型映射表
    default_type  application/octet-stream; #默认文件类型，默认为text/plain
    #access_log off; #取消服务日志    
    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式
    access_log log/access.log myFormat;  #combined为日志格式的默认值
    sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
    sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
    keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。

    upstream mysvr {   
      server 127.0.0.1:7878;
      server 192.168.10.121:3333 backup;  #热备
    }
    error_page 404 https://www.baidu.com; #错误页
    server {
        keepalive_requests 120; #单连接请求上限次数。
        listen       4545;   #监听端口
        server_name  127.0.0.1;   #监听地址       
        location  ~*^.+$ {       #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
           #root path;  #根目录
           #index vv.txt;  #设置默认页
           proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表
           deny 127.0.0.1;  #拒绝的ip
           allow 172.18.5.54; #允许的ip           
        } 
    }
}
```

## 配置说明

### 设置 404 页面导向地址

```nginx
error_page 404 https://www.baidu.com; #错误页
proxy_intercept_errors on;    #如果被代理服务器返回的状态码为400或者大于400，设置的error_page配置起作用。默认为off。
```

### 只允许接受get，post请求方法的一种

```nginx
proxy_method get;    #支持客户端的请求方法。post/get；
```

### 设置支持的http协议版本

```nginx
proxy_http_version 1.0 ; #Nginx服务器提供代理服务的http协议版本1.0，1.1，默认设置为1.0版本
```

### 轮询的方式负载均衡

```nginx
proxy_connect_timeout 1;   #nginx服务器与被代理的服务器建立连接的超时时间，默认60秒
proxy_read_timeout 1; #nginx服务器想被代理服务器组发出read请求后，等待响应的超时间，默认为60秒。
proxy_send_timeout 1; #nginx服务器想被代理服务器组发出write请求后，等待响应的超时间，默认为60秒。
proxy_ignore_client_abort on;  #客户端断网时，nginx服务器是否终端对被代理服务器的请求。默认为off。
```

### 异常

#### 配置

```nginx
proxy_next_upstream timeout;  #反向代理upstream中设置的服务器组，出现故障时，被代理服务器返回的状态值。
```

#### 参数

- error：建立连接或向被代理的服务器发送请求或读取响应信息时服务器发生错误。
- timeout：建立连接，想被代理服务器发送请求或读取响应信息时服务器发生超时。
- invalid_header:被代理服务器返回的响应头异常。
- off:无法将请求分发给被代理的服务器。
- http_400，....:被代理服务器返回的状态码为400，500，502，等。

### 代理的基础配置模板

```nginx
include       mime.types;   #文件扩展名与文件类型映射表
default_type  application/octet-stream; #默认文件类型，默认为text/plain
#access_log off; #取消服务日志    
log_format myFormat ' $remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式
access_log log/access.log myFormat;  #combined为日志格式的默认值
sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。
proxy_connect_timeout 1;   #nginx服务器与被代理的服务器建立连接的超时时间，默认60秒
proxy_read_timeout 1; #nginx服务器想被代理服务器组发出read请求后，等待响应的超时间，默认为60秒。
proxy_send_timeout 1; #nginx服务器想被代理服务器组发出write请求后，等待响应的超时间，默认为60秒。
proxy_http_version 1.0 ; #Nginx服务器提供代理服务的http协议版本1.0，1.1，默认设置为1.0版本。
#proxy_method get;    #支持客户端的请求方法。post/get；
proxy_ignore_client_abort on;  #客户端断网时，nginx服务器是否终端对被代理服务器的请求。默认为off。
proxy_ignore_headers "Expires" "Set-Cookie";  #Nginx服务器不处理设置的http相应投中的头域，这里空格隔开可以设置多个。
proxy_intercept_errors on;    #如果被代理服务器返回的状态码为400或者大于400，设置的error_page配置起作用。默认为off。
proxy_headers_hash_max_size 1024; #存放http报文头的哈希表容量上限，默认为512个字符。
proxy_headers_hash_bucket_size 128; #nginx服务器申请存放http报文头的哈希表容量大小。默认为64个字符。
proxy_next_upstream timeout;  #反向代理upstream中设置的服务器组，出现故障时，被代理服务器返回的状态值。error|timeout|invalid_header|http_500|http_502|http_503|http_504|http_404|off
#proxy_ssl_session_reuse on; 默认为on，如果我们在错误日志中发现“SSL3_GET_FINSHED:digest check failed”的情况时，可以将该指令设置为off。
```

## 负载均衡

### 基础配置负载均衡

```nginx
upstream mysvr { 
    server 192.168.10.121:3333;
    server 192.168.10.122:3333;
}
server {
    ....
    location  ~*^.+$ {         
        proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表         
    }
}
```

### 热备

> 如果你有2台服务器，当一台服务器发生事故时，才启用第二台服务器给提供服务。服务器处理请求的顺序：AAAAAA突然A挂啦，BBBBBBBBBBBBBB.....

```nginx
upstream mysvr { 
    server 127.0.0.1:7878; 
    server 192.168.10.121:3333 backup;  #热备     
}
```

### 轮询

> nginx默认就是轮询其权重都默认为1，服务器处理请求的顺序：ABABABABAB....

```nginx
upstream mysvr { 
    server 127.0.0.1:7878;
    server 192.168.10.121:3333;       
}
```

### 加权轮询

> 跟据配置的权重的大小而分发给不同服务器不同数量的请求。如果不设置，则默认为1。下面服务器的请求顺序为：ABBABBABBABBABB....

```nginx
upstream mysvr { 
    server 127.0.0.1:7878 weight=1;
    server 192.168.10.121:3333 weight=2;
}
```

### ip_hash

> nginx会让相同的客户端ip请求相同的服务器。

```nginx
upstream mysvr { 
    server 127.0.0.1:7878; 
    server 192.168.10.121:3333;
    ip_hash;
}
```

## Docker + Nginx

### 直接上一个案例

#### 先在宿主机创建一个文件夹，用来存在此次Nginx的一些配置

例如地址为 ：「 /xxy/one」

创建一个nginx.conf文件

创建一个log目录存放nginx的日志

有一个基础的网页项目

#### 新建一个「nginx.conf」

```nginx
worker_processes 1;
events {
    worker_connections 1024;
}
 
http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
 
	server {
        listen       80;
        server_name  localhost;
 
        location / {
              root   /usr/xxy/tetris/;
             index  index.html index.htm;
        } 
	}	
}
```

#### 进行挂载映射

```shell
$ docker run \
--name my_nging \
-d -p 8080:80 \
-v xxy/nginx.conf:/etc/nginx/nginx.conf \
-v xxy/log:/var/log/nginx \
-v xxy/tetris:/usr/xxy/tetris \
nginx
```

> - 第一个-v：挂载nginx的主配置文件，以方便在宿主机上直接修改容器的配置文件
>
> - 第二个-v：挂载容器内nginx的日志，容器运行起来之后，可以直接在宿主机的这个目录中查看nginx日志
>
> - 第三个-v：挂载静态页面目录

#### 完成


