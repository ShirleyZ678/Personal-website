$(document).ready(function() {
    console.log("Page loaded")
    var soundID = "sound";
    var storyID = 0
    createjs.Sound.registerSound("sounds/P!nk feat. Nate Ruess - Just Give Me a Reason.mp3", soundID);

    $('#stop').hide();
    $(`#content-${storyID + 1}`).hide();

    $('#red').click(() => {
        $('#content-2').css("color", "red")
    })

    $('#blue').click( () => {
        $('#content-2').css("color", "blue")
    })

    $('#green').click( () => {
        $('#content-2').css("color", "green")
    })

    $('#change-content-1').click( () => {
        $(`#content-${storyID}`).fadeOut()
        $(`#content-${storyID + 1}`).fadeIn()
        storyID = (storyID + 1) % 2
        $('#change-content-1').text(storyID == 0 ? 'Show Story' : 'Hide Story')
    })

    $('#play').click( () => {
        createjs.Sound.play(soundID);
        $('#stop').show();
        $('#play').hide();
        $('#title').text('Just Give Me a Reason');
        $('#lyrics').html(`
        Right from the start<br>
        You were a thief, you stole my heart<br>
        And I, your willing victim<br>
        I let you see the parts of me, that weren't all that pretty<br>
        And with every touch you fixed them<br>
        Now you've been talking in your sleep oh oh<br>
        Things you never say to me oh oh<br>
        Tell me that you've had enough<br>
        Of our love, our love<br>
        Just give me a reason, just a little bit's enough<br>
        Just a second we're not broken just bent, and we can learn to love again<br>
        It's in the stars, it's been written in the scars on our hearts<br>
        We're not broken just bent, and we can learn to love again<br>
        I'm sorry I don't understand<br>
        Where all of this is coming from<br>
        I thought that we were fine (oh we had everything)<br>
        Your head is running wild again<br>
        My dear we still have everythin'<br>
        And it's all in your mind (yeah but this is happenin')<br>
        You've been havin' real bad dreams oh oh<br>
        You used to lie so close to me oh oh<br>
        There's nothing more than empty sheets between our love, our love<br>
        Oh our love, our love<br>
        Just give me a reason, just a little bit's enough<br>
        Just a second we're not broken just bent and we can learn to love again<br>
        I never stop, you're still written in the scars on my heart<br>
        You're not broken just bent and we can learn to love again<br>
        Oh tear ducts and rust<br>
        I'll fix it for us<br>
        We're collecting dust, but our love's enough<br>
        You're holding it in<br>
        You're pouring a drink<br>
        No nothing is as bad as it seems<br>
        We'll come clean<br>
        Just give me a reason just a little bit's enough<br>
        Just a second we're not broken just bent and we can learn to love again<br>
        It's in the stars, it's been written in the scars on our hearts<br>
        That we're not broken just bent and we can learn to love again<br>
        Just give me a reason, just a little bit's enough<br>
        Just a second we're not broken just bent, and we can learn to love again<br>
        It's in the stars, it's been written in the scars on our hearts<br>
        That we're not broken just bent, and we can learn to love again<br>
        Oh we can learn to love again<br>
        Oh we can learn to love again<br>
        Oh that we're not broken just bent and we can learn to love again <br>`);
       
    })

    $('#stop').click( () => {
        createjs.Sound.stop(soundID);
        $('#stop').hide();
        $('#play').show();
    })

});