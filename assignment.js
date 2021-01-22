// kilometerToMeter start

    function kilometerToMeter(converMeter){
        var meter = converMeter*1000;
        return meter;
    }

// kilometerToMeter end




// budgetCalculator start


    function budgetCalculator(watch,mobile,laptop){
        var watchPrice = 50;
        var mobilePrice = 100;
        var laptopPrice = 500;

        var watch = watchPrice*3;
        var mobile = mobilePrice*5;
        var laptop = laptopPrice*10;
        total = watch + mobile + laptop;
        return total;
    }
// budgetCalculator end




//  hotelCost start


    function hotelCost (dayStay){
        var costAmount = 0;
        if (dayStay <=10) {
            costAmount = days*100;
        }
        else if (dayStay <=20){
            var firstTenDays = 10 * 100;
            var remaining = dayStay - 10;
            var secondTenDays = remaining * 80;
            hotelCost = firstTenDays + secondTenDays;

        }
        else {
            var firstTenDays = 10*100;
            var secondTenDays = 10*80;
            var remaining = dayStay - 20;
            var thirdTendays = remaining *50;
            hotelCost = firstTenDays + secondTenDays + thirdTendays;

        }
        return hotelCost;
    }


// hotelCost end




// megaFriend start

        function megaFriend(friendNames) {
            var max = friendNames[0];
            for (var i = 0; i < friendNames.length; i++) {
                var element = friendNames[i];
                if (max.length < element.length) {
                    max = element;
                }
            }
            return max;
        }
       
        
        // megaFriend end