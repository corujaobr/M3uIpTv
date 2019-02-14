$(document).ready(function() {
    
    $('#result').html('');
    $.ajax({
        url: 'http://localhost/TvStream/appBeinM3u.php',
        method: 'GET',
        dataType: 'jsonP'
    
    }).done(function(data) {

        console.log(data);


        $('#result').text('Total: ' + data.list.item.length + ' Channels found');
        $.each(data, function(i, prob) {
            var tvglogo = '';
            console.log("index :"+i);
            console.log("value  "+prob);  

            console.log(prob); 
     
            $.each(prob.item, function(j, channel) {
              

                console.log(channel.title);
            
           

            if (typeof channel.tvlogo != 'undefined') tvglogo = '<img src="' + channel.tvlogo + '" alt="' + channel.title + '" style="width:38px;height:38px;float:left;marging: 5px;border:solid 1px #ccc;margin-right:5px">';
            $('#result').append('<li><a href="' + channel.url + '">'+channel.title+'</a><br>' + channel.media_url + '</li>');
             $('#result').append('<video id="   example-video" width=960 height=540 class="video-js vjs-default-skin"><source src="'+channel.media_url +'"type="application/x-mpegURL"></video>');
                
            });  
        });
    });
});
/* TEST TO LOAD VIDEO WITH VIDEOJS */
/*
$(document).on('click', '#result a', function(e) {
    e.preventDefault();
    var $this = $(this);
    var vidTitle = $this.text().replace("â–º ", "");
    $('#vidTitle').text(vidTitle);
    $('#result a').removeClass('bold');
    $this.addClass('bold');
    var mediaUrl = $this.attr('href');
    loadStream(mediaUrl)
});
*/