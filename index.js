document.querySelector('#insert').onclick = function(){
    if(document.querySelector('#new input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#current').innerHTML += `
        
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
              var taskName = this.parentNode.querySelector('#taskname').innerText;
              document.querySelector('#newcurrent').innerHTML += `
              <div class="completedtask">
              <span id="taskname completed">
                ${taskName}
              </span>
              </div>
             `;
            this.parentNode.remove();
        }
       }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#new input").value = "";
    }
}
