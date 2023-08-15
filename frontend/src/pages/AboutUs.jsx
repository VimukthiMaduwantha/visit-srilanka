import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import sl from '../assets/lss.png'
import archi from '../assets/archi.jpg'
import art from '../assets/art.jpg'
import img from '../assets/nat.jpg'
import amra from '../assets/am.jpg'
import food from '../assets/food.jpeg'
import tea from '../assets/tea.jpg'
import all from '../assets/all.jpg'
import flag from '../assets/flag.jpg'


function AboutUs() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <img
                        src={img}
                        width='100%'
                        height='auto'
                    />
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        component='img'
                                        src={sl}
                                        // width='366.03vw'
                                        width='100%'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - About the Sri Lanka -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    The culture of Sri Lanka has been influenced by many factors but has managed to
                                    retain much of its ancient aspects. Mostly it has been influenced by its long history and
                                    its Buddhist heritage. The country has a rich artistic tradition, embracing the fine arts,
                                    including music, dance, and visual arts. Sri Lankan lifestyle is reflected in the cuisine,
                                    festivals, and sports. South Indian influences are visible in many aspects. There are
                                    some influences from colonisation by the Portuguese, the Dutch, and the British. Sri
                                    Lankan culture is best known abroad for its cricket, food, holistic medicine, religious
                                    icons like the Buddhist flag, and cultural exports such as tea, cinnamon and gems. Sri
                                    Lankan culture is diverse, as it varies from region to region.
                                    Sri Lanka has had ties with Indian subcontinent from ancient times. Demographics:
                                    Sinhalese 74.8%, Sri Lankan Moors 9.23%, Indian Tamil 4.16%, Sri Lankan Tamil
                                    11.21%, Other 0.6%.
                                    Sri Lanka boasts of a documented history of over 2000 years mainly due to ancient
                                    historic scriptures like Mahawansa. Several centuries of intermittent foreign influence,
                                    has transformed Sri Lankan culture to the present outlook. Nevertheless ancient
                                    traditions and festivals are celebrated by mostly conservative Sinhalese people of the
                                    island, together with other minorities that make up the Sri Lankan identity.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Architecture -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    The architecture of Sri Lanka displays a rich variety of architectural forms and styles.
                                    Buddhism had a significant influence on Sri Lankan architecture. However techniques
                                    and styles developed in Europe and Asia have also played a major role in the
                                    architecture of Sri Lanka.
                                </Typography>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                                    <img
                                        src={archi}
                                        width='100%'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={art}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Arts and Crafts -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    Many forms of Sri Lankan arts and crafts take inspiration from the Island&#39;s long
                                    and lasting Buddhist culture which in turn has absorbed and adopted countless regional
                                    and local traditions. In most instances Sri Lankan art originates from religious beliefs,
                                    and are represented in many forms such as painting, sculpture, and architecture. One of
                                    the most notable aspects of Sri Lankan art are caves and temple paintings, such as the
                                    frescoes found in Sigiriya and religious paintings found in temples in Dambulla and
                                    Temple of the Tooth Relic in Kandy. Other popular forms of art have been influenced by both natives as well as outside settlers. For example, traditional wooden handicrafts and
                                    clay pottery are found around the hill country while Portuguese-inspired lacework and
                                    Indonesian-inspired Batik have become notable.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Music and Cinema -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    The cinematic style is similar to the Bollywood movies. In 1979, movie attendance rose
                                    to an all-time high, but recorded a gradual downfall since then. Undoubtedly, the most
                                    influential and evolutionary filmmaker in the history of Sri Lankan cinema is Lester
                                    James Peiris, who has directed a number of movies which led to global acclaim,
                                    including Rekava (Line of destiny, 1956), Gamperaliya (The changing village, 1964),
                                    Nidhanaya (The treasure, 1970), and Golu Hadawatha (Cold Heart, 1968).There are
                                    many cinemas around Sri Lanka in city areas.
                                    The cinematic style is similar to the Bollywood movies. In 1979, movie attendance rose
                                    to an all-time high, but recorded a gradual downfall since then. Undoubtedly, the most
                                    influential and evolutionary filmmaker in the history of Sri Lankan cinema is Lester
                                    James Peiris, who has directed a number of movies which led to global acclaim,
                                    including Rekava (Line of destiny, 1956), Gamperaliya (The changing village, 1964),
                                    Nidhanaya (The treasure, 1970), and Golu Hadawatha (Cold Heart, 1968).There are
                                    many cinemas around Sri Lanka in city areas.
                                </Typography>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={amra}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={food}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Cuisine -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    The cuisine of Sri Lanka draws influence from that of India, especially from Kerala, as
                                    well as colonists and foreign traders. Rice, which is usually consumed daily, can be
                                    found at any special occasion, while spicy curries are favourite dishes for lunch and
                                    dinner. A very popular alcoholic drink is toddy or arrack, both made from palm tree sap.
                                    Rice and curry refers to a range of Sri Lankan dishes. Sri Lankans also eat hoppers
                                    (Aappa, Aappam), which can be found anywhere in Sri Lanka.
                                    Much of Sri Lanka’s cuisine consists of boiled or steamed rice served with spicy curry.
                                    Another well-known rice dish is kiribath, meaning milk rice. Curries in Sri Lanka are not
                                    just limited to meat or fish- based dishes; there are also vegetable and even fruit
                                    curries. A typical Sri Lankan meal consists of a “main curry” (fish, chicken, or mutton),
                                    as well as several other curries made with vegetable and lentils. Side-dishes include
                                    pickles, chutneys and “sambols” which can sometimes be fiery hot. The most famous of
                                    these is the coconut sambol, made of scraped coconut mixed with chilli peppers, dried
                                    Maldivian fish and lime juice. This is ground to a paste and eaten with rice, as it gives
                                    zest to the meal and is believed to increase appetite.
                                    In addition to sambols, Sri Lankans eat “mallung”, chopped leaves mixed with grated
                                    coconut and red onions. Coconut milk is found in most Sri Lankan dishes to give the
                                    cuisine its unique flavour.
                                    Many of Sri Lanka’s urban areas are host to American fast food corporations and many
                                    of the younger generation have started to take a liking to this new style of cuisine
                                    although it is rejected by many, particularly the more traditional elder members of the
                                    community.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Spices and Tea Culture -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    Sri Lanka has long been renowned for its spices. The best known is Cinnamon
                                    (Cinnamomum verum/ Cinnamomum zeylanicum) which is native to Sri Lanka. In the
                                    15th and 16th centuries, spice and ivory traders from all over the world who came to Sri
                                    Lanka brought their native cuisines to the island, resulting in a rich diversity of cooking
                                    styles and techniques. Lamprais rice boiled in stock with a special curry, accompanied
                                    by frikkadels (meatballs), all of which is then wrapped in a banana leaf and baked as a
                                    Dutch-influenced Sri Lankan dish. Dutch and Portuguese sweets also continue to be
                                    popular. British influences include roast beef and roast chicken. The influence of Indian
                                    cooking methods and food has played a major role in what Sri Lankans eat.
                                    Sri Lankans use spices liberally in their dishes and typically do not follow an exact
                                    recipe: thus, every cook&#39;s curry will taste slightly different. Furthermore, people
                                    from different regions of the island (for instance, hill-country dwellers versus coastal
                                    dwellers) traditionally cook in different ways. Sri Lankan cuisine is known to be among
                                    the world&#39;s spiciest, due to the high use of different varieties of chilli peppers
                                    referred to as amu miris (Chili pepper), kochchi miris, and maalu miris (Banana pepper)
                                    (capsicum) and in Tamil Milakaai, among others. It is generally accepted for tourists to
                                    request that the food is cooked with a lower chilli content to cater for the more sensitive
                                    Western palette. Food cooked for public occasions typically uses less chilli than food
                                    cooked in the home, the latter where the food is cooked with the chilli content preferable
                                    to the occupants.
                                    Being one of the largest producers of tea in the world, Sri Lankans drink a lot of tea.
                                    There are many tea factories around mountainous areas. Many Sri Lankans drink at
                                    least three cups a day. Sri Lanka is also one of the best tea-producing countries in the
                                    world and the Royal Family of the United Kingdom has been known to drink Ceylon tea.
                                    Tea is served whenever a guest comes to a house; it is served at festivals and
                                    gatherings or just for breakfast.
                                </Typography>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={tea}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={all}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Languages of Sri Lanka -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    Sinhala (also called Sinhalese or Singhalese) is the mother tongue of the Sinhalese
                                    ethnic group which is the largest in Sri Lanka. It belongs to the Indo-Aryan branch of the
                                    Indo-European languages.
                                    Sinhala is spoken by about 16 million people in Sri Lanka, about 13 million of who are
                                    native speakers. It is one of the constitutionally-recognised official languages of Sri
                                    Lanka, along with Tamil, which has its origins in South India.
                                    Most Sri Lankans can speak English, though of course, their brand of English may
                                    sound a bit strange at first. Some struggle with English and that is sometimes due to a
                                    lack of confidence. Just enjoy the experience, if you can learn a little of Sinhala. The
                                    Sinhalese will go out of their way to help you because you have gone out of your way to
                                    learn their language, their most cherished possession and symbol of identity.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <br />
                <Box sx={{ paddingRight: '10px', paddingLeft: '10px', backgroundColor: '#F9F9F9', margin: '15px', borderRadius: '8px' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontWeight: 'bold' }}>
                                    - Story of the National flag -
                                </Typography>
                                <Typography sx={{ textAlign: 'justify', padding: '10px', fontSize: { md: '16px', xs: '10px' }, }}>
                                    The flag of Sri Lanka, also called the Lion Flag, consists of a golden lion holding a
                                    kastane sword (short traditional ceremonial/ decorative single-edged sword) in its right
                                    front paw, in front of a dark red background with four golden bo (species of fig native to
                                    Sri Lanka) leaves, one in each corner. Around the background is a yellow border, and to
                                    its left are vertical stripes of equal size in green and saffron, with the saffron closest to
                                    the lion.
                                    The lion represents the Sinhalese ethnicity and the bravery of the Sri Lankan nation
                                    while the four Bo leaves represent Metta (loving kindness), Karuna (compassion),
                                    Mudita (joy) and Upekka (equanimity). The orange stripe represents the Sri Lankan
                                    Tamils, the green stripe represents Sri Lankan Moors, and the maroon background
                                    represents the majority of Sinhalese, like the lion, this is the colour used in early flags of
                                    Sri Lanka by kings.

                                </Typography>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                                    <img
                                        src={flag}
                                        width='366.03vw'
                                        height='auto'

                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AboutUs