<?php
require_once "../includes/db.php";

$query = "
SELECT 
    l.id,
    l.full_name,
    l.email,
    l.phone,
    c.course_name,
    s.state_name,
    l.created_at
FROM leads l
JOIN courses c ON l.course_id = c.id
JOIN states s ON l.state_id = s.id
ORDER BY l.created_at DESC
";


$result = mysqli_query($conn, $query);
?>

<table border="1" cellpadding="10">
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Course</th>
    <th>State</th>
    <th>Date</th>
</tr>

<?php while ($row = mysqli_fetch_assoc($result)) { ?>
<tr>
    <td><?= $row['full_name'] ?></td>
    <td><?= $row['email'] ?></td>
    <td><?= $row['phone'] ?></td>
    <td><?= $row['course_name'] ?></td>
    <td><?= $row['state_name'] ?></td>
    <td><?= $row['created_at'] ?></td>
</tr>
<?php } ?>
</table>