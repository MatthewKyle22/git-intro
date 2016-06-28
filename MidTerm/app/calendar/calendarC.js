angular.module('itinHelper')
    .controller('calendarC', calendarC);
    
function calendarC(Storage) {
    var self = this;
    
    self.showConfig;
    
    // self.name = "Stevens";
    
    self.cal = Storage.get('calendar') || [
        {
            Breakfast: 'Cafe Mickey',
            Morning: 'Epcot',
            Lunch: 'Quick Service',
            Afternoon: 'Magic Kingdom',
            Dinner: 'Ohana',
            Evening: 'Fireworks'
        }
    ];
    
    
    
    // adds row object
    self.add = function() {
        self.cal.push({
            Breakfast: 'Cafe Mickey',
            Morning: 'Epcot',
            Lunch: 'Quick Service',
            Afternoon: 'Magic Kingdom',
            Dinner: 'Ohana',
            Evening: 'Fireworks'
        });
    };
    
    
    //removes row selected
    self.remove = function (index) {
        self.cal.splice(index, 1);
        self.showConfig = null;
    };
    
     // pushing keys to store in local storage
    self.email = function() {
        Storage.set('calendar', self.cal);
    };
    
}



// var tableCreedits = ['Be Our Guest', 'Casey\'s Corner', 'Cinderella\'s Royal Table', 'Columbia Harbour House', 'Cosmic Ray\'s Starlight Cafe', 'Frontierland Hot Dog Cart', 'Golden Oak Outpost', 'Skipper Cateen', 'Liberty Tree', 'Crystal Palace', 'The Plaza', '']