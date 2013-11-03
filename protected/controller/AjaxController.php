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
		
		$taskIntoPHP = json_decode($task->taskIntoJSON, true);

		$newPositions = [];

		foreach ($taskIntoPHP["items"] as $key => $value) {
			$newPositions[$key] = $value["pos"];

		};
		
		shuffle($newPositions);

		$limit = $taskIntoPHP["count"]; 
		$max_num = 20; 
		$used_nums = array();
		$random_nums = array();
		while($limit) { 
		  $random = rand(0, $max_num); 
		  $limit-=!isset($used_nums[$random]);
		  $used_nums[$random]=true; 
		}
		foreach ($used_nums as $key=>$value) {
			array_push($random_nums, $key);
		}

		foreach ($taskIntoPHP["items"] as $key => $value) {
			$taskIntoPHP["items"][$key]["id"] = $random_nums[$key];

		};

		$this->_application->taskIntoPHP = $taskIntoPHP;

		foreach ($taskIntoPHP["items"] as $key => $value) {
			$taskIntoPHP["items"][$key]["pos"] = $newPositions[$key];

		};

		shuffle($taskIntoPHP["items"]);
				
		$data["taskIntoJSON"] = json_encode($taskIntoPHP);

	    $this->view()->render('task', $data);
	}
	
    public function addMessage() {
		$errorValue = 0.2;
		$availableMsg = json_encode(array(/*"mapFromClient"=> $mapFromClient["items"], "rightMap"=> $rightMap["items"], */"status" => true));
		$notAvailableMsg = json_encode(array(/*"mapFromClient"=> $mapFromClient["items"], "rightMap"=> $rightMap["items"], */"status" => false));

		$data = json_decode($_POST["data"], true);
		$mapFromClient = $data["map"];
		$rightMap = $this->_application->taskIntoPHP;

		// var_dump($mapFromClient["items"]);
		// echo "*****************";
		// var_dump($rightMap["items"]);

		$isEqual = true;

		foreach ($mapFromClient["items"] as $key0 => $value0) {
			if($isEqual) {
				foreach ($rightMap["items"] as $key1 => $value1) {
					if($value1["id"] == $value0["id"]) {
						// echo "dx ".$value1["id"]." = ".abs($value0["pos"]["x"] - $value1["pos"]["x"])."\n";
						if(abs($value0["pos"]["x"] - $value1["pos"]["x"]) > $errorValue) {
							$isEqual = false;
							break;	
						}
						// echo "dy ".$value1["id"]." = ".abs($value0["pos"]["y"] - $value1["pos"]["y"])."\n";
						if(abs($value0["pos"]["y"] - $value1["pos"]["y"]) > $errorValue) {
							$isEqual = false;
							break;		
						}	
					}
				}
			} else {
				break;
			}

		}

		if($isEqual) {
			Doo::loadModel('Messages');
			$message = new Messages;
			$message->text = $data["message"];

			try {

				$this->db()->insert($message);
				echo $availableMsg;   
			} catch(Exception $err){
			    //to debug if there's any SQL error
			    echo '<pre>';
			    print_r( Doo::db()->showSQL() );
			    print_r($err);
			    exit;
			}

	    } else {
	    	echo $notAvailableMsg;

	    }
    }

    public function getMessages(){
    	$messages = Doo::db()->find('Messages');
    	$messagesToJSON = [];
    	foreach ($messages as $key => $value) {
    		array_push($messagesToJSON, $value->text);
    	}
		// echo json_encode($messagesToJSON);

		$data["messages"] = $messagesToJSON;

	    $this->view()->render('messages', $data);
    }
    
}
?>