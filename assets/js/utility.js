const donateLink = 'https://www.zeffy.com/en-US/donation-form/648d7641-d6f5-4c1c-a9b0-9b4f34568973';
const foodShelfNumber = '715-246-5255';
const thriftStoreNumber = '715-246-0066';

$(document).ready(function() {
    
    $('#DonateButton').click(function() {
        window.location.href = donateLink;
    });

    // For changing the phone numbers
    $('#FoodShelfPhone').each(function() {
        $(this).text(foodShelfNumber); // Change the text of each element
    });
    $('#ThriftStorePhone').each(function() {
        $(this).text(thriftStoreNumber); // Change the text of each element
    });

    // Rotates the arrow on the organization cards
    $('.org-row').each(function() {
        var headerSection = $(this);
        var dropdownId = headerSection.data('target');

        $(dropdownId).on('show.bs.collapse', function () {
            headerSection.find('.arrow-icon').addClass('rotate-dropdown');
        }).on('hide.bs.collapse', function () {
            headerSection.find('.arrow-icon').removeClass('rotate-dropdown');
        });
    });

});