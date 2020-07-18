$(document).ready(function() {
     var thermostat = new Thermostat();
     updateTemperature();

     $('#current-city').change(function() {
       var city = $('#current-city').val();
       $.get('http:/api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=4c1cd3ab9f2fb9ad1483f9c3974eb178&units=metric', function(data) {
         $('#current-temperature').text(data.main.temp);
       })
     })

     $('#temperature-up').click(function() {
       thermostat.up();
       updateTemperature();
     });

       $('#temperature-down').click(function() {
         thermostat.down();
         updateTemperature();
       });

         $("#temperature-reset").click(function() {
           thermostat.resetTemperature();
           updateTemperature();
         });

           $("#powersaving-on").click(function() {
             thermostat.powerSaveModeOn();
             $("#power-saving-status").text('on')
             updateTemperature();
           });

             $("#powersaving-off").click(function() {
               thermostat.powerSaveModeOff();
               $("#power-saving-status").text('off')
               updateTemperature();
             });

             function updateTemperature() {
               $('#temperature').text(thermostat.temperature);

               if(thermostat.energyUsage() === 'Low Usage') {
                 $('#temperature').css('color', 'green')
               } else if(thermostat.energyUsage() === 'Medium Usage') {
                 $('#temperature').css('color', 'white')
               } else {
                 $('#temperature').css('color', 'red')
               }
             };
           });
