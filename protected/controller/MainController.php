<?php
/**
 * MainController
 * Feel free to delete the methods and replace them with your own code.
 *
 * @author sogimu
 */
class MainController extends DooController{

    public function index(){
        $messages = Doo::db()->find('Messages');

        $data['text'] = "ergiknjl";
        $data["messages"] = $messages;
        
        $this->render('index', $data);
    }
	
}
?>