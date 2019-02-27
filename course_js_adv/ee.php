<?php

/*
* Mysql database class - only one connection allowed
*/

class Database {
    private $_connection;
    private static $_instance; // The single instance
    
    private $_host     = DB_host;
    private $_username = DB_user;
    private $_password = DB_user_pass;
    private $_database = DB_name;
    
    
    /*
    Get an instance of the Database
    @return Instance
    */
    public static function getInstance() {
        if(!self::$_instance) { // If no instance then make one
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    // Constructor
    private function __construct() {
        
        // Connect to database
        try {
            $this->_connection = new PDO(
                'mysql:host='.$this->_host.';
                    dbname='.$this->_database,
                $this->_username,
                $this->_password);
            
            $this->_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->_connection->exec("set names utf8");
            
            // create table for store tasks
            $this->createTables();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        
    }
    
    
    // create table for store tasks
    private function createTables(){
        
        if ( $this->getConnection() ) {
            
            // Try a select statement against the table "tasks"
            try {
                $result = $this->getConnection()->query("SELECT 1 FROM `tasks` LIMIT 1");
            } catch (Exception $e) {
                
                // create table since it doesn't exist
                $this->getConnection()->exec(
                    "CREATE TABLE `tasks`(
                                id INT PRIMARY KEY AUTO_INCREMENT,
                                username VARCHAR(50) NOT NULL DEFAULT '',
                                email VARCHAR(70) NOT NULL DEFAULT '',
                                message VARCHAR(256) NOT NULL DEFAULT '',
                                status INT(1) NOT NULL DEFAULT '0'
                            )"
                );
                
            }
            
            
            
            // Try a select statement against the table "users"
            try {
                $result = $this->getConnection()->query("SELECT 1 FROM `users` LIMIT 1");
            } catch (Exception $e) {
                
                // create table since it doesn't exist
                $this->getConnection()->exec(
                    "CREATE TABLE `users`(
                                id INT PRIMARY KEY AUTO_INCREMENT,
                                user_login VARCHAR(50) NOT NULL DEFAULT '',
                                user_password VARCHAR(70) NOT NULL DEFAULT ''
                            )"
                );
                
                // Add default user
                $this->addNewUser('admin', '123');
            }
            
        }
    }
    
    
    // Magic method clone is empty to prevent duplication of connection
    private function __clone() { }
    
    
    // Get database connection
    public function getConnection() {
        return $this->_connection;
    }
    
    
    
    
    /**
     * Add new task to database
     *
     * @param $username string
     * @param $email    string
     * @param $message  string
     */
    public function addNewRecord($username, $email, $message){
        
        $status_message = '';
        
        try {
            $sql = "INSERT INTO tasks (id, username, email, message, status)
                    VALUES (NULL, :username, :email, :message, '0')";
            
            $stmt = $this->_connection->prepare($sql);
            
            $stmt->bindParam(':username', $username, PDO::PARAM_STR, 100);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 100);
            $stmt->bindParam(':message', $message, PDO::PARAM_STR, 256);
            
            
            if($stmt->execute()) {
                $status_message = "New record created successfully";
            }
            
        }
        catch(PDOException $e) {
            $status_message = $sql . "<br><br>" . $e->getMessage();
        }
        
        return $status_message;
        
    }
    
    
    
    
    /**
     * Add new user to database
     *
     * @param $username string
     * @param $email    string
     * @param $message  string
     */
    public function addNewUser($user_login, $user_password) {
        
        $status_message = '';
        
        // Encode given password
        $user_password = md5($user_password);
        
        try {
            $sql = "INSERT INTO users (id, user_login, user_password)
                    VALUES (NULL, :user_login, :user_password)";
            
            $stmt = $this->_connection->prepare($sql);
            
            $stmt->bindParam(':user_login', $user_login, PDO::PARAM_STR, 100);
            $stmt->bindParam(':user_password', $user_password, PDO::PARAM_STR, 100);
            
            if ( $stmt->execute() ) {
                //$status_message = "user created";
            }
            
        }
        catch(PDOException $e) {
            $status_message = $sql . "<br><br>" . $e->getMessage();
        }
        
        return $status_message;
        
    }
    
    
    
    
    /**
     * Calculate tasks count
     *
     * @return int
     */
    public function getCountOfRecords($table) {
        $sql = "SELECT count(id) AS count FROM $table";
        $result = $this->_connection->prepare($sql);
        $result->execute();
        $row = $result->fetch();
        return $row['count'];
    }
    
}

Database::getInstance();






