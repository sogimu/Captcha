<?php
Doo::loadCore('db/DooSmartModel');

class Messages extends DooSmartModel{
	public $id;
    public $message;

    public $_table = 'messages';
    public $_primarykey = 'id';
    public $_fields = array('id', 'message');
}
?>