import numpy as np

songs = ['Dame Da Ne',
 'National Anthem of USSR',
 'A$AP Rocky - L$D (LOVE x $EX x DREAMS)',
 'BTS(방탄소년단)DOPE(쩔어)',
 'Noak Hellsing - Lost',
 'Gurenge - Lisa',
 'Mac Miller - Good News',
 'Bastille - Those Nights',
 'Martin Garrix feat. Macklemore & Patrick Stump of Fall Out Boy - Summer Days',
 'Lauv - Changes',
 'ODESZA - Line Of Sight (feat. WYNNE & Mansionair)',
 'Never Gonna Give You U',
 'In The End - Linkin Park',
 'Lauv - Sims',
 'Doja Cat - Say So',
 'Lil Mosey - Blueberry Faygo (Dir. by ColeBennett)',
 'heck Wes - Mo Bamba',
 '마마무 (MAMAMOO) - 딩가딩가 (Dingga)',
 'Disturbed - The Sound Of Silence',
 'teve Jablonsky - Arrival To Earth',
 'LeeSSang(리쌍) Pursuing The Happiness(행복을 찾아서) (Feat. Jo Hyuna of Urban Zakapa)',
 "Richard Clayderman - Mariage d'amour",
 'Jake Scott - Man Who Stays',
 'Pharrell Williams - Happy',
 'love ride - christian french',
 'Justin Bieber & benny blanco - Lonely',
 'DaBaby - BOP on Broadway',
 'am Smith - To Die For',
 'Emilee - Heaven',
 'Rich & Sad',
 'John Barrowman - I know him so well (duet with Daniel Boys)',
 'erendipity',
 'Hippie Sabotage - Devil Eyes',
 'Bruno Mars - It Will Rain',
 'Cartoon - On & On (feat. Daniel Levi)',
 'Lil Nas X - HOLIDAY',
 'Dreamville - Down Bad feat. J.I.D, Bas, J. Cole, EarthGang, & Young Nudy',
 'NAV & Gunna ft. Travis Scott - Turks',
 'Mako - Smoke Filled Roo']
 
songs_vector = np.load('./songs.npy')

def image_to_song(image):
    # image values
    amusement = image[:, 0]
    anger = image[:, 1]
    awe = image[:, 2]
    contentment = image[:, 3]
    disgust = image[:, 4]
    excitement = image[:, 5]
    fear = image[:, 6]
    sadness = image[:, 7]

    # make song from image
    song = [
        fear,
        amusement,
        awe,
        contentment,
        anger,
        excitement,
        disgust,
        sadness
    ]

    return np.column_stack(song)
    
def closest_song(song, all_songs, labels):
    # closest in terms of euclidean distance
    distances = np.linalg.norm(all_songs-song, axis=1)
    return labels[np.argmin(distances)]
    
def predict_song_from_img(image):
    # predict a song given the output of the image emotion model
    # ex: predict(np.array([[0, 0, 1, 2, 2, 0, -2, 0]]))

    if request.method == 'OPTIONS':
        # Allows GET/POST requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600' 
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    song = image_to_song(image)
    return closest_song(song, songs_vector, songs), 200, headers
