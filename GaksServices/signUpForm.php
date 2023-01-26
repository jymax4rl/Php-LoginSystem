<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="formSttyle.css?v=<?php echo time(); ?>">
    <title>Gaks Services.com</title>

</head>

<body>
    <main class="formClass">
        <section class="right">
            <form action="#" method="post">

                <div class="name">
                    <label class="labelName" for="name">Name</label>
                    <input type="text" name="name" id="name">
                </div>

                <div class="surname">
                    <label class="labelSurname" for="surname">Surname</label>
                    <input type="text" name="surname" id="surname">
                </div>

                <div class="email">
                    <label class="labelEmail" for="email">Email</label>
                    <input type="email" name="email" id="email">
                </div>

                <div class="pwords">
                    <div class="pwd">
                        <label class="labelPwd" for="pwdInput">password</label>
                        <input type="password" name="pwd" id="pwdInput">
                    </div>

                    <div class="pwdVerification">
                        <label class="labelPwdVerification" for="pwd">Re-type password</label>
                        <input type="password" name="pwd" id="pwdVerifInput">
                    </div>
                </div>


                <button id="submit" type="submit">submit</button>

                <!-- button to slidee the form -->
                <div class="parentSlider">
                    <div class="sliderBtn">
                    </div>
                </div>
            </form>
        </section>
        <section class="left">
            <div class="welcome">
                <h1>Welcome Chez <span style="color: black;">Gaks Services</span></h1>
            </div>
        </section>
    </main>


    <script src="formStyle.js?v=<?php echo time(); ?>"></script>
</body>

</html>