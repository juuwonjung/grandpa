

function init(riveFile) {

    let userAvatar = $('body').data('user-avatar');


    let waiting = false;

    const array_reply = {
        "what?" : '<div id ="hearing" class="brother"><p> He also has very <span>bad hearing</span> now.</p><span class="brs"></span><p>He can\'t hear with one of his ear at all.</p><span class="brs"></span><p>No.. you have to shout at him <span>repeatedly.</span></p><span class="brs"></span><p>You need to shout <span>in front of him </span>to make conversation.</p></div>',
        "..." : '<div id="reluctant" class="brother"><p>He also has very <span>bad hearing now.</span></p><span class="brs"></span><p>Yeah, and I think he realizes that.</p><span class="brs"></span><p> <span>He\'s well aware of that,</span> so that\'s why maybe.. He\'s um he seems <span>more reluctant to engage in conversations</span> as years pass by..</span></p></div>',
        "it's most important for your future." : '<div id="dream" class="brother"><p>The concept of dream wasn\'t the same as right now.</p><span class="brs"></span><p>Back then, during his era, people generally thought the most ideal way to live life was contributing to society.</p><span class="brs"></span><p>Becoming a productive person, that itself could\'ve been the dream of an average person.</p><span class="brs"></span><p>I think it\'s hard to interpret it from the current sociocultural perspective..</p></div>',
        "that's what you need to do." : ' <div id ="strong beliefs" class="brother"><p>People have beliefs, but whether they\'re able to <span>enforce</span> those beliefs to others is another issue.</p><span class="brs"></span><p>I think he\'s a man that would be willing to enforce... not enforce but to make people follow his beliefs.</p><span class="brs"></span><p>So he thinks he is correct.</p><span class="brs"></span><p>Not always but in some.. for some topics or issues.</p></div>',
        "that's why you need to study.": ' <div id="proud" class="brother"><p>But grandpa I\'d say he\'s .. to make him happy, you have to work, <span>not show affection.</span></p><span class="brs"></span><p>He\'s <span>not a man to be affected by affection..</span> to make him happy, you have to show that you <span>meet his expectations.</span></p><span class="brs"></span><p> I\'d say he generally would\'ve been a <span>hard person to make proud. </span></p></div>',
        "that's why you need to be successful.": '<p>Usually when he talks, it usually ends up in <span>why.</span> <span class="brs"></span> Something like you should do that, this...</p>',
        "that's why you need to work hard.": '<div id ="strong beliefs" class="brother"><p>People have beliefs, but whether they\'re able to <span>enforce</span> those beliefs to others is another issue.</p><span class="brs"></span><p>I think he\'s a man that would be willing to enforce... not enforce but to make people follow his beliefs.</p><span class="brs"></span><p>So he thinks he is correct.</p><span class="brs"></span><p>Not always but in some.. for some topics or issues.</p></div>',
        "that's good.. how's your mom doing?": '<div id="mom1" class="brother"><p>I would say ... the distance with mother was <span>not too close, not too far.</span></p><span class="brs"></span><p>He <span>never</span> yelled at her.</span> to make him happy, you have to show that you <span>meet his expectations.</span></p><span class="brs"></span><p> But he yelled so many times to <span>her brother.</span></p><span class="brs"></span><p>My mom didn\'t really get like, yelled at from her father.</p><span class="brs"></span><p> <span>So that kind of tells, right?</span></p>',
        "make sure to listen to her.": '<p>I don\'t know about mom and granpa.<span class="brs"></span> They\'re in a good relationship now, so I guess that\'s what I\'d like to mention. <span class="brs"></span><span>They love each other, in present tense.<span></p>',
        "make sure to be good to her.": '<p>I don\'t know about mom and granpa.<span class="brs"></span> They\'re in a good relationship now, so I guess that\'s what I\'d like to mention. <span class="brs"></span><span>They love each other, in present tense.<span></p>',
        "are you studying hard at school?": '<div id="convo" class="brother"><p>I don\'t talk to him much.. not even often. I guess whenever I see him. 3 times a year?</p><span class="brs"></span><p>The conversations last normally about.. It lasts around a few minutes long.</span></p><span class="brs"></span><p> He always asks do you study well?.. how\'s mom doing.. <span>that\'s it.</span></p><span class="brs"></span><p>It was always similar. Study hard. That was the biggest thing. He said study harder to me.</p><span class="brs"></span></div>',
        "so are you doing well?":'<div id="relationship" class="brother"><p>Grandpa and I, we\'re <span>far, but close.</span></p><span class="brs"></span><p>Far because we don\'t exchange a lot of conversation.</p><span class="brs"></span><p> We don\'t meet a lot of times, and even if we meet <span>it doesn\'t seem like he\'s much interested in my personal life.</span></p><span class="brs"></span><p>But then again, you know, he shows signs where he <span>cares.</span></p><span class="brs"></span><p> He\'s <span>happy</span> when we visit him. So yeah, he\'s close and he\'s far.</p></div>',
        "so is everything alright?":'<div id="convo" class="brother"><p>I don\'t talk to him much.. not even often. I guess whenever I see him. 3 times a year?</p><span class="brs"></span><p>The conversations last normally about.. It lasts around a few minutes long.</span></p><span class="brs"></span><p> He always asks do you study well?.. how\'s mom doing.. <span>that\'s it.</span></p><span class="brs"></span><p>It was always similar. Study hard. That was the biggest thing. He said study harder to me.</p><span class="brs"></span></div>',
        "....": '<p>As he aged, his hearing ability has significantly decreased.</p><span class="brs"></span><p>It\'s <span>hard to have normal conversations</span> these days..</p><span class="brs"></span><p> He wears a hearing aid ear bud in one of his ears and there are <span>lots of problems during calls.</span></p><span class="brs"></span><p>It\'s his biggest problem.</p>',
        "what did you say?":'<p>You need to shout at least from <span>a meter away</span> and <span>articulate in a loud voice</span> for him to understand.</p><span class="brs"></span><p><span>He doesn\'t understand </span> if you try to have a normal conversation with him from further away.</p>',
        "routines are very important in life. make sure you keep your routines too.":'<p>I think his lifestyle is very <span>routined,</span> and he has a habit of saying that routines are very important in life.</p><span class="brs"></span><p>So I think that is what\'s <span>most important</span> to him.</p><span class="brs"></span><p>I think he expresses love by <span>nagging</span> at people. Like do this.. Do that.. </p><span class="brs"></span><p>To him he thinks that is <span>love, a way of showing affection.</span></p>',
        "yes, that's right. ":'<p>His conversational skills are quite lacking.</p><span class="brs"></span><p>I think it\'s his main weakness.</p><span class="brs"></span><p>He doesn\'t have much empathy so he doesn\'t really listen, ask, or react to other people\'s interests.</p><span class="brs"></span><p>He <span>one-sidedly</span> talks about his thoughts and interests so it\'s hard for a two-way conversation.</p><span class="brs"></span><p>That\'s probably the key reason why he doesn\'t, or can\'t talk with his own family that much.</p>',
        "i see.":'<p>His conversational skills are quite lacking.</span></p><span class="brs"></span><p>I think it\'s his main weakness.</p><span class="brs"></span><p>He doesn\'t have much empathy so he doesn\'t really listen, ask, or react to other people\'s interests.</p><span class="brs"></span><p>He <span>one-sidedly</span> talks about his thoughts and interests so it\'s hard for a two-way conversation.</p><span class="brs"></span><p>That\'s probably the key reason why he doesn\'t, or can\'t talk with his own family that much.</p>',
        "i'm the same.. healthy.. i walk everyday for an hour, eat three meals everyday, then watch the news and play go. routines are really important.":'<p>The prospects weren\'t too bright when he was <span>diagnosed with cancer.</span></p><span class="brs"></span><p>He had a very <span>strong urge to live.</span> For most people who undergo cancer treatments, their appetite would decrease but he continuously ate healthy food, exercised, and only made healthy choices for his body.</p><span class="brs"></span><p>You could say he <span>beat cancer with his willpower.</span></p>',
        ".... no not really. i keep my routines everyday. routines are very important in life. you should keep your routines too.":'<p>I think he\'s<span> lonely.</span></p><span class="brs"></span><p>After his wife passed away, I don\'t think he has people that he particularly likes in his life..</p><span class="brs"></span><p><span>I don\'t think he knows how to be not lonely.</span> You need to spend time with other people, good time, but I don\'t think he had much experience spending time with others and he doesn\'t know how to. </span>So he spends most of his time alone.</p><span class="brs"></span><p>He might not be aware of loneliness itself.</span></p><span class="brs"></span><p>To be lonely, you need to acknowledge or feel that you want to be with others but I don\'t think he desires, or feels the need to do that.</p>',
        "i keep my routines everyday.  need to go out to walk in the morning for an hour, eat all three meals with vegetables and fruits. routines are very important in life. you should keep your routines too.":'<p>"I think he\'s<span> lonely.</span></p><span class="brs"></span><p>After his wife passed away, I don\'t think he has people that he particularly likes in his life..</p><span class="brs"></span><p><span>I don\'t think he knows how to be not lonely.</span> You need to spend time with other people, good time, but I don\'t think he had much experience spending time with others and he <span>doesn\'t know how to. So he spends most of his time alone.</span></p><span class="brs"></span><p>He might <span>not be aware of loneliness itself.</span></p><span class="brs"></span><p>To be lonely, you need to acknowledge or feel that you want to be with others but I don\'t think he desires, or feels the need to do that.</p>',
        "i used to every month, but since covid and my recovery, it's been hard to go out. i stay home most of the times but i always make sure to keep my routines. routines are very important in life. make sure you keep your routines too.":'<p>"I don\'t think he has many <span>tight-knit friends that he can really rely on.</span></p><span class="brs"></span><p>Most of his social activities revolve around meeting people he met from his position in society, university alumnus and bank colleagues.</p><span class="brs"></span><p>Not many <span>personal, close relationships.</span></p><span class="brs"></span> <p>He used to have regular golf meets with his university friends but after recovering from cancer I think he barely plays anymore.</p><span class="brs"></span><p>So.. these days he doesn\'t have any regular meetings with <span>anyone..</span></p>',
        "even if you get old, it's important to keep routines. i always walk in the morning for an hour, eat all three meals, take two plates of fresh vegetables and fruits, and watch the news continuously. keeping routines is very important in life. you should take note of that as well.":'<p>"He had a very <span>strong urge to live.</span> For most people who undergo cancer treatments, their appetite would decrease but he continuously ate healthy food, exercised, and only made <span>healthy choices for his body.</span></p><span class="brs"></span><p>You could say he <span>beat cancer with his willpower.</span></p><p>I think his lifestyle is very routined, and he has a habit of saying that routines are very important in life.</p><span class="brs"></span><p>So I think that is what\'s most important to him.</p>',
        "it's just another dumb useless policy. what a waste of money. ":' <p>His political stance is extreme <span>right.</span></p><span class="brs"></span><p> He\'s also very interested in the <span>political current events.</span></p><span class="brs"></span><p>He has a quite critical perspective on political corruption - he gets angry, swears sometimes..</p>',
        "you know the.. the korean golf player whose shots are amazing? she won another medal in the league recently! more players like her need to show up..":'<p>He does like me quite a bit.</p><span class="brs"></span><p>He makes conversation with me >more than his daughter or son.</p><span class="brs"></span><p>I\'m also the one who listens to him the most.</p><span class="brs"></span><p>So I guess another way of him <span>showing affection</span> is chatting with me about different topics..</p>',
        "the minister of justice, he was caught for corrupting his daughter's university admissions. that bastard faked her application by using his own connections to make professors write a research paper for her. that's why the current government is so messed up these days..":'<p>"His political stance is extreme <span>right.</span></p><span class="brs"></span><p> He\'s also very interested in the <span>political current events.</span></p><span class="brs"></span><p>He has a quite critical perspective on political corruption - he gets angry, swears sometimes..</p>',
        "it's because the current left politicians are useless, that's why! full of corruption..":'<p>His political stance is extreme <span>right.</span></p><span class="brs"></span><p> He\'s also very interested in the <span>political current events.</span></p><span class="brs"></span><p>He has a quite critical perspective on political corruption - he gets angry, swears sometimes..</p>',
        "it's increasing by 30%. why the hell would anyone ever do that?":'<p>His political stance is extreme <span>right.</span></p><span class="brs"></span><p> He\'s also very interested in the <span>political current events.</span></p><span class="brs"></span><p>He has a quite critical perspective on political corruption - he gets angry, swears sometimes..</p>',
        "hmm.. yes.. you know the other day i heard that the tax-rates are increasing..":'<p>He does like me quite a bit.</p><span class="brs"></span><p>He makes conversation with me more than his daughter or son.</p><span class="brs"></span><p>I\'m also the one who listens to him the most.</p><span class="brs"></span><p>So I guess another way of him <span>showing affection</span> is chatting with me about different topics..</p>',
        "i see. did you check the latest policy the government implemented? it's ridiculous. those bastards!":'<p>His political stance is extreme <span>right.</span></p><span class="brs"></span><p> He\'s also very interested in the <span>political current events.</span></p><span class="brs"></span><p>He has a quite critical perspective on political corruption - he gets angry, swears sometimes..</p>',
        "how's work?":'<p>His <span>career</span> was <span>extremely important</span> in his life.</p><span class="brs"></span><p>Almost <span>everything</span> in his life to him.</span></p><span class="brs"></span><p>For <span>korean men</span> at that time, you could say that one\'s career withheld ultimate importance in his life.</span></p>',
        "is everything alright?":'<p>His relationship with me is quite <span>standard.</span></p><span class="brs"></span><p>He talks to me the <span>most.</span></p><span class="brs"></span><p>Talks to me more than he does with <span>his children.</span></p>',
        "hmm?" : '<p>His <span>hearing is quite bad..</span></p><span class="brs"></span><p>You need to shout right in front of him and I think I <span>tried to initiate a proper conversation</span> with him only <span>once</span> in my life, last summer.</p><span class="brs"></span><p>He doesn\'t really understand long sentences and calling is practically <span>impossible.</span></p>',
        ".....": '<p>I think his communication abilities are quite <span>low.</span></p><span class="brs"></span><p>Though I don\'t know if he\'s like that only to our family.</p><span class="brs"></span><p><span>I haven\'t had a proper conversation with him ever, in my life.</span></p><span class="brs"></span><p>I don\'t think I even told him much about myself. He <span>doesn\'t seem curious either..</span></p> <span class="brs"></span><p>I think he\'s <span>generally disinterested in other people\'s personal life.</span> </p>',
        "yeah, yeah.. so are you doing well?":'<p>My relationship with grandpa is quite <span>distant,</span> I would say.</p><span class="brs"></span><p>I think all of my conversations with him throughout life lasted a minute long except once last summer..</p><span class="brs"></span><p>He\'s really chill though, so I\'m fine with that.</p> <span class="brs"></span><p>He always <span>checks up with me,</span> whether it be asking me or mom if <span>I\'m okay"</span> </p>',
        "are you taking care of your health?":'<p>He doesn\'t have questions that go <span>beyond the surface-level check-ups.</span></p><span class="brs"></span><p>I don\'t think family is as important to him as it is to other typical grandparents..</p><span class="brs"></span><p>The conversations we have are practically <span>identical each and everytime.</span></p> <span class="brs"></span><p>He\'s pretty repetitive and has a clear character.. Cares about his health a lot.</p>',
        "that's good.. nothing's wrong at school right?": '<p>I normally answer <span>yes</span> to most of his questions because there isn\'t another way to answer them from the first place to be honest.. </p><span class="brs"></span><p>I really <span>don\'t know much about him.</span></p><span class="brs"></span><p>It\'s probably the same for him. Though the same thought <span>wouldn\'t have occurred to him.</span></p>',
        "that's good.. is your mom okay?": ' <p>I think he <span>likes my mom and my dad,</span> because he always talks to them more.</p><span class="brs"></span><p>He always asks me about my mom\'s health, whether she\'s alright. So I think he cares about her a lot.</span></p><span class="brs"></span><p>With dad, he definitely talks a lot.</p> <span class="brs"></span><p>Even to my brother he talks <span>more than he does with me.</span></p> <span class="brs"></span><p>Now that I think about it.. I do feel like the <span>odd one out.. But doesn\'t really make me sad or anything..</span></p>',
        "that's good.. listen to her well.. ":'<p>I think he <span>likes my mom and my dad,</span> because he always talks to them more.</p><span class="brs"></span><p>He always asks me about my mom\'s health, whether she\'s alright. So I think he cares about her a lot.</span></p>',
        "that's good.. let me talk to your mom now. ":'<p>He <span>always. And really always.</span> Ends our calls by saying <span>"okay now let me talk to your mom"..</span></p><span class="brs"></span><p>I wonder what they would talk about to have a <span>longer conversation than ours..</span></p>',
        "yeah, how are you feeling these days?": '<p>He <span>doesn\'t</span> communicate at all."</p><span class="brs"></span><p>He doesn\'t try to, and I don\'t know if it\'s because <span>he doesn\'t want to</span>, or if he doesn\'t <span>know how to.</span></p><span class="brs"></span><p>The conversations we normally have can\'t be called communication, it\'s more like each of us checking that we\'re alive.</p> ',
        "huh?": '<p><span>He really can\'t hear.</span></p><span class="brs"></span><p>He can\'t understand complex sentences <span>other than basic phrases </span>like hello, take care, etc.</p><span class="brs"></span><p>You can\'t have daily conversations about any other topic.</p>',
        "yeah, yeah..": '<p><span>He really can\'t hear.</span></p><span class="brs"></span><p>He can\'t understand complex sentences <span>other than basic phrases </span>like hello, take care, etc.</p><span class="brs"></span><p>You can\'t have daily conversations about any other topic.</p> ',
        "yes.. you too.. goodbye":'<p><span>He doesn\'t obsess over contacting each other.</span></p><span class="brs"></span><p>Like, about <span>receiving something first,</span> whether that be emotions or objects.</p><span class="brs"></span><p>My dad <span>never really cared about the give-and-take of emotions.</span></p> ',
        "no.. I don't.":'<p>And he <span>hates change.</span></p><span class="brs"></span><p>Even from the start he never wanted to accept change so now even if he wanted to, <span>he wouldn\'t be able to.</span></p><span class="brs"></span><p>I think he might regret those times himself.</p> <span class="brs"></span><p>For example, whenever we moved houses, it needed to be in front of a mountain. So he didn\'t like to live in the center, in some neighborhoods just because there weren\'t mountains.</p> ' ,
        "i'm fine, the same as always.. i don't really meet anyone.. don't worry.. are the kids alright?": '<p>If I tell him to <span>stay safe</span> or be <span>careful of corona,</span> he always says it\'s okay because he doesn\'t meet anyone..</p><span class="brs"></span><p> The rest of the conversation <span>doesn\'t work out</span> because of his hearing.</p><span class="brs"></span><p>He already can\'t make much conversation but on top of that has hearing problems.. </p>',
        "i know you're fine but try calling your brother sometime":'<p>He usually checks how I\'m doing then tells me to call my brother.</p><span class="brs"></span><p>I don\'t think they call each other, brother and dad, especially because his <span>hearing became worse.</span></p><span class="brs"></span><p>I try to call him at least once a week, or even twice. </p><span class="brs"></span><p>He doesn\'t know how to check messages..</p> ',
        "that's good.. i see..":' <p>If I call him, you know the calls usually last one minute and thirty seconds. At the most 3 minutes 30 seconds and 4 minutes is an achievement.</p><span class="brs"></span><p>We usually finish within <span>two minutes</span>, even if we meet in person.</p><span class="brs"></span><p>We talk about my husband most of the times, his work and everything.</p><span class="brs"></span>', 
        "i'm fine, i'll take care of myself as always, don't worry. i don't really meet anyone.. you too..":'<p>If I tell him to <span>stay safe</span> or be <span>careful of corona,</span> he always says it\'s okay because he doesn\'t meet anyone..</p><span class="brs"></span><p> The rest of the conversation <span>doesn\'t work out</span> because of his hearing.</p><span class="brs"></span><p>He <span>already can\'t make much conversation</span> but on top of that has hearing problems.. </p>',
        "yes.. you too.. goodbye":'<p>The conversation is always so <span>repetitive.</span> </p><span class="brs"></span><p><span>Always...</span>always hello, how are you, nothing\'s wrong right, i\'m good, goodbye.. take care... Like that.</p><span class="brs"></span><p><span>You could be talking to a stranger.</span></p>'

  
  
    }
    
 
    const array_input = {
        "why?" : '<div id = "questions" class="brother"><p>"So I <span>attempted</span> a lot of communication with him</p><span class="brs"></span><p>and I can be very persistent.</p><span class="brs"></span><p>But you <span>can\'t</span> really make him answer questions.</p><span class="brs"></span><p>He <span>won\'t</span> answer your questions.</p><span class="brs"></span><p>He talks about things that aren\'t really related to the essence of the question."</p></div>',
        "how are you?" : '<div id ="why" class="brother"><p>"I would say a two-way communication is kind of <span>impossible.</span></p><span class="brs"></span><p>He\'s not a man that would get persuaded.</p><span class="brs"></span><p>But you <span>can\'t</span> really make him answer questions.</p><span class="brs"></span><p>He <span>won\'t</span> answer your questions."</p></div>',
        "nothing." : ''

    }



    var bot = new RiveScript();

    bot.loadFile(riveFile, loading_done, loading_error);

    function loading_done() {
        console.log('loaded');
        bot.sortReplies();
    }

    function loading_error() {
        console.log('not loaded');
    }

    function checkQuotes(reply) {
        reply = reply.toLowerCase();
        if(array_reply[reply]) {
            $('.quotes').html(array_reply[reply])
        }
    }

    function checkQuotes2(input) {
        input = input.toLowerCase();
        if(array_input[input]) {
            $('.quotes').html(array_input[input])
        }
    }

    $('.ask').click(function(e) {
        e.preventDefault();
        if (waiting) return;
        waiting = true;
    
        var input = $('.user-input').val();
        var reply = bot.reply("local-user", input);
    
        $('.output').append(`
            <div class="message user-message">
                <div class="question">
                    <span>${input}</span>
                </div>
                <img src="${userAvatar}" class="avatar">

            </div>
        `);
        
    
        $('.output').animate({ scrollTop: $('.output').prop('scrollHeight') }, 700);
    
        setTimeout(function () {
            $('.output').append(`
                <div class="message bot-message">
                    <img src="./grandpa.png" class="avatar">
                    <div class="reply">
                        <span>${reply}</span>
                    </div>
                </div>
            `);
    
            $('.output').animate({ scrollTop: $('.output').prop('scrollHeight') }, 700);
            waiting = false;
        }, Math.random() * 1000);
    
        checkQuotes(reply);
        checkQuotes2(input);
    });
    
 // Bind to each .info and show corresponding popup
 $('.info').each(function(index) {
    $(this).on('click', function() {
        $('.popup').eq(index).show();
    });
});

// Handle close button inside each popup
$('.popup .close').on('click', function () {
    $(this).closest('.popup').hide();
});

}

