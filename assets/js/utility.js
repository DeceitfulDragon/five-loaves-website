// For changing the padding based on the height of the navbar
// Did it this way so people can scale the web page without the navbar overlapping things
function adjustContentMargin() {
    var navbarHeight = $('.navbar-custom').outerHeight(); // Get the outer height of the navbar
    $('main').css('padding-top', navbarHeight); // main padding
}
adjustContentMargin();
$(window).resize(adjustContentMargin);

// == START CONFIG ===========================================================================================================================================
const config = {
    donateLink: '',
    foodShelfNumber: '8675-309',
    thriftStoreNumber: '8675-309',
    foodShelfEmail: 'contact@email.com',
    thriftStoreEmail: 'contact@email.com',
    foodShelfFacebook: '',
    thriftStoreFacebook: '',
    fiveLoavesBlog: '',
    csfpFormLink: '',
    volunteerFormLink: '',
    poBox: `Some Place
    P.O. Box 111
    Some Location, MN`,
    foodShelfLocation: '222 East 5th Street, Suite A',
    thriftStoreLocation: '222 South 5th Road',
    cityAndState: 'Some Location, MN',
    comeMealLocation: 'Some Location',
    comeMonths: {
        January: "Some Location",
        February: "Some Location",
        March: "Some Location",
        April: "Some Location",
        May: "Some Location",
        June: "Some Location",
        July: "Some Location",
        August: "Some Location",
        September: "Some Location",
        October: "Some Location",
        November: "Some Location",
        December: "Some Location"
    },
    districtOffice: 'Some Location',
    districtOfficeMail: 'Some Location',
    foodShelfMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11645.407732417327!2d-88.00744937548164!3d43.139138545724975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88051d373f526447%3A0x21ef9b0ae9dc212d!2sMilwaukee-Northwest%20DMV!5e0!3m2!1sen!2sus!4v1713949960674!5m2!1sen!2sus',
    thriftStoreMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11645.407732417327!2d-88.00744937548164!3d43.139138545724975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88051d373f526447%3A0x21ef9b0ae9dc212d!2sMilwaukee-Northwest%20DMV!5e0!3m2!1sen!2sus!4v1713949960674!5m2!1sen!2sus',
};


// == END CONFIG ===========================================================================================================================================

// For the Food Shelf Phone number
$('#FoodShelfPhone').each(function () {
    var currentText = $(this).text().trim(); // Get the current text and trim any whitespace
    if (currentText.length > 0) {
        $(this).text(currentText + " " + config.foodShelfNumber); // Append the phone number if text exists
    } else {
        $(this).text(config.foodShelfNumber); // Set the phone number if no text exists
    }
});
// For the Thrift Store Phone number
$('#ThriftStorePhone').each(function () {
    var currentText = $(this).text().trim(); // Get the current text and trim any whitespace
    if (currentText.length > 0) {
        $(this).text(currentText + " " + config.thriftStoreNumber); // Append the phone number if text exists
    } else {
        $(this).text(config.thriftStoreNumber); // Set the phone number if no text exists
    }
});

$('#foodShelfEmailLink').attr('href', `mailto:${config.foodShelfEmail}`);
$('#foodShelfEmail').text(config.foodShelfEmail);
$('#thriftStoreEmailLink').attr('href', `mailto:${config.thriftStoreEmail}`);
$('#thriftStoreEmail').text(config.thriftStoreEmail);
$('#foodShelfLocation').text(config.foodShelfLocation);
$('#thriftStoreLocation').text(config.thriftStoreLocation);
$('#poBox').html(config.poBox.replace(/\n/g, '<br>'));
$('#DonateButton').click(function () { window.location.href = config.donateLink; });
$('#fiveLoavesBlog').attr('href', config.fiveLoavesBlog);
$('#foodShelfFacebook').attr('href', config.foodShelfFacebook);
$('#thriftStoreFacebook').attr('href', config.thriftStoreFacebook);
$('#csfpFormLink').attr('href', config.csfpFormLink);
$('#volunteerFormLink').attr('href', config.volunteerFormLink);
$('#foodShelfMap').attr('src', config.foodShelfMapLink);
$('#thriftStoreMap').attr('src', config.thriftStoreMapLink);
$('.cityAndState').text(config.cityAndState);
$('#districtOffice').text(config.districtOffice);
$('#districtOfficeMail').text(config.districtOfficeMail);
$('#comeMealLocation').text(config.comeMealLocation);

function populateCommunityList() {
    const ul = $(`.comeMealList`);
    Object.entries(config.comeMonths).forEach(([month, community]) => {
        // make an li element for each month in the config
        const li = $('<li>').text(`${month} - ${community}`);
        ul.append(li);
    });
}
// Adds months with their respective locations in the Come Meal organization
populateCommunityList()

// Rotates the arrow on the organization cards and opens the dropdown
$('.org-row').on('click', function () {
    var targetID = $(this).data('target');
    $('.collapse').not(targetID).collapse('hide');
    $(targetID).collapse('toggle');
    $(this).find('.arrow-icon').toggleClass('rotate-dropdown');
});

$('#blog-posts').on('click', '.card-header', function () {
    $(this).find('.arrow-icon').toggleClass('rotate-dropdown');
});

// GET blog posts and display some simplified versions in the news
if (document.URL.includes("news.html")) {
    $.ajax({
        url: 'https://fiveloaveswi.org/wp-json/wp/v2/posts?_embed',
        method: 'GET',
        success: function (posts) {
            const maxPosts = 6;
            posts.slice(0, maxPosts).forEach(function (post, index) {
                let postElement = `
                <article class="card mb-3 blog-post-card">
                    <header class="card-header d-flex justify-content-between align-items-center post-header" id="heading-${index}" data-toggle="collapse" data-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
                        <section class="d-flex align-items-center post-title-section">
                            <i class="fas fa-chevron-right mr-2 arrow-icon"></i>
                            <h2 class="mb-0 flex-grow-1 mainColorText post-title"><b>${post.title.rendered}</b></h2>
                            <time datetime="${post.date}" class="secondaryColorText post-date"><strong>${new Date(post.date).toLocaleDateString()}</strong></time>
                        </section>
                        <aside class="post-author ml-4 d-flex align-items-center">
                            <img src="${post._embedded.author[0].avatar_urls[48]}" alt="Author: ${post._embedded.author[0].name}" class="rounded-circle author-avatar mr-2">
                            <span class="author-name">${post._embedded.author[0].name}</span>
                        </aside>
                    </header>
                    <section class="collapse post-content" id="collapse-${index}" aria-labelledby="heading-${index}" data-parent="#blog-posts">
                        <article class="card-body">${post.excerpt.rendered}
                            <a href="${post.link}" class="btn btn-primary mt-3 read-more-btn">Read More</a>
                        </article>
                    </section>
                </article>
            `;
            $('#blog-posts').append(postElement);
        });
        },
        error: function (xhr, status, error) {
            console.log("Error fetching posts: ", status, error);
            $('#blog-posts').append('<p class="alert alert-danger">Failed to load posts.</p>');
        }
    });
}