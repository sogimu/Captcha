<?php
Doo::loadCore('db/DooSmartModel');

class Messages extends DooSmartModel{
	public $id;
    public $text;

    public $_table = 'messages';
    public $_primarykey = 'id';
    public $_fields = array('id', 'text');
}
?>