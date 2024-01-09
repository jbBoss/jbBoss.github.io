    // Function to check the orientation and display the prompt if in portrait mode
    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            document.getElementById('rotatePrompt').style.display = 'flex';
        } else {
            document.getElementById('rotatePrompt').style.display = 'none';
        }
    }

    // Initial check on page load
    checkOrientation();

    // Event listener for orientation change
    window.addEventListener('orientationchange', function () {
        checkOrientation();
    });

    // Event listener for window resize (handles cases where the device doesn't support orientationchange)
    window.addEventListener('resize', function () {
        checkOrientation();
    });
    
window.addEventListener('scroll', function () {
    var box3 = document.getElementById('box3');

    var r2 = box3.querySelector('.r2'); 
    var c2 = box3.querySelectorAll('.c2');
    var c3 = box3.querySelectorAll('.c3');
    var three_boxhead = box3.querySelector('.three-boxhead'); 

    var b3position = box3.getBoundingClientRect();
    var bh3Rect = three_boxhead.getBoundingClientRect();

    var box2 = document.getElementById('box2');
    var sright = box2.querySelector('.sright'); 
    var slft = box2.querySelector('.slft'); 
    var two_boxOne = box2.querySelector('.two-boxOne'); 

    var b2position = box2.getBoundingClientRect();
    var bh2Rect = two_boxOne.getBoundingClientRect();

    if (bh3Rect.top >= 0 && bh3Rect.bottom <= b3position.height) {
        console.log('cvards')
        r2.classList.add('tempa');
        c2.forEach(function (element) {
            element.classList.add('tempa');
        });
    
        
        c3.forEach(function (element) {
            element.classList.add('tempa');
        });
    }
    else {
        console.log('s no cards')
    }

    
    if (bh2Rect.top >= 0 && bh2Rect.bottom <= b2position.height) {
        console.log('slide ryt')
        sright.classList.add('sright_ani');
        slft.classList.add('slft_ani');
        slft.classList.add('slft_ani');
        two_boxOne.classList.add('opac');
    }
    else {
        console.log('no slide')
    }
});

    function openPDF() {
        // Replace 'YOUR_GOOGLE_DRIVE_PDF_URL' with the actual URL of your PDF on Google Drive
        var pdfUrl = 'https://drive.google.com/file/d/1AYxVZ6Q-8J57ZEv3u0zCG2hVxlBq6wfb/view?usp=drive_link';
    
        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
    }
