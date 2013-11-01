<?php
/**
 * MessagesController
 * Feel free to delete the methods and replace them with your own code.
 *
 * @author sogimu
 */
class AjaxController extends DooController{

	/**
	* Instace of DooSession
	*/

	public $_application = null;

    public function __construct() {
		// add sessions
		$this->_application = Doo::session("mysite");
	}

	public function getTask() {
		$tasks = Doo::db()->find('Tasks');

		$task = $tasks[array_rand($tasks,1)];
		
		$taskIntoPHP = unserialize( $task->taskIntoJSON );
		
		$this->_application->taskIntoPHP = $taskIntoPHP;

		$i=0;
		$newPositions = [];

		foreach ($taskIntoPHP["items"] as $key => $value) {
			// var_dump($value);
			$newPositions[$i] = $value["pos"];
			$i += 1;

		};
		
		shuffle($newPositions);

		$i=0;
		foreach ($taskIntoPHP["items"] as $key => $value) {
			$taskIntoPHP["items"][$key]["pos"] = $newPositions[$i];
			$i += 1;

		};
		
		
		$data["taskIntoJSON"] = json_encode($taskIntoPHP);

		// sleep(5);

	    $this->view()->render('task', $data);
	}
	
    public function addMessage(){
		$data = json_decode($_POST["data"]);
		$mapFromClient = $data->map;
		$rightMap = $this->_application->taskIntoPHP;

		var_dump($mapFromClient);
		echo "*****************";
		var_dump($rightMap);

		foreach ($mapFromClient->items as $key0 => $value0) {
			
		}
    	
    	// echo json_encode(array("status" => true));
    }

    public function getMessages(){

    	
    }
    
}
?>