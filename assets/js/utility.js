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

    $.ajax({
        url: 'https://fiveloaveswi.org/wp-json/wp/v2/posts?_embed&per_page=8',
        method: 'GET',
        success: function(posts) {
            posts.forEach(function(post, index) {
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
    
            // Add event listener to handle the rotation of the arrow icon and toggle class for opened state
            $('.card-header').on('click', function() {
                $(this).find('.arrow-icon').toggleClass('rotate-dropdown');
            });
        },
        error: function(error) {
            console.log("Error fetching posts: ", error);
            $('#blog-posts').append('<p class="alert alert-danger">Failed to load posts.</p>');
        }
    });
    
});