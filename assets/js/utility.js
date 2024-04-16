const donateLink = 'https://www.zeffy.com/en-US/donation-form/648d7641-d6f5-4c1c-a9b0-9b4f34568973';
const foodShelfNumber = '715-246-5255';
const thriftStoreNumber = '715-246-0066';



$(document).ready(function() {
    
    $('#DonateButton').click(function() {
        window.location.href = donateLink;
    });

    $('#FoodShelfPhone').each(function() {
        $(this).text(foodShelfNumber); // Change the text of each element
    });
    $('#ThriftStorePhone').each(function() {
        $(this).text(thriftStoreNumber); // Change the text of each element
    });
});