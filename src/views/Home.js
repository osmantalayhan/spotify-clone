import Section from "Components/Section"

function Home() {

    const items = [
        {
            id: 1,
            title: 'Ezhel Ağlattın',
            description : 'Türkçe rap favorileri',
            image: 'https://i.scdn.co/image/ab67616d00001e02e267ed96f0d5457121443225',
            artist: 'Ezhel',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/93ca05bd73caaa3423fb80e3b2bf3568.mp3'
        },

        {
            id: 2,
            title: 'Kuğulu Park',
            description : 'Türkçe rap te en çok dinlenilenler',
            artist: 'Ezhel',
            image: 'https://i.scdn.co/image/ab67616d00001e0281fced2c1c78e87b48199427',
            type: 'album',
            src : 'https://cdn.muzikmp3indir.com/mp3_files/5a477b2251621823fb58c08514fe9149.mp3'
        },

        {
            id: 3,
            title: 'Paspartu',
            description : 'Sanatçı',
            artist: 'Ezhel',
            image: 'https://i.scdn.co/image/ab67616d00001e02d02a49258ea280020f30895f',
            type: 'artist',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/3bbc66d58264fecbc111fdf12e98eb2c.mp3'
        },

        {
            id: 4,
            title: 'Defkhan Yanılma',
            artist: 'DEFKHAN',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e0244930644ec18c792cf37b44f',
            type: 'podcast',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/9de9223ad743a8f5d809bca16807bebd.mp3'
        },

        {
            id: 5,
            title: 'Ezhel Bul Beni',
            artist: 'Ezhel',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e026b42e100079c0b3132d3ed25',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/ed6f0bc70f0daf398026497ebab23989.mp3'
        },
        {
            id: 6,
            title: 'Ezhel Hayrola',
            artist: 'Ezhel',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e02cbd08db41ec858a0b9b31a5b',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/19a5d79f69b0008f9c8652ee1adb8117.mp3'
        }
    ]















    const itemsTo = [
        {
            id: 7,
            title: 'Kibir',
            description : 'Türkçe rap favorileri',
            image: 'https://i.scdn.co/image/ab67616d00001e02eda68a9be2be266a7e425916',
            artist: 'Contra',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/590d77b1d5f31106a02f6284454c8d71.mp3'
        },

        {
            id: 8,
            title: 'Tavşan',
            description : 'Türkçe rap te en çok dinlenilenler',
            artist: 'Contra',
            image: 'https://i.scdn.co/image/ab67616d00001e02d6eecc95903fa7c0cf564633',
            type: 'album',
            src : 'https://cdn.muzikmp3indir.com/mp3_files/feat-contra-tavsan-4DV9cmXP3a-0.mp3'
        },

        {
            id: 9,
            title: 'Daima',
            description : 'Sanatçı',
            artist: 'Ezhel',
            image: 'https://i.scdn.co/image/ab67616d0000b27332fdc45168d0f118205df26d',
            type: 'artist',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/34e9592b203175990c04fe2a3d28aa09.mp3'
        },

        {
            id: 10,
            title: 'Mermi Stilo',
            artist: 'Miraç feat Defkhan',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e029d583b9bfe35d1b2ff7920cb',
            type: 'podcast',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/5db199112839a1f1299d93c9b01cd38b.mp3'
        },

        {
            id: 11,
            title: 'Zebani',
            artist: 'Contra',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e020c654da0e5ac50074ba487f0',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/8e24a2d236ad88e1adee541ce763dbc1.mp3'
        },
        {
            id: 12,
            title: 'Allahından Bul',
            artist: 'Ezhel',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e0257455fc3c6866e29248d6e72',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/73afd89bb3ed2946b871630e09a516a3.mp3'
        }
    ]


    
    const itemsThree = [
        {
            id: 13,
            title: 'Kural',
            description : 'Türkçe rap favorileri',
            image: 'https://i.scdn.co/image/ab67616d00001e02614d80a7c68149d9492054e0',
            artist: 'Joker feat Miraç',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/c1439b8b224870bc9d8447d4f775a928.mp3'
        },

        {
            id: 14,
            title: 'Parazit',
            description : 'Türkçe rap te en çok dinlenilenler',
            artist: 'Defkhan',
            image: 'https://i.scdn.co/image/ab67616d00001e0215ce8780dcf80cd4325644c2',
            type: 'album',
            src : 'https://cdn.muzikmp3indir.com/mp3_files/3d9b0782f7766abe105f17a4f663368e.mp3'
        },

        {
            id: 15,
            title: 'Olduramadım',
            description : 'Sanatçı',
            artist: 'Defkhan feat Kezzo',
            image: 'https://i.scdn.co/image/ab67616d00001e025625826aa8f8a7725e42b04b',
            type: 'artist',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/807d024b6ec888dce6d8d94ec7409d60.mp3'
        },

        {
            id: 16,
            title: 'Gittin Gideli',
            artist: 'Contra feat Timu322',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e02440110a9f9e69aebc17e843c',
            type: 'podcast',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/112332a8e432f5599f719649a6a65f82.mp3'
        },

        {
            id: 17,
            title: 'Link UP',
            artist: 'Ezhel feat Kelvyn Colt',
            description : 'Türkçe rap te en çok dinlenilenler',
            image: 'https://i.scdn.co/image/ab67616d00001e02cece42c5eb2823e9a2a1f1eb',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/a9c62d1a114ee106dba771a9bf7d3fe7.mp3'
        },
        {
            id: 18,
            title: 'Ağla',
            artist: 'ROTA',
            description : '2021',
            image: 'https://i.scdn.co/image/ab67616d00001e0269cd5eb549c4ef51e823eaf3',
            type: 'album',
            src: 'https://cdn.muzikmp3indir.com/mp3_files/846f2d6cbae11cb5c077cd5231c8f075.mp3'
        }
    ]

    

    return (
        <div className="grid gap-y-9">
            <Section 
                title="Dinlemeye Değer Şarkılar"
                more="/blbl"
                items={items}
            />
            <Section 
                title="Son dinlediklerine dayanarak"
                more="/blbl"
                items={itemsTo}
            />
            <Section 
                title="DeveloperOsman İçin Derlendi"
                more="/blbl"
                items={itemsThree}
            />
        </div>
    )
}

export default Home