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

		foreach ($items["items"] as $key => $value) {
			// var_dump($value);
			$newPositions[$i] = $value["pos"];
			$i += 1;

		};
		
		shuffle($newPositions);

		$i=0;
		foreach ($items["items"] as $key => $value) {
			$items["items"][$key]["pos"] = $newPositions[$i];
			$i += 1;

		};
		
		
		$data["task"] = json_encode($items);

	    $this->view()->render('task', $data);
	}
	
    public function addMessage(){
    	
    }
    
}
?>