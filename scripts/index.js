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

    // display the corresponding content in the container
    $('.dashboard-container').addClass('active');
    const HandleChangingContainerContent =()=>{
        
        let ClickedSubmenuDataType=null;
        let previousClicked=null;
        $('.menu-bar-content-list>li>ul>li').on('click', function(){
            $('.dashboard-container').removeClass('active');
            previousClicked=ClickedSubmenuDataType;
            ClickedSubmenuDataType=$(this).data('container-content-type');
            $(`.${ClickedSubmenuDataType}-container`).addClass('active')
            if(previousClicked!=ClickedSubmenuDataType){
                $(`.${previousClicked}-container`).removeClass('active');
            }
        });
    }
    $('.order-button').on('click', function() {
        const orderType = $(this).data('order-type');
        $('.orders-container-dashboard').removeClass('active-table');
        $(`#${orderType}-orders`).addClass('active-table');
    });
    let ctx = $('#ordersChart')[0].getContext('2d')
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
        updateChart('line');
        // Attach click event handlers to the buttons
        $('#actualgraph').on('click', function () {
            updateChart('line');
        });

        $('#bar-chart').on('click', function () {
            updateChart('bar');
        });

        // Function to update the chart type
        // Function to update the chart type
        function updateChart(type) {
            ordersChart.destroy();  // Destroy the existing chart
            ordersChart = new Chart(ctx, {
                type: type,
                data: (type === 'bar') ? initialDataBar : initialDataLine
            });
        }

        const headerAndContainer=$('.header-main-container-section')
        const menuBarSection=$('.menu-bar-section');
        const menuBtn=$('.header-menu-button');  
        menuBarSection.addClass('active');  
        headerAndContainer.addClass('menu-not-active');    
        menuBtn.on('click',()=>{
            $('#menu-bar-btn-close').toggleClass('active')
            $('#menu-bar-btn-open').toggleClass('not-active')
            menuBarSection.toggleClass('active');
            headerAndContainer.toggleClass('menu-not-active');
        });
        if ($(window).width()<=1000) {
            menuBarSection.addClass('active');
            headerAndContainer.addClass('menu-not-active');
        }
        HandleChangingContainerContent();
});
