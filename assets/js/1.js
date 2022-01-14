function show() {

  var name = document.getElementById("name").value;
  var comment= document.getElementById("comment").value;
 


   firebase.database().ref('User/' + name).set({
          name : name, 
          comment : comment
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
              alert("DONE");
            
         
          }
        });
} 

function search() 
{
    var name= document.getElementById("name1").value;

firebase.database().ref('User/'+ name).once('value').then(function(snapshot) {
                if (snapshot.exists()) {
                     var name_ = snapshot.val().name;
                     var comment_ = snapshot.val().comment;
                    
                      document.getElementById("name").value = name_;
                      document.getElementById("comment").value = comment_;
                      
                }
                else
                {

                }
        }, function(error) {
            if (error) {

            } else {

            }
          });
}
