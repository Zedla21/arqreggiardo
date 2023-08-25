$(document).ready(function() {
    const $albumImages = $('.card img');
    const $imageViewer = $('.image-viewer');
    const $currentImage = $('#currentImage');
    const $closeBtn = $('.close-btn');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');
    let currentAlbum = [];

    $albumImages.click(function() {
        console.log($(this).closest('.card'));
        currentAlbum = $(this).closest('.card').find('img');
        const src = $(this).attr('src');
        currentIndex = currentAlbum.index(this);
        $currentImage.attr('src', src);
        $imageViewer.removeClass('hidden');
    });

    $closeBtn.click(function() {
        $imageViewer.addClass('hidden');
    });

    $prevBtn.click(function() {
        currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
        const src = currentAlbum.eq(currentIndex).attr('src');
        console.log(src);
        $currentImage.attr('src', src);
    });

    $nextBtn.click(function() {
        currentIndex = (currentIndex + 1) % currentAlbum.length;
        const src = currentAlbum.eq(currentIndex).attr('src');
        console.log(src);
        $currentImage.attr('src', src);
    });
});
