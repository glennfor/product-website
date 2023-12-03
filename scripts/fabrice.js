jQuery(function () {
  $(".plus_icon").on("click", addTodoBlock);

  var arrayOfTaskBlocks = JSON.parse(localStorage.getItem("array")) || [];

  localStorage.clear();

  let displayArray = () => {
    arrayOfTaskBlocks.forEach((taskBlock, index) => {
      let each_todo_block = $(`
        <div class="each_block">
          <div class="each_block_name">
            <div class="color"></div>
            <div class="block_text">${taskBlock}</div>
          </div>
          <div class="delete_icon">
            <i class="bi bi-trash"></i>
          </div>
        </div>
      `);

      $(".todo_blocks").append(each_todo_block);

      $(".each_block").on("click", () => {
        createTaskSession(taskBlock, index);
      });

      $(".delete_icon").on("click", () => {
        arrayOfTaskBlocks = arrayOfTaskBlocks.filter((item, indez) => {
          return indez !== index;
        });

        localStorage.setItem("array", JSON.stringify(arrayOfTaskBlocks));

        $(".todo_blocks").empty();
        displayArray();
      });
    });
  };

  displayArray();

  function addTodoBlock() {
    let add_block_input = $("#add_block").val();
    arrayOfTaskBlocks.push(add_block_input);

    localStorage.setItem("array", JSON.stringify(arrayOfTaskBlocks));

    $(".todo_blocks").empty();
    displayArray();

    $("#add_block").val("");
  }

  function createTaskSession(title_text, index) {
    let todos = $(".todos");
    todos.empty();

    let todo_wrapper = $(`
      <div class="todos_wrapper">
        <div class="title_session">
          <h2><span>${title_text}</span> block</h2>
        </div>
        <div class="todo_input">
          <div class="colors">
            <div class="clrs1"></div>
            <div class="clrs2"></div>
            <div class="clrs3"></div>
          </div>
          <form id="form">
            <input type="text" id="todo_input_container" placeholder="What is your new task?">
            <button id="addtask">add task</button>
          </form>
        </div>
        <div class="eachtask_container"></div>
      </div>
    `);

    todos.append(todo_wrapper);

    $("#addtask").on("click", (e) => {
      e.preventDefault();

      let value = $("#todo_input_container").val();
      createTask(value, index);
      $("#todo_input_container").val("");
    });
  }

  var arrayOfTasks = JSON.parse(localStorage.getItem("arrayOfTasks")) || [];

  function createTask(value, index) {
    let each_task_container = $(".eachtask_container");
    each_task_container.empty();

    let object = {
      value: value,
      index: index,
    };

    arrayOfTasks.push(object);

    localStorage.setItem("arrayOfTasks", JSON.stringify(arrayOfTasks));

    arrayOfTasks.forEach((item, indextask) => {
      let task = $(`
      <div class="task">
        <div id="task_div1">
          <div class="clrs2"></div>
          <div class="task_text">
            ${item.value}
          </div>
        </div>
        <div id="task_div2">
          <div class="checkedbox">
            <input type="checkbox" id="checkbox">
          </div>
          <div class="del_icon">
            <i class="bi bi-trash"></i>
          </div>
        </div>
      </div>
    `);

      each_task_container.append(task);

      $(".del_icon").on("click", () => {
        arrayOfTasks = arrayOfTasks.filter((element, key) => {
          return key !== indextask;
        });

        localStorage.setItem("arrayOfTasks", JSON.stringify(arrayOfTasks));
      });
    });

    console.log(arrayOfTasks);
  }

    
    
    
    // jQuery for addadmin page
      
  //this function below loads the img in its intended container

  $("#image_input").on("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#uploaded_image").attr("src", e.target.result);
    };

    reader.readAsDataURL(file);
  });

  // function to toggle password appearance

  $(".bi-eye").on("click", () => {
    var passwordField = $("#passwd");

    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
    } else {
      passwordField.attr("type", "password");
    }
  });
    
    //function to generate AdminId

    $('#generate').on('click', function (e) {
        e.preventDefault();

      let idfield = $('#AdminID');
      
      let stringId = 'Devlap-'
      let arrayOfrandomXters =  [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  
        '@', '#', '$', '%', '&', '*', '+', '=', '-', '_', '!', '?',    
      ];
      
      for (let i = 0; i < 5; i++){
          
          let randomNumber = Math.floor(Math.random() * arrayOfrandomXters.length);

          stringId = stringId + arrayOfrandomXters[randomNumber];
          
      }

      idfield.val(stringId);

  })  
    
    
    $('#addAdmin').on('click', function (e) {
        e.preventDefault();
        
        if ($("#username").val() === ' ') {
            alert('pls enter a valid username');
        }
        else if ($("#passwd").val().length < 4) {
            alert('password must be > 4 xters');
        }
        else if ($('#AdminID').val() === ' ') {
            alert('the id field is a mandatory field')
        }    
        else {
              $('.successContainer').toggle('visible');
        }

        $("#username").val(''); 
        $("#passwd").val(''); 
        $('#AdminID').val('');       
        $('#uploaded_image').attr('src', '#');
        
      
    })

     $('.X-icon').on('click', function () {
            $('.successContainer').toggle('visible');
    });
});
