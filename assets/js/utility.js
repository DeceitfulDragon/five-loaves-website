// Grabs config.js values so that things can be changed easily, future-proofing
import { config } from './config.js';

adjustContentMargin();
$(window).resize(adjustContentMargin);

// For changing the padding based on the height of the navbar
// Did it this way so people can scale the web page without the navbar overlapping things
function adjustContentMargin() {
    var navbarHeight = $('.navbar-custom').outerHeight(); // Get the outer height of the navbar
    $('main').css('padding-top', navbarHeight); // main padding
}

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

// Sets emails and their links
$('#foodShelfEmailLink').attr('href', `mailto:${config.foodShelfEmail}`);
$('#foodShelfEmail').text(config.foodShelfEmail);
$('#thriftStoreEmailLink').attr('href', `mailto:${config.thriftStoreEmail}`);
$('#thriftStoreEmail').text(config.thriftStoreEmail);

// Sets locations
$('#foodShelfLocation').text(config.foodShelfLocation);
$('#thriftStoreLocation').text(config.thriftStoreLocation);

// PO box, changes new line to "<br>"
$('#poBox').html(config.poBox.replace(/\n/g, '<br>'));

// Donate button link
$('#DonateButton').click(function () {
    window.location.href = config.donateLink;
});

// Facebook and blog links
$('#fiveLoavesBlog').attr('href', config.fiveLoavesBlog);
$('#foodShelfFacebook').attr('href', config.foodShelfFacebook);
$('#thriftStoreFacebook').attr('href', config.thriftStoreFacebook);

// Google Form Links
$('#csfpFormLink').attr('href', config.csfpFormLink);
$('#volunteerFormLink').attr('href', config.volunteerFormLink);

// Changes the google maps location source
$('#foodShelfMap').attr('src', config.foodShelfMapLink);
$('#thriftStoreMap').attr('src', config.thriftStoreMapLink);


// Rotates the arrow on the organization cards and opens the dropdown
$('.org-row').on('click', function () {
    var targetID = $(this).data('target');
    $('.collapse').not(targetID).collapse('hide');
    $(targetID).collapse('toggle');
    $(this).find('.arrow-icon').toggleClass('rotate-dropdown');
});


// GET blog posts and display some simplified versions in the newsletter
if (document.URL.includes("4-newsletter.html")) {
    $.ajax({
        url: 'https://fiveloaveswi.org/wp-json/wp/v2/posts?_embed&per_page=8',
        method: 'GET',
        success: function (posts) {
            posts.forEach(function (post, index) {
                var postElement = `
                        <article class="card mb-3">
                            <header class="card-header d-flex justify-content-between align-items-center" id="heading-${index}" data-toggle="collapse" data-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
                                <section class="d-flex align-items-center">
                                    <i class="fas fa-chevron-right mr-2 arrow-icon"></i>
                                    <h2 class="mb-0 flex-grow-1 mainColorText"><b>${post.title.rendered}</b></h2>
                                    <time datetime="${post.date}" class="secondaryColorText"><strong>${new Date(post.date).toLocaleDateString()}</strong></time>
                                </section>
                                <aside class="post-author ml-4 d-flex align-items-center">
                                    <img src="${post._embedded.author[0].avatar_urls[48]}" alt="Author: ${post._embedded.author[0].name}" class="rounded-circle mr-2">
                                    <span>${post._embedded.author[0].name}</span>
                                </aside>
                            </header>
                            <section class="collapse" id="collapse-${index}" aria-labelledby="heading-${index}" data-parent="#blog-posts">
                                <article class="card-body">${post.excerpt.rendered}
                                    <a href="${post.link}" class="btn btn-primary mt-3">Read More</a>
                                </article>
                            </section>
                        </article>
                    `;
                $('#blog-posts').append(postElement);
            });

            // Arrow rotation
            $('.card-header').on('click', function () {
                $(this).find('.arrow-icon').toggleClass('rotate-dropdown');
            });
        },
        error: function (error) {
            console.log("Error fetching posts: ", error);
            $('#blog-posts').append('<p class="alert alert-danger">Failed to load posts.</p>');
        }
    });
}