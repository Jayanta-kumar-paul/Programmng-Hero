<!DOCTYPE html>
<html>
<body>
    <h2>Enter Two Numbers</h2>
    <form method="POST" >
        <label for="num1">Name:</label>
        <input type="textbox"  name="name" required><br><br>

        <button type="submit">Submit</button>
    </form>
    <?php
    print_r($_POST);
    ?>
    </body>
    </html>

    