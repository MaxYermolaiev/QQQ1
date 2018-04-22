var date = new Date();
var User = function (name, date) {
    this.name = name;
    this.date = date.getHours();
    this.greeting = function(){
        if(this.date>17&&this.date<9)console.log("we dont work");
        else console.log("wellcome" + name);
    }
};

modules.exports.func = User;
modules.exports.date = date;

