<h1 align="center">Docker</h1>

## 引言

### 简介

[Docker](https://github.com/docker/docker-ce) 是一个开源的应用容器引擎，基于 [Go 语言](https://github.com/golang/go) 并遵从 [Apache-2.0 License](https://github.com/docker/docker-ce/blob/master/LICENSE)协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

### 应用场景

- Web 应用的自动化打包和发布。
- 自动化测试和持续集成、发布。
- 在服务型环境中部署和调整数据库或其他的后台应用。
- 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。

### 优点

- 快速，一致地交付您的应用程序
- 响应式部署和扩展
- 在同一硬件上运行更多工作负载

## 基本概念

### 镜像 - Image

> **Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。**
### 容器 - Container

> **镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。**
### 仓库 - Repository

> **仓库可看成一个代码控制中心，用来保存镜像。**
## 初次使用

### 查看Docker安装是否成功

#### 命令

```shell
$ docker version
```

#### 结果

```shell
Client:
 Cloud integration: 1.0.17
 Version:           20.10.8
 API version:       1.41
 Go version:        go1.16.6
 Git commit:        3967b7d
 Built:             Fri Jul 30 19:55:20 2021
 OS/Arch:           darwin/amd64
 Context:           default
 Experimental:      true
Server: Docker Engine - Community
 Engine:
  Version:          20.10.8
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.6
  Git commit:       75249d8
  Built:            Fri Jul 30 19:52:10 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.9
  GitCommit:        e25210fe30a0a703442421b0f60afac609f950a3
 runc:
  Version:          1.0.1
  GitCommit:        v1.0.1-0-g4144b63
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### 使用 Hello World 容器

> **直接运行Docker中一个比较基础的容器。**
#### 命令

```shell
$ docker run hello-world
```

#### 结果

```shell
Hello from Docker!
This message shows that your installation appears to be working correctly.
To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash
Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/
For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

#### 参数讲解

- docker --> Docker 的二进制执行文件。
- run --> 运行一个容器
- hello-world --> 镜像名称

### 创建 HelloWorld 容器

#### 命令

```shell
$ docker run ubuntu:15.10 /bin/echo "hello world"
```

#### 结果

```shell
hello world
```

#### 参数讲解

- docker -- Docker 的二进制执行文件。
- run -- 运行一个容器。
- ubuntu:15.10 -- 指定要运行的镜像
- /bin/echo "Hello world" -- 在启动的容器里执行的命令

## 运行容器

### 运行交互式的容器

> **我们可以使用 -i -t 跟容器进行对话。**
#### 命令

```shell
$ docker run -i -t ubuntu:15.10 /bin/bash
```

#### 结果

```shell
root@5ae2602a0f35:/# 
```

#### 尝试

> **我们可以在该容器内查看一些基本信息**
```shell
root@5ae2602a0f35:/# cat /proc/version
Linux version 5.10.47-linuxkit (root@buildkitsandbox) (gcc (Alpine 10.2.1_pre1) 10.2.1 20201203, GNU ld (GNU Binutils) 2.35.2) #1 SMP Sat Jul 3 21:51:47 UTC 2021
```

#### 退出

> **我们可以使用命令退出容器**
```shell
root@5ae2602a0f35:/# exit
exit
xiaoxunyao:~ xiaoxunyao$ 
```

### 后台运行容器

#### 命令

```shell
$ docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
```

#### 参数讲解

- -d -- 可以后台运行

#### 结果

```shell
> 62ffb09a727e52d513d611141b83be7fb1d66dfb4e6f20fb797ffe16f2c9dfd2
```

> **这个长字符串叫做容器 ID，对每个容器来说都是唯一的，我们可以通过容器 ID 来查看对应的容器发生了什么。**
#### 容器ID

##### 查看容器ID

###### 命令

```shell
$ docker ps
```

###### 结果

```shell
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
62ffb09a727e   ubuntu:15.10   "/bin/sh -c 'while t…"   2 minutes ago   Up 2 minutes             gifted_neumann
```

###### 结果剖析

- **CONTAINER ID:** 容器 ID。

- **IMAGE:** 使用的镜像。

- **COMMAND:** 启动容器时运行的命令。

- **CREATED:** 容器的创建时间。

- **STATUS:** 容器状态。
  - created（已创建）
  - restarting（重启中）
  - running 或 Up（运行中）
  - removing（迁移中）
  - paused（暂停）
  - exited（停止）
  - dead（死亡）

- **PORTS:** 容器的端口信息和使用的连接类型（tcp\udp）。

- **NAMES:** 自动分配的容器名称。

##### 查看容器内部

###### 命令

```shell
$ docker logs 「CONTAINER ID」
```

###### 结果

```shell
$ docker logs 62ff
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
```

##### 停止容器

###### 命令

```shell
$ docker stop 「CONTAINER ID」
```

###### 结果

```shell
$ docker stop 62ff
62ff
```

## 容器使用

### 查看全部命令

#### 命令

```shell
$ docker
```

#### 结果

```shell
Usage:  docker [OPTIONS] COMMAND
A self-sufficient runtime for containers
Options:
      --config string      Location of client config files (default "/Users/huchengye/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env
                           var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/Users/huchengye/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/Users/huchengye/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/Users/huchengye/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit
Management Commands:
  builder     Manage builds
  buildx*     Build with BuildKit (Docker Inc., v0.6.1-docker)
  compose*    Docker Compose (Docker Inc., v2.0.0-rc.1)
  config      Manage Docker configs
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  scan*       Docker Scan (Docker Inc., v0.8.0)
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes
Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes
Run 'docker COMMAND --help' for more information on a command.
To get more help with docker, check out our guides at https://docs.docker.com/go/guides/
```
#### 细节查询
> **例如我们想查询 run 在一层的命令**
##### 命令
```shell
$ docker run -help
```
##### 结果
```shell
Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
Run a command in a new container
Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO (relative weight), between 10 and 1000, or 0 to disable
                                       (default 0)
      --blkio-weight-device list       Block IO weight (relative device weight) (default [])
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup for the container
      --cgroupns string                Cgroup namespace to use (host|private)
                                       'host':    Run the container in the Docker host's cgroup namespace
                                       'private': Run the container in its own private cgroup namespace
                                       '':        Use the cgroup namespace as configured by the
                                                  default-cgroupns-mode option on the daemon (default)
      --cidfile string                 Write the container ID to the file
      --cpu-period int                 Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int                  Limit CPU CFS (Completely Fair Scheduler) quota
      --cpu-rt-period int              Limit CPU real-time period in microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime in microseconds
  -c, --cpu-shares int                 CPU shares (relative weight)
      --cpus decimal                   Number of CPUs
      --cpuset-cpus string             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string             MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                         Run container in background and print container ID
      --detach-keys string             Override the key sequence for detaching a container
      --device list                    Add a host device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit read rate (bytes per second) from a device (default [])
      --device-read-iops list          Limit read rate (IO per second) from a device (default [])
      --device-write-bps list          Limit write rate (bytes per second) to a device (default [])
      --device-write-iops list         Limit write rate (IO per second) to a device (default [])
      --disable-content-trust          Skip image verification (default true)
      --dns list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      --domainname string              Container NIS domain name
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --env-file list                  Read in a file of environment variables
      --expose list                    Expose a port or a range of ports
      --gpus gpu-request               GPU devices to add to the container ('all' to pass all GPUs)
      --group-add list                 Add additional groups to join
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check (ms|s|m|h) (default 0s)
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period for the container to initialize before starting
                                       health-retries countdown (ms|s|m|h) (default 0s)
      --health-timeout duration        Maximum time to allow one check to run (ms|s|m|h) (default 0s)
      --help                           Print usage
  -h, --hostname string                Container host name
      --init                           Run an init inside the container that forwards signals and reaps processes
  -i, --interactive                    Keep STDIN open even if not attached
      --ip string                      IPv4 address (e.g., 172.30.100.104)
      --ip6 string                     IPv6 address (e.g., 2001:db8::33)
      --ipc string                     IPC mode to use
      --isolation string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, --label list                     Set meta data on a container
      --label-file list                Read in a line delimited file of labels
      --link list                      Add link to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver for the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address (e.g., 92:d0:c6:0a:29:33)
  -m, --memory bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to 100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network network                Connect a container to a network
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host's OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --platform string                Set platform if server is multi-platform capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container's port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --pull string                    Pull image before running ("always"|"missing"|"never") (default "missing")
      --read-only                      Mount the container's root filesystem as read only
      --restart string                 Restart policy to apply when a container exits (default "no")
      --rm                             Automatically remove the container when it exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process (default true)
      --stop-signal string             Signal to stop a container (default "SIGTERM")
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format: <name|uid>[:<group|gid>])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container
```
### 获取镜像
#### 命令
```shell
$ docker pull 「Image Name」
```
#### 结果
```shell
$ docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
16ec32c2132b: Pull complete 
Digest: sha256:82becede498899ec668628e7cb0ad87b6e1c371cb8a1e597d83a47fac21d6af3
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
```
### 查看所有的容器命令
```shell
$ docker ps -a
```
### 启动暂停的容器命令
```shell
$ docker start 「CONTAINER ID」
```
### 暂停容器命令
```shell
$ docker stop 「CONTAINER ID」
```
### 重启容器命令
```shell
$ docker restart 「CONTAINER ID」
```
### 命名容器命令
```shell
docker run -d --name 「name」 「CONTAINER NAME」
```
### 进入容器命令
```shell
$ docker exec -it 「CONTAINER ID」
```
### 导出容器命令
```shell
$ docker export 「CONTAINER ID」 > 「file path」
```
### 导入容器命令
```shell
$ cat 「file path」 | docker import - 「image Name」: v1
```
### 删除容器的命令
```shell
$ docker rm -f 「CONTAINER ID」
```
## 镜像使用
### 列出所有镜像
#### 命令
```shell
$ docker images
```
#### 结果
```shell
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
ubuntu        latest    1318b700e415   4 weeks ago    72.8MB
hello-world   latest    d1165f221234   5 months ago   13.3kB
ubuntu        15.10     9b9cb95443b5   5 years ago    137MB
```
#### 结果剖析
- **REPOSITORY：**表示镜像的仓库源
- **TAG：**镜像的标签
- **IMAGE ID：**镜像ID
- **CREATED：**镜像创建时间
- **SIZE：**镜像大小
### 搜索镜像
#### 命令
```shell
$  docker search 「image name」
```
#### 结果
```shell
$ docker search java
NAME                                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
node                                     Node.js is a JavaScript-based platform for s…   10450     [OK]       
tomcat                                   Apache Tomcat is an open source implementati…   3104      [OK]       
openjdk                                  OpenJDK is an open-source implementation of …   2886      [OK]       
java                                     DEPRECATED; use "openjdk" (or other JDK impl…   1976      [OK]       
ghost                                    Ghost is a free and open source blogging pla…   1407      [OK]       
couchdb                                  CouchDB is a database that uses JSON for doc…   433       [OK]       
jetty                                    Jetty provides a Web server and javax.servle…   371       [OK]       
groovy                                   Apache Groovy is a multi-faceted language fo…   116       [OK]       
lwieske/java-8                           Oracle Java 8 Container - Full + Slim - Base…   49                   [OK]
nimmis/java-centos                       This is docker images of CentOS 7 with diffe…   42                   [OK]
fabric8/java-jboss-openjdk8-jdk          Fabric8 Java Base Image (JBoss, OpenJDK 8)      29                   [OK]
fabric8/java-alpine-openjdk8-jdk         Fabric8 Java Base Image (Alpine, OpenJDK 8, …   23                   [OK]
timbru31/java-node                       OpenJDK JRE or JDK (8 or 11) with Node.js 12…   17                   [OK]
cloudbees/java-build-tools               Docker image with commonly used tools to bui…   16                   [OK]
fabric8/java-centos-openjdk8-jdk         Fabric8 Java Base Image (CentOS, OpenJDK 8, …   14                   [OK]
frekele/java                             docker run --rm --name java frekele/java        12                   [OK]
blacklabelops/java                       Java Base Images.                               8                    [OK]
rightctrl/java                           Oracle Java                                     3                    [OK]
cfje/java-test-applications              Java Test Applications CI Image                 2                    
buildo/java8-wkhtmltopdf                 Java 8 + wkhtmltopdf                            1                    [OK]
cfje/java-buildpack                      Java Buildpack CI Image                         1                    
jelastic/javaengine                      An image of the Java Engine server maintaine…   1                    
cfje/java-resource                       Java Concourse Resource                         1                    
cfje/java-buildpack-dependency-builder   Java Buildpack Dependencies Builder Image       0                    
thingswise/java-docker                   Java + dcd                                      0                    [OK]
```
### 删除镜像
#### 命令
```shell
$ docker rmi 「image name」
```
#### 结果
```shell
Untagged: hello-world:latest
Untagged: hello-world@sha256:7d91b69e04a9029b99f3585aaaccae2baa80bcf318f4a5d2165a9898cd2dc0a1
Deleted: sha256:d1165f2212346b2bab48cb01c1e39ee8ad1be46b87873d9ca7a4e434980a7726
Deleted: sha256:f22b99068db93900abe17f7f5e09ec775c2826ecfe9db961fea68293744144bd
```
### 创建镜像
> 我们有两种方式来进行创建镜像
>
> - 1、从已经创建的容器中更新镜像，并且提交这个镜像
> - 2、使用 Dockerfile 指令来创建一个新的镜像
`因为比较复杂，这边建议掌握基础之后，自行去阅读文档。`
## 容器连接
### 端口映射
#### 随机映射
>  -P : 是容器内部端口**随机**映射到主机的高端口。
##### 命令
```shell
$ docker run -d -P training/webapp python app.py
```
##### 结果
```shell
CONTAINER ID    IMAGE               COMMAND            ...           PORTS                     NAMES
fce072cc88ce    training/webapp     "python app.py"    ...     0.0.0.0:32768->5000/tcp   grave_hopper
```
#### 指定映射
> -p : 是容器内部端口绑定到**指定**的主机端口。
##### 命令
```shell
$ docker run -d -p 5000:5000 training/webapp python app.py
```
##### 结果
```shell
CONTAINER ID        IMAGE               COMMAND           ...           PORTS                     NAMES
33e4523d30aa        training/webapp     "python app.py"   ...   0.0.0.0:5000->5000/tcp    berserk_bartik
```
#### 指定网络地址
##### 命令
> 绑定地址 - 127.0.0.1
>
> 映射地址 - 5001
>
> 外部地址 - 5000
```shell
$ docker run -d -p 127.0.0.1:5001:5000 training/webapp python app.py
```
##### 结果
```shell
CONTAINER ID        IMAGE               COMMAND           ...     PORTS                                NAMES
95c6ceef88ca        training/webapp     "python app.py"   ...  127.0.0.1:5001->5000/tcp   adoring_stonebraker
```
#### 绑定UDP端口
##### 命令
```shell
$ docker run -d -p 127.0.0.1:5000:5000/udp training/webapp python app.py
```
##### 结果
```shell
CONTAINER ID        IMAGE               COMMAND           ...   PORTS                                NAMES
6779686f06f6        training/webapp     "python app.py"   ...   127.0.0.1:5000->5000/udp   drunk_visvesvaraya
```
## Docker 网络
### 创建一个Docker网络
#### 命令
```shell
$ docker network create -d bridge 「network name」
```
#### 参数说明
- -d : 参数指定 Docker 网络类型，有 bridge、overlay。
### 容器连接网络
#### 命令
```shell
$ docker run -itd --name 「容器名称」 --network 「network name」 「镜像名称」
```
> 建立两个容器，同时连接到一个网络，那么这两个容器便连接上了
## DockerFile
`自学`
tips：我也不会，如果您觉得您有非常好的方式可以说清楚DockerFile，那么请提出「issue」我们会进行补充！！
## 教程实例
### 安装 Ubuntu
#### 拉取最新版的镜像
```shell
$ docker pull ubuntu
```
#### 查看本地的镜像
```shell
$ docker images
```
#### 运行容器
```shell
$ docker run -itd --name ubuntu-test ubuntu
```
#### 进入容器
```shell
$ docker exec -it ubuntu-text /bim/bash
```
#### 安装成功
```shell
$ docker ps
```
### 安装CentOS7
#### 拉取最新版的镜像
```shell
$ docker pull centos:centos7
```
#### 查看本地镜像
```shell
$ docker images
```
#### 运行容器
```shell
$ docker run -itd --name centos-test centos:centos7
```
#### 进入容器
```shell
$ docker exec -it centos-test /bim/bash
```
#### 安装成功
```shell
$ docker ps
```
### 安装Nginx
#### 拉取最新版本的镜像
```shell
$ docker pull nginx:latest
```
#### 查看本地镜像
```shell
$ docker images
```
#### 运行容器
```shell
$ docker run --name nginx-test -p 8080:80 -d nginx
```
#### 安装成功
浏览器访问
```http
http://127.0.0.1:8080/
```
### 安装MySQL
#### 拉取最新的版本的镜像
```shell
$ docker pull mysql
```
#### 启动容器
```shell
$ docker run --name mysql-text -p 3306:3306 -e MYSQL_ROOT_PASSWORD=XXY@123 -d mysql
```
#### 进入容器
```shell
$ docker exec -it mysql bash
```
#### 登录mysql
```shell
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'XXY@123';
```
#### 添加远程登录用户
```shell
CREATE USER 'xiaoxunyao'@'%' IDENTIFIED WITH mysql_native_password BY 'XXY@123';
GRANT ALL PRIVILEGES ON *.* TO 'xiaoxunyao'@'%';
```
