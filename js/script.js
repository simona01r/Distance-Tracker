<<<<<<< HEAD
$(document).one('pageinit', function () {


 // Add Handler
    $('#submitAdd').on('tap', addRun);


// Add a run
    function addRun() {
        // Get form new values
        var km = $('#addKm').val();
        var date = $('#addDate').val();

        // Create  'run'new object
        var run = {
            date: date,
            km: parseFloat(km)
        };
        //  get the old objects
        var runs = getRunsObject();

        // Add new run to old runs array
        runs.push(run);

        alert('Run Added');

        // Set stringified object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));

        // Redirect
        window.location.href = "index.html";

        return false;
    }

    // Get the existing runs object
    function getRunsObject() {
        // Set old/existing runs array
        var runs = new Array();
        // Get old runs from localStorage in the current
        var currentRuns = localStorage.getItem('runs');

        // Check localStorage
        if (currentRuns != null) {
            // Set to runs
            var runs = JSON.parse(currentRuns);
        }

        // Return runs object
        return runs.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        });
    }



});
=======
$(document).one('pageinit', function () {


 // Add Handler
    $('#submitAdd').on('tap', addRun);


// Add a run
    function addRun() {
        // Get form new values
        var km = $('#addKm').val();
        var date = $('#addDate').val();

        // Create  'run'new object
        var run = {
            date: date,
            km: parseFloat(km)
        };
        // get the old objects
        var runs = getRunsObject();

        // Add new run to old runs array
        runs.push(run);

        alert('Run Added');

        // Set stringified object to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));

        // Redirect
        window.location.href = "index.html";

        return false;
    }

    // Get the existing runs object
    function getRunsObject() {
        // Set old/existing runs array
        var runs = new Array();
        // Get old runs from localStorage in the current
        var currentRuns = localStorage.getItem('runs');

        // Check localStorage
        if (currentRuns != null) {
            // Set to runs
            var runs = JSON.parse(currentRuns);
        }

        // Return runs object
        return runs.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        });
    }



});
>>>>>>> b38f3019f39bbe0efd2bbde06044442473306be9
