$(document).ready(function () {
    const mainListDiv = $('.menu-bar-content-list>li>div');

    // Initially hide all submenus
    $('.menu-bar-content-list>li>ul').hide();

    mainListDiv.on('click', function (event) {
        const clickedDiv = $(this);
        const clickedMenuItem = clickedDiv.closest('li');
        const submenu = clickedMenuItem.find('ul');
        const chevronIcon = clickedDiv.find('.bi-chevron-down');

        // Close all other open submenus and remove 'listOpen' class
        $('.menu-bar-content-list>li>ul').not(submenu).hide();
        $('.menu-bar-content-list>li').not(clickedMenuItem).removeClass('listOpen');
        $('.bi-chevron').removeClass('bi-chevron-up rotated'); // Remove both classes

        // Toggle visibility of the clicked menu item's submenu
        submenu.slideToggle();

        // Toggle the 'listOpen' class to highlight the clicked menu item
        clickedMenuItem.toggleClass('listOpen');

        // Toggle the 'rotated' class to rotate and switch chevron icon
        chevronIcon.toggleClass('rotated');
        chevronIcon.toggleClass('bi-chevron-up');
    });
    $('.order-button').on('click', function() {
        const orderType = $(this).data('order-type');
        $('.orders-container').removeClass('active-table');
        $(`#${orderType}-orders`).addClass('active-table');
    });
    let ctx = $('#ordersChart')[0].getContext('2d');
        let initialDataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Number of Orders (2022)',
                borderColor: '#1967d2',  // Set the border color to #1967d2
                backgroundColor: '#1967d2', 
                data: [12, 19, 3, 5, 2, 3, 8, 10, 15, 7, 20, 18],
            }]
        };
        let initialDataLine ={
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Number of Orders (2022)',
                borderColor: '#1967d2',
                backgroundColor: '#1967d2',
                data: [12, 19, 3, 5, 2, 3, 8, 10, 15, 7, 20, 18],
                tension: 0.4, // Set tension for smoothness
            }]
        }
        let ordersChart = new Chart(ctx, {
            type: 'line',
            data: initialDataLine
        });

        // Attach click event handlers to the buttons
        $('#actualgraph').on('click', function () {
            updateChart('line');
        });

        $('#bar-chart').on('click', function () {
            updateChart('bar');
        });

        // Function to update the chart type
        function updateChart(type) {
            ordersChart.destroy();  // Destroy the existing chart
            ordersChart = new Chart(ctx, {
                type: type,
                data: type='bar'?initialDataLine:initialDataBar
            });
        }
        const headerAndContainer=$('.header-main-container-section')
        const menuBarSection=$('.menu-bar-section');
        const menuBtn=$('.header-menu-button');
        let isFirstClick=true;
        
        menuBtn.on('click',()=>{
            let delayTime=isFirstClick?300:0;
            
            menuBarSection.toggleClass('active');
            headerAndContainer.toggleClass('menu-not-active');
            setTimeout(function () {
                menuBarSection.toggleClass('active-display-none');
            }, delayTime);
            isFirstClick=!isFirstClick;

        });
});
