
 var pseudoname;
 var messageuser;
 var messagerobot=["bonjour", "oui cava hmd", "robo","tunisie", "il fait chaud", "je vais chaque jours à la plage"];

  $('#confirmbtn').on('click', function(){
                     
                                  
                      //    $('#inpseudo').css({
                      //      "font-size":"18px",
                      //      "color":"rgb(251,149,0)",
                      //      "font-weight":"bold"
                      // });
                     
                        pseudoname=$('#inpseudo').val();
                       console.log(pseudoname);
                     // pseudoname.replaceWith('<Strong>' +  pseudoname + '</Strong>'); 
                    // pseudoname.wrap('<strong></strong>')
                       pseudoname= pseudoname+":";
                       $('#inpseudo').val("");

					});
	
	
 var comptemessage=0;
	// send messages
	$('#sendbtn').on('click', function(){

                      messageuser=$('#message-user').val();
                      messageuser=messageuser.replace(":)","<img src='../img/smile/icon_smile.gif'>");
                      $('#message-user').val("");
                     if( $('#chat').text()==="")
                      {
                      	$('#chat').text(pseudoname+messageuser);
                      }
                      else{

                        $('#chat').append("<br>"+pseudoname+messageuser);
                      }
                      if(comptemessage==messagerobot.length)
                      	{ comptemessage=0; }
                      else
                      {
                        var reponserobot=messagerobot[comptemessage];

                         $('#chat').append("<br>"+"robot:"+reponserobot);
                         comptemessage++;
                      }
                      

					});
// code for keypressed
function sendmessage(event)
{
  if (event.keyCode == 13)
 {
 	  messageuser=$('#message-user').val();
                      messageuser=messageuser.replace(":)","<img src='../img/smile/icon_smile.gif'>");
                      $('#message-user').val("");
                     if( $('#chat').text()==="")
                      {
                      	$('#chat').text(pseudoname+messageuser);
                      }
                      else{

                        $('#chat').append("<br>"+pseudoname+messageuser);
                      }
                      if(comptemessage==messagerobot.length)
                      	{ comptemessage=0; }
                      else
                      {
                        var reponserobot=messagerobot[comptemessage];

                         $('#chat').delay(2000).append("<br>"+"robot:"+reponserobot);
                         comptemessage++;
                      }
 }
                      


 
}



  // $('#open-close').on('click', function(){
  // 	                      $("#chatw").text("") ;  
  // 					   $("#chat-sect").slideToggle()

  // 	              });
  
  //console.log('#chat');
  //  pseudoname="";
  // messageuser="";