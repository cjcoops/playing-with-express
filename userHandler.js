exports.getUsers = function(req, res){
	res.send(onlyTheUsers);
};

exports.onlyTheUsers = function(){
  return {
          users : [
            { name: "Marcus", email: "marcus@marcus.com"},
            { name: "Hugo",   email: "hugo@hugo.com"},
            { name: "Tobbe",  email: "tobbe@tobbe.com"}
          ]
  };
};
