angular.module('itinHelper')
    .controller('calendarC', calendarC);
    
function calendarC(Storage) {
    var self = this;
    
    self.showConfig;
    
    self.name = "Cox";
    
    self.cal = Storage.get('calendar') || [
        {
            breakfast: 'Cafe Mickey',
            lunch: 'Momma Melrose',
            dinner: 'Tepan edo'
        },
        {
            breakfast: 'Cafe Mickey2',
            lunch: 'Momma Melrose2',
            dinner: 'Tepan edo2'
        },
        {
            breakfast: 'Cafe Mickey3',
            lunch: 'Momma Melrose3',
            dinner: 'Tepan edo3'
        }    
    ];
    
    self.add = function() {
        self.cal.push({
            breakfast: 'Hello',
            lunch: 'world',
            dinner: 'dinner'
        });
    }
    
    
    
    self.email = function() {
        Storage.set('calendar', self.cal);
    }
    
}