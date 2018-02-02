<?php
    //新建一个连接类，便于继承
    class mysqlConnection{
        public $servername;
        public $username;
        public $password;
        public $dbname;
        public $con = null;
        public function __construct($servername,$username,$password,$dbname){
            $this->servername = $servername;
            $this->username = $username;
            $this->password = $password;
            $this->dbname = $dbname;
        }
        //连接数据库
        public function getConnection(){
            try {
                $dsn = "mysql:host=$this->servername;dbname=$this->dbname";
                $this->con = new PDO($dsn, $this->username, $this->password);
            }catch(PDOException $e)     {
                echo $e->getMessage();
             }
        }
        //更新数据
        public function updateDate($sql){
            if($this->con==null){
                $this->getConnection();
            }
            //输出json数据
            header('content-type:application/json;charset=utf8');
            
            $res = $this->con->exec($sql);
            $arr = array('result'=>$res);
            echo json_encode($arr);
            //  关闭连接
            $this->closeCon();
        }
        //  关闭数据库连接方法
        public function closeCon(){
            $this->con = null;
        }
    }
    //创建子类
    class mysqlConnectionEx extends mysqlConnection 
    {
        //  继承父类的构造函数
        public function __construct($servername,$username,$password,$dbname){
             parent::__construct($servername,$username,$password,$dbname);
        }
        //  执行sql方法
        public function updateExDate(){
            $sql = "UPDATE dianzan SET num=num+1 WHERE id=1";
            $this->updateDate($sql);
        }
    }
    //  实例化子类
    $praiseCon = new mysqlConnectionEx('localhost','root','','praise');
    $praiseCon->updateExDate();   
    
?>  