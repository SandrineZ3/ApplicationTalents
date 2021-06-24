<!DOCTYPE html>
<html>
<head>
    <meta charset="<?= $this->charset; ?>"/>
    <meta name="robots" content="noindex,nofollow,noarchive"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>An Error Occurred: <?= $statusText; ?></title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
    <style><?= $this->include('assets/css/error.css'); ?></style>
</head>
<body>
    <h1>Oh oh !... On dirait qu'une erreur s'est produite !</h1>
    <div class="container">
    <div id="left">
        <div id="errorCode">
            <div id="attentionIcon">
                <?= $this->include('assets/images/attention.svg'); ?>
            </div>
            <div id="attentionText">
                <p>Code d'erreur : <span><?= $statusCode; ?></span></p>
                <p>Description : <span><?= $statusText; ?></span></p>
            </div>
        </div>
        <div id="errorText">
            <p>Ce n'est probablement pas grand-chose !</p>
            <p>En attendant, vous pouvez revenir sur l'application en toute sécurité grâce au bouton
                ci-dessous.</p>
        </div>
        <div id="btnRetour">
            <a href="../">Revenir sur l'application</a>
        </div>
    </div>

    <div id="right">
        <?= $this->include('assets/images/levitateBrain.svg'); ?>
    </div>
</div>
<script><?= $this->include('assets/js/animatedBackgroundError.js'); ?></script>
</body>
</html>
