<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data safely
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $contact_no = mysqli_real_escape_string($conn, $_POST['contactno']);
    $course_id = mysqli_real_escape_string($conn, $_POST['course']);
    $state_id = mysqli_real_escape_string($conn, $_POST['city']);
    $specialization = isset($_POST['specialization']) ? mysqli_real_escape_string($conn, $_POST['specialization']) : NULL;
    $activity = mysqli_real_escape_string($conn, $_POST['activity']);

    // Get Course Name (for reporting)
    $course_list = [
        "195" => "Online DBA Doctorate",
        "1" => "Online MBA",
        "14" => "Online Executive MBA",
        "65" => "Online Dual MBA",
        "2" => "Online MCA",
        "3" => "Online MCom",
        "4" => "Online MA",
        "5" => "Online BBA",
        "6" => "Online BCom",
        "7" => "Online BA",
        "8" => "Online BCA"
    ];

    $course_name = $course_list[$course_id];

    // Get State Name
    $state_name = $_POST['city']; // If you want mapping we can do later

    // Insert Query
    $sql = "INSERT INTO leads 
            (full_name, email, contact_no, course_id, course_name, specialization, state_id, state_name, activity)
            VALUES 
            ('$full_name', '$email', '$contact_no', '$course_id', '$course_name', '$specialization', '$state_id', '$state_name', '$activity')";

    if (mysqli_query($conn, $sql)) {

        // Success Redirect
        echo "<script>
                alert('Lead Submitted Successfully!');
                window.location.href='index.html';
              </script>";

    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

?>