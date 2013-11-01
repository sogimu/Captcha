<?php
Doo::loadCore('db/DooSmartModel');

class Tasks extends DooSmartModel{
	public $id;
    public $taskIntoJSON;

    public function  __construct($data=null) {
        parent::__construct( $data );
        parent::setupModel(__CLASS__);
    }

    public $_table = 'tasks';
    public $_primarykey = 'id';
    public $_fields = array('id', 'taskIntoJSON');
}
?>