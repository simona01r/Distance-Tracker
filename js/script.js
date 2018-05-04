
$(document).one('pageinit', function () {

    // Display runs
    showRuns();

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

    function showRuns() {
        // get runs object
        var runs = getRunsObject();

        // Check if empty
        if (runs != '' && runs != null) {
            for (var i = 0; i < runs.length; i++) {
                //                         li classes -> are for jQuery mobile user interface (just a style that works corectly)
                $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong>' + runs[i]["date"] +
                        ' <br><strong>Distance: </strong>' + runs[i]["km"] + 'm<div class="controls">' +
                        '<a href="#edit" id="editLink" data-km="' + runs[i]["km"] + '" data-date="' + runs[i]["date"] + '">Edit</a> | <a href="#" id="deleteLink" data-km="' + runs[i]["km"] + '" data-date="' + runs[i]["date"] + '" onclick="return confirm(\'Are You Sure?\')">Delete</a></li>');
            }
            $('#home').bind('pageinit', function () {
                $('#stats').listview('refresh');
            });
        } else {
            $('#stats').html('<p>You have no logged runs</p>');
        }
    }

});


