<?php
/**
 * MessagesController
 * Feel free to delete the methods and replace them with your own code.
 *
 * @author sogimu
 */
class AjaxController extends DooController{

	public function getTask() {
		$tasks = Doo::db()->find('Tasks');

		$task = $tasks[array_rand($tasks,1)];
		// var_dump($task);

		$items = unserialize( $task->items );
		$i=0;
		$newPositions = [];

		foreach ($items as $key => $value) {
			$newPositions[$i] = $value.pos;
			$i += 1;

		};
		
		
		var_dump($items);

	    $this->view()->render('task');
	}
	
    public function addMessage(){
    	
    }
    
}
?>